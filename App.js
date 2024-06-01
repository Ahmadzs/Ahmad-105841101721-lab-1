import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";


const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
  }}>
    <SafeAreaView>

    <SignUp/> 
     {/* <Login/> 
      {/* <ForgotPassword/> */}

    </SafeAreaView>
    </View>
  )
}

export default App;