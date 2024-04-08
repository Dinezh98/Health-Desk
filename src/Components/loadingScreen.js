import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('onBoarding');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/doctor.png')}
        style={{
          height: 100,
          width: 100,
          resizeMode: 'contain'
        }}
      />
      <Text style={styles.title}>Health Desk</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2586',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    marginTop: 20,
    color: '#FFF',
  },
});
