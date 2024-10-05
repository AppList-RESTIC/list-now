import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="home" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="welcome" options={{ headerTitle: "Welcome" }} />
      <Stack.Screen
        name="createTask"
        options={{ headerTitle: "Criar Tarefa" }}
      />
      <Stack.Screen name="tasks" options={{ headerTitle: "Tarefa" }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
    </Stack>
  );
}
