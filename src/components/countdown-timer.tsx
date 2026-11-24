import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTimer } from "react-timer-hook";

import { COLORS } from "@/constants/colors";
import { STRINGS } from "@/constants/strings";
import { FONTS } from "@/constants/theme";

type CountdownTimerProps = {
  drawDate: Date;
};

// useTimer only reads drawDate when this component first appears,
// so render it after the date has loaded.
export function CountdownTimer({ drawDate }: CountdownTimerProps) {
  const { totalSeconds, days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: drawDate,
  });

  if (totalSeconds === 0) {
    return <Text style={styles.message}>{STRINGS.drawStarted}</Text>;
  }

  const units = [
    { label: STRINGS.days, value: days },
    { label: STRINGS.hours, value: hours },
    { label: STRINGS.minutes, value: minutes },
    { label: STRINGS.seconds, value: seconds },
  ];

  return (
    <View style={styles.row}>
      {units.map(({ label, value }, index) => (
        <Fragment key={label}>
          {/* The numbers are already large, so only the labels follow the phone's font size. */}
          {index > 0 && (
            <Text style={[styles.value, styles.colon]} allowFontScaling={false}>
              :
            </Text>
          )}
          <View style={styles.unit}>
            <Text style={styles.value} allowFontScaling={false}>
              {String(value).padStart(2, "0")}
            </Text>
            <Text style={styles.label}>{label}</Text>
          </View>
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  unit: {
    alignItems: "center",
  },
  value: {
    fontFamily: FONTS.black,
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: 2,
    color: COLORS.black,
  },
  colon: {
    letterSpacing: 0,
  },
  label: {
    fontFamily: FONTS.black,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    color: COLORS.black,
  },
  message: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.black,
  },
});
