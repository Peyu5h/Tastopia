import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import * as Icons from "react-native-feather";
import { themeColor } from "../themes/Theme";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

export default function RestaurentScreen({ route }) {
  const { restaurantData } = route.params;
  const navigation = useNavigation();

  const rating = restaurantData.reviews;
  const randomAdditionalReviews = Math.floor(Math.random() * 10) + 1;
  const totalReviews = parseInt(rating) + randomAdditionalReviews;
  return (
    <View className="relative">
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{
              uri: restaurantData.image,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-4 bg-gray-50 rounded-full p-2"
          >
            <Icons.ArrowLeft
              height="24"
              width="24"
              stroke={themeColor.bgColor(1)}
            />
          </TouchableOpacity>
        </View>

        <View className="bg-white -mt-12 pt-6 rounded-t-2xl">
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurantData.name}</Text>
            <View className="flex-row justify-between my-1">
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
                  {restaurantData.category}
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
                  {restaurantData.location}
                </Text>
              </View>
            </View>

            {/* description */}
            <Text className="text-md text-gray-500 font-light mt-1">
              {restaurantData.description}
            </Text>

            <View className="">
              <Text className="text-xl my-4 text-gray-600 font-medium ">
                MENU
              </Text>
              {/* dishes */}
              <ScrollView className="mb-12">
                {restaurantData.menu.map((dish, index) => (
                  <DishRow dish={dish} key={index} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
