// @flow
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import type { Account } from "@ledgerhq/live-common/lib/types";
import LText from "../../components/LText";
import Card from "../../components/Card";
import CurrencyUnitValue from "../../components/CurrencyUnitValue";
import CounterValue from "../../components/CounterValue";
import CurrencyIcon from "../../components/CurrencyIcon";
import colors from "../../colors";
import { isUpToDateAccountSelector } from "../../reducers/accounts";
import { accountSyncStateSelector } from "../../reducers/bridgeSync";
import type { AsyncState } from "../../reducers/bridgeSync";
import AccountSyncStatus from "./AccountSyncStatus";

const mapStateToProps = createStructuredSelector({
  syncState: accountSyncStateSelector,
  isUpToDateAccount: isUpToDateAccountSelector,
});

type Props = {
  account: Account,
  syncState: AsyncState,
  style?: any,
  isUpToDateAccount: boolean,
  navigation: *,
};

const TICK_W = 6;
const TICK_H = 20;

class AccountRow extends PureComponent<Props> {
  onPress = () => {
    this.props.navigation.navigate("Account", {
      accountId: this.props.account.id,
    });
  };

  render() {
    const { account, style, isUpToDateAccount, syncState } = this.props;
    return (
      <Card onPress={this.onPress} style={[styles.root, style]}>
        <CurrencyIcon size={24} currency={account.currency} />
        <View style={styles.inner}>
          <LText semiBold numberOfLines={1} style={styles.accountNameText}>
            {account.name}
          </LText>
          <AccountSyncStatus
            isUpToDateAccount={isUpToDateAccount}
            {...syncState}
          />
        </View>
        <View style={styles.balanceContainer}>
          <LText tertiary style={styles.balanceNumText}>
            <CurrencyUnitValue
              showCode
              unit={account.unit}
              value={account.balance}
            />
          </LText>
          <View style={styles.balanceCounterContainer}>
            <LText tertiary style={styles.balanceCounterText}>
              <CounterValue
                showCode
                currency={account.currency}
                value={account.balance}
              />
            </LText>
          </View>
        </View>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(AccountRow);

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    height: 72,
    overflow: "visible",
  },
  inner: {
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 16,
    flexDirection: "column",
  },
  accountNameText: {
    color: colors.darkBlue,
    fontSize: 14,
    marginBottom: 5,
  },
  balanceContainer: {
    marginLeft: 16,
    alignItems: "flex-end",
  },
  balanceNumText: {
    fontSize: 16,
    color: colors.darkBlue,
  },
  balanceCounterContainer: {
    marginTop: 5,
  },
  balanceCounterText: {
    fontSize: 14,
    color: colors.smoke,
  },
  tickError: {
    backgroundColor: colors.alert,
  },
  tickPending: {
    backgroundColor: colors.fog,
  },
  tick: {
    position: "absolute",
    left: -TICK_W + 1, // +1 is hack for android. it would disappear otherwise^^
    width: TICK_W,
    height: TICK_H,
  },
});
