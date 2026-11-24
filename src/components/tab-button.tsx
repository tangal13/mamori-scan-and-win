import { PlatformPressable } from "expo-router/react-navigation";
import type { ComponentProps } from "react";
import { StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";

type TabButtonProps = ComponentProps<typeof PlatformPressable>;

// The normal tab button, plus the green line above the selected tab.
export function TabButton({ style, ...props }: TabButtonProps) {
  return (
    <PlatformPressable
      {...props}
      style={[
        style,
        styles.button,
        props["aria-selected"] && styles.selectedButton,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    // The default padding cuts off "Scan & Win" on narrow phones.
    paddingHorizontal: 0,
    // Every tab has the line, so the icons don't move when it turns green.
    borderTopWidth: 2,
    borderTopColor: "transparent",
  },
  selectedButton: {
    borderTopColor: COLORS.green,
  },
});
