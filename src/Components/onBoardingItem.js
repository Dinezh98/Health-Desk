import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';


const OnBoardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.2, marginTop: 10}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  image: {
    flex: 0.6,
    marginBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
