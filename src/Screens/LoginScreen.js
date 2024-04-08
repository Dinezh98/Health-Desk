import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import CustomButton from '../Components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [corpName, setCorpName] = useState('Test');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async () => {
    if (userName === 'username' && password === '123456') {

      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');

    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex: 0.3, alignItems: 'center',paddingTop: 20}}>
          <Image
            source={require('../assets/images/doctor.png')}
            style={styles.image}
          />
          <Text style={styles.subTitle}>Health Desk</Text>
          <Text style={styles.title}>Corporate Login</Text>
          <Text style={styles.text}>Hi, Welcome Back!</Text>
        </View>
        <View style={styles.inputfield}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelFont}>Corporate Name</Text>
            <View style={styles.inputBox}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#f2f2f2',
                  padding: 14,
                }}>
                <Icon name={'user'} size={20} />
              </View>
              <TextInput
                style={{flex: 1, marginLeft: 10, padding: 4}}
                value={corpName}
                onChangeText={text => setCorpName(text)}
                placeholder="Enter Name"
                placeholderTextColor={'#D9D9D9'}
                selectionColor={'#D9D9D9'}
              />
              <TouchableOpacity
                style={{padding: 10}}>
                <Icon
                  name={'angle-down'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.noteText}>
              Type 3 Characters to search for Corporate
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelFont}>User Name</Text>
            <View style={styles.inputBox}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#f2f2f2',
                  padding: 14,
                }}>
                <Icon name={'user'} size={20} />
              </View>
              <TextInput
                style={{marginLeft: 10}}
                value={userName}
                onChangeText={text => setUserName(text)}
                placeholder="Enter User Name"
                placeholderTextColor={'#D9D9D9'}
                selectionColor={'#D9D9D9'}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelFont}>Password</Text>
            <View style={[styles.inputBox]}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#f2f2f2',
                  padding: 14,
                }}>
                <Icon name={'lock'} size={20} />
              </View>
              <TextInput
                style={{flex: 1, marginLeft: 10}}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Enter Password"
                placeholderTextColor={'#D9D9D9'}
                selectionColor={'#D9D9D9'}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{padding: 10}}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ButtonConatiner}>
          <CustomButton
            buttonProps={{
              title: 'Login',
              onPress: handleLogin,
            }}
            height={40}
            width={350}
            fontSize={14}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 5,
    color: '#333333',
  },
  subTitle: {
    fontWeight: '800',
    fontSize: 18,
    marginVertical: 10,
    marginBottom: 10,
    color: '#1f2586',
  },
  text: {
    fontSize: 14,
    color: '#1f2586',
    marginBottom: 20,
  },
  noteText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  inputfield: {
    flex: 0.4,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  inputContainer: {
    marginBottom: 15,
  },
  labelFont: {
    color: '#000',
    marginBottom: 5,
  },
  inputBox: {
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,
    width: '100%',
    // paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  ButtonConatiner: {
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 50,
  },
});
