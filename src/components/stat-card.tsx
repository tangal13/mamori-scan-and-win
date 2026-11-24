import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { CARD_SHADOW, FONTS, RADIUS, SPACING } from "@/constants/theme";

type StatCardProps = {
  value: string;
  valueColor: string;
  label: string;
  link: string;
};

export function StatCard({ value, valueColor, label, link }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.link}>{link}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // The cards grow from the width of their text, like in the design.
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
    paddingVertical: SPACING.medium,
    paddingHorizontal: 2,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.white,
    boxShadow: CARD_SHADOW,
  },
  value: {
    fontFamily: FONTS.extraBold,
    fontSize: 24,
    lineHeight: 34,
  },
  label: {
    fontFamily: FONTS.body,
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    color: COLORS.gray,
  },
  link: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.coral,
  },
});
