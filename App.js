import { Text, View } from "react-native";
import { useFonts } from "expo-font";

  const App = () => {
    const [fontsLoaded, fontError] = useFonts({
      "Metro-Bold": require("./assets/fonts/Metropolis-Bold.otf"),
      "Metro-Medium": require("./assets/fonts/Metropolis-Medium.otf"),
      "Metro-SemiBold": require("./assets/fonts/Metropolis-SemiBold.otf"),
      "Metro-Black": require("./assets/fonts/Metropolis-Black.otf"),
      });
    if (!fontsLoaded) return
      <View>
      <Text>Font tidak ditemukan!</Text>
      </View>

      return (
        <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}> 

      <Text>Font Biasa</Text>
      <Text style={{ fontFamily: "Metro-Bold", fontSize: 30, }}>Metro Bold</Text>
      <Text style={{ fontFamily: "Metro-Medium", fontSize: 30, alignItems: 'center' }}>Metro Medium</Text>
      <Text style={{ fontFamily: "Metro-SemiBold", fontSize: 30, alignItems: 'center' }}>Metro SemiBold</Text>
      <Text style={{ fontFamily: "Metro-Black", fontSize: 30, alignItems: 'center' }}>Metro Black</Text>
    </View>
  );
};
export default App;