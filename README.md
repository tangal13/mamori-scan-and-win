# Mamori: Scan & Win

The "Scan & Win" screen from the Mamori internship task, built with React Native and Expo (SDK 58).

## Run it

You need [Node.js](https://nodejs.org) 22 or newer and the [Expo Go](https://expo.dev/go) app on your phone.

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iPhone). Phone and computer must be on the same Wi-Fi. If they can't connect, use `npx expo start --tunnel`.

Checks: `npx tsc --noEmit` and `npx expo lint`.

## What it does

- Five tabs. The app opens on **Scan & Win**.
- **Find Products**, **Take Photos** and **Earn Tickets** open their own screen.
- The date of the next draw comes from a mock API and is shown as a live countdown, with messages for loading, errors and a draw that has started.

## Structure

```
src/
  app/          Screens. Each file is a route (Expo Router).
    (tabs)/     The five tabs. index.tsx is Scan & Win.
  components/   Reusable parts of the screen.
  hooks/        use-next-draw.ts gets the draw date.
  constants/    Colours, fonts, spacing, texts, images, content, API address.
```

Cards that repeat (actions, stats, prizes) are one component each, filled from lists in `constants/content.ts`. Changing a prize means changing data, not layout.

## Mock API

`GET` [`/next-draw`](https://api.mockfly.dev/mocks/006935b1-a88e-432c-8eb9-ac9a371c7aaa/next-draw) on Mockfly returns:

```json
{ "nextDrawAt": "2026-12-30T20:00:00+01:00" }
```

The date has a time zone because a draw is one moment everywhere. The date box and the countdown use the same value, so they can't disagree.

## Choices

| Choice | Why |
| --- | --- |
| `react-timer-hook` | Actively maintained and only returns numbers, so the design stays ours. `react-native-countdown-component` was last published in 2020, and `react-countdown` asks for `react-dom`. |
| Expo Router | Expo's default. The folders show the navigation. |
| `Tabs` from `expo-router/js-tabs` | Can be styled like the design (dark bar, green line). |
| `fetch` and `useState` in one hook | One request and one screen don't need axios or Redux. |
| `backgroundImage` for the gradient | Part of React Native, so no extra package. |
| `expo-image` | Comes with the template and shows SVG files. |
| Nunito and Fira Sans, loaded with `useFonts` | Works in Expo Go. |

## Problems and solutions

- **The phone opened on Home, the browser on Scan & Win.** The tabs folder had no layout file yet, so Expo Router listed Home first. Adding the layout solved it.
- **Text was cut off at 360 points wide.** The design is 390 wide, so it only showed up when testing other sizes.
- **Larger text pushed the countdown below the date.** Found on a real phone with a larger font setting. The big numbers no longer grow with it; the labels do.

## Not included

- Real scanning, login and user data.
- "Scan Products & Win", "Share with Friends & Win" and the "View" links are visual only.

## How AI was used

Claude (AI) wrote the code and the first version of this README. I set the direction, created the mock API and tested the app on my Android phone, which brought the first and third problem above to light. Later commits name Claude as co-author; the first ones don't, but AI helped with those too.
