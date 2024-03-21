import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { themeColor } from "../themes/Theme";
import RestaurentCard from "./RestaurentCard";

export default function FeaturedRow({ categoryName, hotels, description }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-lg font-bold">{categoryName}</Text>
          <Text className="text-xs text-gray-500 font-light">
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColor.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        <View className="flex-row">
          {hotels.map((hotel, index) => {
            return <RestaurentCard hotelData={hotel} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
