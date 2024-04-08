import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import React,{useEffect} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-paper';
import services from '../Constant/services';
import CustomButton from '../Components/CustomButton';

const HomeScreen = () => {
  
  const renderServiceItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={{
          width: 120,
          alignItems: 'center',
          marginRight: 8,
          backgroundColor: '#e5f6f5',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
        <Image source={item.image} style={styles.imageList} />
      </TouchableOpacity>
      <Text style={styles.optionText}>{item.option}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>Hi Deepa!</Text>
        <Icons name={'bell'} size={20} color={'#FFF'} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginVertical: 10}}>
              <Text style={styles.title}>Individual Plan</Text>
              <Text style={styles.subTitle}>Book your health checkup</Text>
            </View>
            <Image
              source={require('../assets/images/doctor.png')}
              style={styles.image}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subText}>Know Your Benefits</Text>
            <Icon source="arrow-right" size={20} color={'#1f2586'} />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          marginLeft: 20,
          marginTop: 70,
        }}>
        <Text style={styles.subTitle}>Our Service</Text>
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.cardBanner}>
        <View style={styles.card2}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: 200, justifyContent: 'space-between'}}>
              <Text style={styles.title}>Book Annual Health Checkups</Text>
              <View style={styles.bulletContainer}>
                <View style={styles.bullet}>
                  <Text style={styles.bulletText}>•</Text>
                  <Text style={styles.listText}>Diabetes</Text>
                </View>
                <View style={styles.bullet}>
                  <Text style={styles.bulletText}>•</Text>
                  <Text style={styles.listText}>Thyroid</Text>
                </View>
              </View>
              <View style={styles.bulletContainer}>
                <View style={styles.bullet}>
                  <Text style={styles.bulletText}>•</Text>
                  <Text style={styles.listText}>Heart</Text>
                </View>
                <View style={styles.bullet}>
                  <Text style={styles.bulletText}>•</Text>
                  <Text style={styles.listText}>Kidney</Text>
                </View>
              </View>
              <View style={styles.ButtonConatiner}>
                <CustomButton
                  buttonProps={{
                    title: 'Book Now',
                    onPress: () => {
                      navigation.navigate('Home');
                    },
                  }}
                  height={40}
                  width={120}
                  fontSize={14}
                />
              </View>
            </View>
            <Image
              source={require('../assets/images/book.png')}
              style={[
                styles.image,
                {width: 150, height: 120, resizeMode: 'cover'},
              ]}
            />
          </View>
        </View>
      </View>
      <View style={styles.quickContainer}>
      <Text style={styles.subTitle}>Quick Access</Text>
      
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.quickButton}>
          <Icons name={'user'} size={40} color='#1f2586'/>
          <Text style={styles.subText2}>My Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}  onPress={() => {
    Alert.alert('Appointment Created!', 'Successfully created an appointment.');
  }}>
          <Icons name={'calendar'} size={40} color= '#1f2586'/>
          <Text style={[styles.subText2,{textAlign:'center'}]}>Create Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton}>
          <Icons name={'book'} size={40} color='#1f2586'/>
          <Text style={styles.subText2}>My Reports</Text>
        </TouchableOpacity>
      </View> 
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#1f2586',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  cardBanner: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 150,
    width: 380,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card2: {
    height: 170,
    width: 380,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  imageList: {
    height: 120,
    width: 100,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 10,
  },
  subText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2586',
    marginEnd: 5,
  },
  subText2: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2586',
    marginTop: 10,
    marginEnd: 5,
  },
  optionText: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  ButtonConatiner: {
    marginTop: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  bulletContainer: {
    marginLeft: 5,
    marginTop: 4,
    flexDirection: 'row',
  },
  bullet: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 20,
  },
  bulletText: {
    fontSize: 16,
    color: '#e5f6f5',
  },
  listText: {
    fontSize: 12,
    color: '#000',
    marginLeft: 5,
  },
  quickContainer:{
    flex: 0.25,
    marginTop: 5,
    marginLeft: 20,
    // backgroundColor:'red'
  },
  quickButton:{
    width: 110,
    height: 100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#e5f6f5',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
