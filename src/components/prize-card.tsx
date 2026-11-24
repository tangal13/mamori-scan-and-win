import { Image, type ImageProps } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { STRINGS } from "@/constants/strings";
import { CARD_SHADOW, FONTS, RADIUS, SPACING } from "@/constants/theme";

type PrizeCardProps = {
  shop: string;
  logo: ImageProps["source"];
  medal: ImageProps["source"];
  amount: string;
  color: string;
};

export function PrizeCard({
  shop,
  logo,
  medal,
  amount,
  color,
}: PrizeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.logoArea}>
        <Image
          source={logo}
          alt={shop}
          contentFit="contain"
          style={styles.logo}
        />
      </View>
      <View style={[styles.voucher, { backgroundColor: color }]}>
        <Text style={styles.amount} numberOfLines={1} adjustsFontSizeToFit>
          {amount}
        </Text>
        <Text style={styles.voucherLabel}>{STRINGS.voucher}</Text>
      </View>
      <Image source={medal} style={styles.medal} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.white,
    boxShadow: CARD_SHADOW,
  },
  logoArea: {
    height: 64,
    padding: SPACING.small,
  },
  logo: {
    flex: 1,
    // Keeps the logo below the medal.
    marginTop: SPACING.medium,
  },
  voucher: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.small,
    borderBottomLeftRadius: RADIUS.medium,
    borderBottomRightRadius: RADIUS.medium,
  },
  amount: {
    fontFamily: FONTS.black,
    fontSize: 28,
    lineHeight: 32,
    color: COLORS.white,
  },
  voucherLabel: {
    fontFamily: FONTS.body,
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.white,
  },
  medal: {
    position: "absolute",
    // Half of the medal sticks out above the card.
    top: -15,
    alignSelf: "center",
    width: 30,
    height: 30,
  },
});
