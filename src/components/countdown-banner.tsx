import { StyleSheet, Text, View } from "react-native";

import { CountdownTimer } from "@/components/countdown-timer";
import { COLORS } from "@/constants/colors";
import { STRINGS } from "@/constants/strings";
import { CARD_SHADOW, FONTS, RADIUS, SPACING } from "@/constants/theme";
import { useNextDraw } from "@/hooks/use-next-draw";

export function CountdownBanner() {
  const { drawDate, hasError } = useNextDraw();

  return (
    <View style={styles.banner}>
      {drawDate && (
        <View style={styles.dateBox}>
          {/* With a large phone font, a growing date box would push the countdown down. */}
          <Text style={styles.day} allowFontScaling={false}>
            {drawDate.getDate()}
          </Text>
          <Text style={styles.month} allowFontScaling={false}>
            {drawDate
              .toLocaleDateString("en-GB", { month: "long" })
              .toUpperCase()}
          </Text>
          <Text style={styles.time} allowFontScaling={false}>
            {drawDate.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{STRINGS.nextDraw}</Text>
        {drawDate ? (
          <CountdownTimer drawDate={drawDate} />
        ) : (
          <Text style={styles.message}>
            {hasError ? STRINGS.drawError : STRINGS.drawLoading}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    minHeight: 96,
    flexDirection: "row",
    // On very narrow screens the countdown moves below the date.
    flexWrap: "wrap",
    // Keeps the date box as high as the banner.
    alignContent: "stretch",
    gap: SPACING.medium,
    padding: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundImage: `linear-gradient(${COLORS.orange}, ${COLORS.yellow})`,
    boxShadow: CARD_SHADOW,
  },
  dateBox: {
    // The box grows for months with a long name.
    minWidth: 66,
    paddingHorizontal: SPACING.small,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.small,
    backgroundColor: COLORS.white,
  },
  day: {
    fontFamily: FONTS.extraBold,
    fontSize: 40,
    lineHeight: 40,
    color: COLORS.dark,
  },
  month: {
    fontFamily: FONTS.extraBold,
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.dark,
  },
  time: {
    fontFamily: FONTS.extraBold,
    fontSize: 20,
    lineHeight: 22,
    color: COLORS.dark,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: FONTS.extraBold,
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.black,
  },
  message: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.black,
  },
});
