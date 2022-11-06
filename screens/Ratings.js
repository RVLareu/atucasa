import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem, IconComponentProvider, Icon } from "@react-native-material/core";


import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Ratings({navigation, route}) {


  const data = [
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/5.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/4.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/5.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
    {
      title: 'Dr. Juan Perez',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
      rating: '4.5',
      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.'
    },
  ]

  return (
    <ScrollView style={styles.container}>
      
          {data.map((item, index) => {
            return (
              <View style={{ backgroundColor: "blue", flex: 1 }} 
              key={index}>
              <ListItem
                key={index}
                title={item.title}
                secondaryText={item.secondaryText}
                leadingMode="avatar"
                containerStyle={{backgroundColor:"red"}}
                leading={          
                  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <Icon name="star" size={30} color="#188098"/>
                    <Text>{item.rating}</Text>
                  </IconComponentProvider>}
                onPress={() => navigation.navigate('RatingDetails', {item})}
              />
              </View>
            )
          })}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  listItem: {
   backgroundColor: '#0c0c1c'
  }

});