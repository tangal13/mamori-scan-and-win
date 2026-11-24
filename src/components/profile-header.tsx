import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { ICONS, IMAGES } from "@/constants/images";
import { STRINGS } from "@/constants/strings";
import { FONTS, SPACING } from "@/constants/theme";

export function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Image source={IMAGES.avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.greeting}>{STRINGS.greeting}</Text>
        <Text style={styles.scanLevel}>{STRINGS.scanLevel}</Text>
      </View>
      <View style={styles.tickets}>
        <View style={styles.ticketCount}>
          <Image
            source={ICONS.ticket}
            tintColor={COLORS.black}
            style={styles.ticketIcon}
          />
          <Text style={styles.count}>{STRINGS.ticketCount}</Text>
        </View>
        <Text style={styles.link}>{STRINGS.viewEntries}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.large,
    paddingBottom: SPACING.large,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profile: {
    flex: 1,
  },
  greeting: {
    fontFamily: FONTS.extraBold,
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.dark,
  },
  scanLevel: {
    fontFamily: FONTS.body,
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.dark,
  },
  tickets: {
    alignItems: "flex-end",
  },
  ticketCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.small,
  },
  ticketIcon: {
    width: 24,
    height: 24,
  },
  count: {
    fontFamily: FONTS.extraBold,
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.black,
  },
  link: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.coral,
  },
});
