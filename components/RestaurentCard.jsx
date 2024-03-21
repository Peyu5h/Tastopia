import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { themeColor } from "../themes/Theme";
import * as Icons from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function RestaurentCard({ hotelData }) {
  const navigation = useNavigation();
  const rating = hotelData.reviews;
  const randomAdditionalReviews = Math.floor(Math.random() * 10) + 1;
  const totalReviews = parseInt(rating) + randomAdditionalReviews;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Restaurant", { restaurantData: hotelData })
      }
    >
      <View className="flex mb-6 mr-6 rounded-3xl bg-white shadow-2xl shadow-orange-400 drop-shadow-lg ">
        <Image
          className="w-64 h-36 rounded-t-3xl"
          source={{
            uri: hotelData.image,
          }}
        />
        <View className="px-3 pb-4 space-y-1 flex flex-col ">
          <Text className="text-lg font-semibold mt-2 text-gray-600 ">
            {hotelData.name}
          </Text>
          <View className="text-sm flex flex-row font-semibold mt-2  ">
            <Image
              className="w-6 h-6"
              source={{
                uri: "https://res.cloudinary.com/dkysrpdi6/image/upload/v1710847175/pngwing.com_1_gq8gal.png",
              }}
            />
            <Text className="text-sm ml-1 text-gray-600 ">{rating}</Text>
            <Text className="text-sm ml-1 text-gray-600 ">
              ({totalReviews} reviews)
            </Text>
            <Text className="text-sm text-gray-500 ml-1">•</Text>
            <Text className="text-sm text-gray-500 ml-1 font-medium">
              {hotelData.category}
            </Text>
          </View>

          <View className="text-xs flex flex-row font-semibold mt-2 items-center ml-1 ">
            <Icons.MapPin
              height="16"
              width="16"
              stroke="gray"
              className="text-gray-500"
            />
            <Text className="text-xs text-gray-500 ml-1 font-medium">
              Nearby
            </Text>
            <Text className="text-sm text-gray-500 ml-1">•</Text>
            <Text className="text-xs ml-1 text-gray-600 ">
              {hotelData.location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
