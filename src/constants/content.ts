import { COLORS } from "@/constants/colors";
import { ICONS, IMAGES } from "@/constants/images";
import { ACTION_TITLES } from "@/constants/strings";

export const ACTIONS = [
  {
    title: ACTION_TITLES.findProducts,
    icon: ICONS.search,
    iconColor: COLORS.dark,
    circleColor: COLORS.white,
    href: "/find-products",
  },
  {
    title: ACTION_TITLES.takePhotos,
    icon: ICONS.camera,
    iconColor: COLORS.white,
    circleColor: COLORS.orange,
    href: "/take-photos",
  },
  {
    title: ACTION_TITLES.earnTickets,
    icon: ICONS.ticket,
    iconColor: COLORS.white,
    circleColor: COLORS.green,
    href: "/earn-tickets",
  },
] as const;

export const STATS = [
  {
    value: "6",
    valueColor: COLORS.green,
    label: "Scans Today",
    link: "View Scans",
  },
  {
    value: "+12",
    valueColor: COLORS.black,
    label: "Tickets Earned",
    link: "View Entries",
  },
  {
    value: "125",
    valueColor: COLORS.black,
    label: "Total Tickets",
    link: "View Entries",
  },
];

export const PRIZES = [
  {
    shop: "Welbee’s",
    logo: IMAGES.logoWelbees,
    medal: IMAGES.medalGold,
    amount: "€1,000",
    color: COLORS.green,
  },
  {
    shop: "Greens",
    logo: IMAGES.logoGreens,
    medal: IMAGES.medalSilver,
    amount: "€100",
    color: COLORS.dark,
  },
  {
    shop: "PAVI PAMA",
    logo: IMAGES.logoPaviPama,
    medal: IMAGES.medalBronze,
    amount: "€50",
    color: COLORS.coral,
  },
];
