import { Image, type ImageProps } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { CARD_SHADOW, FONTS, RADIUS, SPACING } from "@/constants/theme";

type ActionCardProps = {
  title: string;
  icon: ImageProps["source"];
  iconColor: string;
  circleColor: string;
  borderColor: string;
  onPress: () => void;
};

export function ActionCard({
  title,
  icon,
  iconColor,
  circleColor,
  borderColor,
  onPress,
}: ActionCardProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.card}>
      <View style={[
          styles.circle,
          { backgroundColor: circleColor, borderColor },
        ]}>
        <Image source={icon} tintColor={iconColor} style={styles.icon} />
      </View>
      {/* The design always shows the two words on two lines. */}
      <Text style={styles.title}>{title.replace(" ", "\n")}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    gap: SPACING.medium,
    paddingVertical: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.white,
    boxShadow: CARD_SHADOW,
  },
  circle: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: FONTS.extraBold,
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: COLORS.dark,
  },
});
