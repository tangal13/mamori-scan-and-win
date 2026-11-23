import { Tabs } from "expo-router/js-tabs";

import { TAB_TITLES } from "@/constants/strings";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: TAB_TITLES.home }} />
      <Tabs.Screen name="products" options={{ title: TAB_TITLES.products }} />
      <Tabs.Screen name="lists" options={{ title: TAB_TITLES.lists }} />
      <Tabs.Screen name="index" options={{ title: TAB_TITLES.scanAndWin }} />
      <Tabs.Screen name="profile" options={{ title: TAB_TITLES.profile }} />
    </Tabs>
  );
}
