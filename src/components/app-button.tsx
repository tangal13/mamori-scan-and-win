import { Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONTS, RADIUS } from "@/constants/theme";

type AppButtonProps = {
  title: string;
  variant: "filled" | "outline";
};

export function AppButton({ title, variant }: AppButtonProps) {
  const isFilled = variant === "filled";

  return (
    <Pressable
      accessibilityRole="button"
      style={[styles.button, isFilled ? styles.filled : styles.outline]}
    >
      <Text
        style={[
          styles.title,
          { color: isFilled ? COLORS.background : COLORS.green },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.pill,
    borderWidth: 1.5,
    borderColor: COLORS.green,
  },
  filled: {
    backgroundColor: COLORS.green,
  },
  outline: {
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
});
