import { FiraSans_400Regular } from "@expo-google-fonts/fira-sans";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  useFonts,
} from "@expo-google-fonts/nunito";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { ACTION_TITLES, TAB_TITLES } from "@/constants/strings";

// Keep the splash screen visible until the fonts are ready.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    FiraSans_400Regular,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });
  // If a font fails to load, show the app with the phone's own font.
  const isReady = fontsLoaded || fontError !== null;

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      {/* The status bar area is white, so its text must always be dark. */}
      <StatusBar style="dark" />
      <Stack>
        {/* The title is not shown here, but the back button uses it. */}
        <Stack.Screen
          name="(tabs)"
          options={{ title: TAB_TITLES.scanAndWin, headerShown: false }}
        />
        <Stack.Screen
          name="find-products"
          options={{ title: ACTION_TITLES.findProducts }}
        />
        <Stack.Screen
          name="take-photos"
          options={{ title: ACTION_TITLES.takePhotos }}
        />
        <Stack.Screen
          name="earn-tickets"
          options={{ title: ACTION_TITLES.earnTickets }}
        />
      </Stack>
    </>
  );
}
