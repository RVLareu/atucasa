import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import { TextInput } from "@react-native-material/core";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



const MainScreen = ({navigation, route}) => {
  return (
    <View style={styles.view}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />

  <TextInput variant="filled" color="#0f3648" label="Buscar Especialista" style={{ margin: 16, marginTop: '30%' }} />
  <AppBar
    variant="bottom"
    color="#0f3648"
    leading={props => (
      <IconButton icon={props => <Icon name="account" {...props} />} {...props}
        onPress={() =>
            navigation.navigate('Profile')
      }
      />
    )}


    style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
    >
    <FAB
      icon={props => <Icon name="plus" {...props} />}
      style={{ position: "absolute", top: -28, alignSelf: "center" }}
    />
  </AppBar>

</View>

  );
};


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: '8%'
  },
  view: {
    flex: 1
  },
});
export default MainScreen;






