import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="films"
      options={{ headerShown: false }}
    />
  </Stack>;
}
