import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function App() {
  return (
      <View style={{
        flex:1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      marginBottom: 100,
    }}>
      <View style={{
        backgroundColor: 'Yellow',
        width: 150,
        height: 55,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 23,
          fontWeight: 'bold'
        }}>
          Login
        </Text>
      </View>
      <View style={{
        backgroundColor: 'Green',
        width: 150,
        height: 55,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 23,
          fontWeight: 'bold',
        }}>
          Register
        </Text>
      </View>
    </View>
  );
}

