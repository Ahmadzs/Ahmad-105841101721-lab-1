import { Text, View } from "react-native";

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      marginbottom: 100
    }}>
      <ButtonComponent backgroundColor='green' text='Login' />
      <ButtonComponent backgroundColor='green' text='Register' />
      </View>
  )
}
const ButtonComponent = ({ backgroundColor, text }) => {
  return (
    <View style={{
      backgroundColor: backgroundColor,
      width: 150,
      height: 70,
      marginRight: 10,
      borderRadius: 10,
    }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
        lineHeight: 70,
        fontSize: 20,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

export default CustomButton;