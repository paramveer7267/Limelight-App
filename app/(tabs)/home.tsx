import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/notifications"}> Visit notifications screen</Link>
    </View>
  );
}
