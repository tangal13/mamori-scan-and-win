import { Image } from "expo-image";
import { Tabs } from "expo-router/js-tabs";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabButton } from "@/components/tab-button";
import { COLORS } from "@/constants/colors";
import { ICONS } from "@/constants/images";
import { TAB_TITLES } from "@/constants/strings";
import { FONTS } from "@/constants/theme";

const TAB_BAR_HEIGHT = 72;

const TABS = [
  { name: "home", title: TAB_TITLES.home, icon: ICONS.home },
  { name: "products", title: TAB_TITLES.products, icon: ICONS.products },
  { name: "lists", title: TAB_TITLES.lists, icon: ICONS.lists },
  { name: "index", title: TAB_TITLES.scanAndWin, icon: ICONS.ticket },
  { name: "profile", title: TAB_TITLES.profile, icon: ICONS.profile },
];

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarLabelStyle: styles.label,
        // The phone's own bar at the bottom needs space below ours.
        tabBarStyle: [styles.bar, { height: TAB_BAR_HEIGHT + insets.bottom }],
        tabBarButton: (props) => <TabButton {...props} />,
      }}
    >
      {TABS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) => (
              <Image
                source={icon}
                tintColor={String(color)}
                style={styles.icon}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.dark,
    borderTopWidth: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    marginTop: 2,
  },
});
