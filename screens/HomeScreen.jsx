import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icons from "react-native-feather";
import { themeColor } from "../themes/Theme";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { restaurent } from "../assets/img/restaurents";

export default function HomeScreen() {
  const getRestaurantDataByCategory = (categoryName) => {
    const category = restaurent.find(
      (category) => category.category === categoryName
    );
    return category ? category.restaurants : [];
  };

  const hotAndSpicyRestaurantsData =
    getRestaurantDataByCategory("Hot and Spicy");
  const friedChicken = getRestaurantDataByCategory("Fried Chicken");
  const onlyVeg = getRestaurantDataByCategory("Only Veg");
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="container flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
          <Icons.Search className="text-gray-500" />
          <TextInput
            placeholder="Search Restaurants"
            className="flex-1 ml-2 pr-3"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-[1px] pl-2 border-gray-300 ">
            <Icons.MapPin
              height="20"
              width="20"
              stroke="gray"
              className="text-gray-500"
            />
            <Text className="text-gray-500 text-xs">Bhandup, mumbai</Text>
          </View>
        </View>

        <View
          style={{ backgroundColor: themeColor.bgColor(1) }}
          className="p-3 bg-gray-100 rounded-full"
        >
          <Icons.Sliders height="20" width="20" stroke="white" />
        </View>
      </View>

      {/* =================   MAIN ======================= */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />

        {/* <View className="mt-5">
        {[featured, featured, featured].map((item, index) => {
          return <FeaturedRow />;
        })}
      </View> */}
        <View className="mb-12">
          <FeaturedRow
            categoryName="Hot and Spicy"
            description="Local fast food corner"
            hotels={hotAndSpicyRestaurantsData}
          />
          <FeaturedRow
            categoryName="Fried Chicken"
            description="Soft and tender fried chicken"
            hotels={friedChicken}
          />
          <FeaturedRow
            categoryName="Only Veg"
            description="Get delicious veggies"
            hotels={onlyVeg}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
