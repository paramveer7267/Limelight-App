import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const tokenCache =
  Platform.OS !== "web"
    ? {
        getToken: async (key: string) => {
          return await SecureStore.getItemAsync(key);
        },
        saveToken: async (key: string, value: string) => {
          await SecureStore.setItemAsync(key, value);
        },
      }
    : undefined;
