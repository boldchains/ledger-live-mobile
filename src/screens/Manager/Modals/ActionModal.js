import React, { memo } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import type { BaseButtonProps } from "../../../components/Button";
import Button from "../../../components/Button";
import BottomModal from "../../../components/BottomModal";
import colors from "../../../colors";
import getWindowDimensions from "../../../logic/getWindowDimensions";

const { height } = getWindowDimensions();

type Props = {
  isOpened: boolean,
  onClose: () => void,
  children: Node,
  actions: Array<BaseButtonProps>,
};

const ActionModal = ({ isOpened, onClose, children, actions = [] }: Props) => (
  <BottomModal
    isOpened={isOpened}
    onClose={onClose}
    preventBackdropClick={false}
  >
    <SafeAreaView style={styles.root}>
      {children}
      {actions.length > 0 && (
        <View style={styles.modalFooter}>
          {actions.map(({ title, onPress, type = "primary", ...props }, i) => (
            <Button
              key={i}
              containerStyle={styles.actionButton}
              type={type}
              title={title}
              onPress={onPress}
              {...props}
            />
          ))}
        </View>
      )}
    </SafeAreaView>
  </BottomModal>
);

const styles = StyleSheet.create({
  root: {
    maxHeight: height - 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 32,
  },
  dragZone: {
    height: 50,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dragHandle: {
    marginTop: 10,
    height: 4,
    width: 50,
    backgroundColor: colors.lightFog,
    borderRadius: 4,
  },
  modalFooter: {
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  actionButton: {
    height: 48,
    borderRadius: 3,
    marginTop: 16,
  },
});

export default memo(ActionModal);
