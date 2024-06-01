import { View } from "react-native";
import { KolomComponent } from "./App";

export const CustomButton = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        marginbottom: 100,
      }}
    >
      <KolomComponent backgroundColor="green" text="Login" />
      <KolomComponent backgroundColor="green" text="Register" />
    </View>
  );
};
