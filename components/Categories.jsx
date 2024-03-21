import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../assets/img/categories";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <View className="mb-8">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = activeCategory === category.id;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textColor = isActive
            ? "text-gray-800 fint-semibold"
            : "text-gray-500";
          return (
            <View
              key={index}
              className="flex justify-center items-center mr-6 "
            >
              <TouchableOpacity
                className={`pl-1 rounded-full shadow bg-gray-200 p-2 ${btnClass}`}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: category.image }}
                />
              </TouchableOpacity>
              <Text className={`text-xs ${textColor}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
