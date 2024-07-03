import { View, Image } from 'react-native';
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
        parallaxScrollingScale: 0.90,
        parallaxScrollingOffset: 105,
        parallaxAdjacentItemScale:0.75
      }}
    />
  );
}

const ItemCard = ({ item }) => {
  return (
    <View className="w-[85%] h-[25vh] self-center shadow-lg bg-white rounded-3xl">
      <Image
        source={item}
        className="w-full h-full rounded-3xl object-contain"
      />
    </View>
  );
};
