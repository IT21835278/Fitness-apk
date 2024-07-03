import { View, Text, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { sliderImages } from '../constants/index';

export default function ImageSlideShow() {
  return (
    <Carousel
      data={sliderImages}
      loop
      autoPlay
      renderItem={ItemCard}
      width={wp(100)}
      height={hp(25)}
      autoPlayInterval={4000}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
    />
  );
}

const ItemCard = ({ item, index }) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25), alignSelf: 'center' }}>
      <Image
        source={item}
        style={{ width: '100%', height: '100%', borderRadius: 30, resizeMode: 'contain' }}
      />
    </View>
  );
};
