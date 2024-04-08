import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import slides from '../Constant/slider';
import OnBoardingItem from './onBoardingItem';
import { Icon } from 'react-native-paper';

const OnBoardingScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const flatListRef = useRef(null);

  const handlePaginationPress = index => {
    setActiveIndex(index);
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  const handleFabPress = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
      flatListRef.current.scrollToIndex({ index: activeIndex + 1, animated: true });
    } else {
      setOnboardingCompleted(true);
      navigation.replace('Login');
    }
  };

  const handleSkipPress = () => {
    setOnboardingCompleted(true);
    navigation.replace('Login');
  };

  if (onboardingCompleted) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ marginEnd: 20, marginBottom: 20 }} onPress={handleSkipPress}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={(event) => {
          const slideWidth = event.nativeEvent.layoutMeasurement.width;
          const offset = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.floor(offset / slideWidth);
          setActiveIndex(currentIndex);
        }}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dash,
              { backgroundColor: index === activeIndex ? 'blue' : 'gray' },
            ]}
            onPress={() => handlePaginationPress(index)}
          />
        ))}
      </View>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity style={styles.fab} onPress={handleFabPress}>
          <Icon
            source="arrow-right"
            iconColor={'blue'}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  pagination: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dash: {
    width: 8,
    height: 2,
    backgroundColor: 'blue',
    marginHorizontal: 2,
    borderRadius: 1,
  },
  fab: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
  },
});
