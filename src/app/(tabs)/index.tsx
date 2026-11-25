import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ActionCard } from "@/components/action-card";
import { AppButton } from "@/components/app-button";
import { CountdownBanner } from "@/components/countdown-banner";
import { PrizeCard } from "@/components/prize-card";
import { ProfileHeader } from "@/components/profile-header";
import { StatCard } from "@/components/stat-card";
import { COLORS } from "@/constants/colors";
import { ACTIONS, PRIZES, STATS } from "@/constants/content";
import { STRINGS } from "@/constants/strings";
import { CARD_SHADOW, FONTS, SPACING } from "@/constants/theme";

export default function ScanAndWinScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.statusBar, { height: insets.top }]} />
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileHeader />

        <View style={styles.actions}>
          <Text style={[styles.text, styles.intro]}>{STRINGS.intro}</Text>
          <View style={styles.row}>
            {ACTIONS.map(({ href, ...action }) => (
              <ActionCard
                key={action.title}
                {...action}
                onPress={() => router.navigate(href)}
              />
            ))}
          </View>
        </View>

        <CountdownBanner />

        <View style={[styles.row, styles.stats]}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </View>

        <View style={[styles.row, styles.prizes]}>
          {PRIZES.map((prize) => (
            <PrizeCard key={prize.shop} {...prize} />
          ))}
        </View>

        <AppButton title={STRINGS.scanButton} variant="filled" />

        <View style={styles.referral}>
          <Text style={styles.referralTitle}>{STRINGS.referralTitle}</Text>
          <Text style={styles.text}>{STRINGS.referralText}</Text>
        </View>

        <AppButton title={STRINGS.shareButton} variant="outline" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  statusBar: {
    // Above the content, so its shadow falls on it.
    zIndex: 1,
    backgroundColor: COLORS.white,
    boxShadow: CARD_SHADOW,
  },
  content: {
    gap: SPACING.large,
    paddingVertical: SPACING.large,
    paddingHorizontal: SPACING.screen,
  },
  row: {
    flexDirection: "row",
    gap: SPACING.medium,
  },
  actions: {
    gap: SPACING.medium,
    // The design has less space here than between the other blocks.
    marginTop: -SPACING.medium,
  },
  intro: {
    // Without this the sentence does not fit on one line, as it does in the design.
    letterSpacing: -0.28,
  },
  stats: {
    gap: 6,
  },
  prizes: {
    // Extra space for the medals, which stick out above the cards.
    marginTop: SPACING.large,
  },
  referral: {
    gap: SPACING.medium,
  },
  referralTitle: {
    fontFamily: FONTS.extraBold,
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.dark,
  },
  text: {
    fontFamily: FONTS.body,
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.dark,
  },
});
