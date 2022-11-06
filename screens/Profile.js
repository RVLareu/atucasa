import React from "react";
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Divider, HStack, FAB, Text, VStack, Icon,IconComponentProvider } from "@react-native-material/core";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ObeliscoBA2015.2.jpg/1200px-ObeliscoBA2015.2.jpg" };

const Profile = ({navigation, route}) => {
  return (
    <ScrollView style={styles.scrollview}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Avatar
          size={200}
          style={styles.avatar}
          image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        />
      <Text variant="h3" style={styles.text}>Jhon Doe</Text>
      </ImageBackground>

      <Divider leadingInset={16} />
      <Text variant="s1" style={styles.textSub}>Carpintero</Text>
      <HStack fill center spacing={25} marginTop={'5%'}>
        <VStack center>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="hammer" size={70} color="#188098"/>
          </IconComponentProvider>
          <Text style={styles.star}>300</Text>
        </VStack>
        <VStack center>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="star" size={70} color="#188098"/>
          </IconComponentProvider>
          <Text style={styles.star}>3.3</Text>
        </VStack>
        <VStack center>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="thumb-up" size={70} color="#188098"/>
          </IconComponentProvider>
          <Text style={styles.star}>250</Text>
        </VStack>
      </HStack>
      <VStack>

        <FAB
        variant="extended"
        icon={props => <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                          <Icon name="message" {...props} />
                          </IconComponentProvider>
                          }
        label="Enviar un Mensaje"
        color="#1bb2cb"
        style={styles.fab}
        />
        <FAB
        variant="extended"
        icon={props => <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                          <Icon name="phone" {...props} />
                          </IconComponentProvider>
                          }
        label="Llamar"
        color="#1bb2cb"
        style={styles.fab}
        />
        <FAB
        variant="extended"
        icon={props => <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                          <Icon name="account-star" {...props} />
                          </IconComponentProvider>
                          }
        label="Ver Calificaciones"
        color="#1bb2cb"
        style={styles.fab}
        onPress={() =>
          navigation.navigate('Ratings')
        }
        />
      </VStack>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  scrollview: {
    marginTop: '8%',
    backgroundColor: "#0f3648",
  },
  avatar: {
    backgroundColor: "red",
    alignSelf: "center",
    marginTop: 150,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    jutifyContent: "center"
  },
  badge: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  },
  text:{
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    fontStyle: "italic",
    color: '#ffffff'
  },
  textSub:{
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    color: '#b4b4b9'
  },
  star: {
    color: "#188098",
    fontWeight: "bold",
    fontSize: 20
  },
  fab: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    width: '80%'
  }
});
export default Profile;