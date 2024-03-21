import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function CartIcon() {
  const navigation = useNavigation();
  const { items } = useSelector((state) => state.cart);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <View className=" absolute left-0 bottom-6 w-full z-50 h-12 px-10 ">
      <TouchableHighlight
        className=" bg-orange-400 rounded-full shadow-xl shadow-orange-400"
        onPress={() => navigation.navigate("Cart")}
      >
        <View className="py-3 bg-orange-400 rounded-full shadow-xl shadow-orange-400">
          <View className="flex-row justify-between items-center px-4">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-200/40  rounded-full flex items-center justify-center">
                <Text className="text-white font-bold">{items.length}</Text>
              </View>
            </View>
            <Text className="text-white text-lg font-black">View Cart</Text>
            <Text className="text-white text-lg mr-2 font-semibold">
              ₹ {totalPrice}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
