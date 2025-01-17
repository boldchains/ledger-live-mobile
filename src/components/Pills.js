// @flow

import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import LText from "./LText";

type Item = {
  key: string,
  label: string,
  value?: any,
};

type Props = {
  value: string,
  items: Item[],
  onChange: Item => void,
  isDisabled?: boolean,
};

function Pills({ items, value, onChange, isDisabled }: Props) {
  return (
    <ScrollView
      style={styles.root}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item, i) => (
        <Pill
          key={item.key}
          active={value === item.key}
          first={i === 0}
          item={item}
          onPress={onChange}
          isDisabled={isDisabled}
        />
      ))}
    </ScrollView>
  );
}

type PillProps = {
  item: Item,
  first: boolean,
  active: boolean,
  onPress: Item => void,
  isDisabled?: boolean,
};

function Pill({ item, first, active, onPress, isDisabled }: PillProps) {
  const { colors } = useTheme();
  const inner = (
    <LText
      color={
        active
          ? isDisabled
            ? "pillActiveDisabledForeground"
            : "pillActiveForeground"
          : "pillForeground"
      }
      bold
    >
      {item.label}
    </LText>
  );

  if (isDisabled) {
    return (
      <View
        style={[
          styles.pill,
          { borderColor: colors.fog },
          active && {
            backgroundColor: colors.card,
            borderColor: colors.fog,
          },
          first && styles.pillFirst,
        ]}
      >
        {inner}
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.pill,
        { borderColor: colors.fog },
        first && styles.pillFirst,
        active && {
          backgroundColor: colors.pillActiveBackground,
          borderColor: colors.live,
        },
      ]}
      onPress={() => onPress(item)}
    >
      {inner}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  pill: {
    borderWidth: 1.5,
    height: 32,
    marginHorizontal: 5,
    paddingHorizontal: 9,
    borderRadius: 4,
    justifyContent: "center",
  },
  pillFirst: {
    marginLeft: 0,
  },
});

export default memo<Props>(Pills);
