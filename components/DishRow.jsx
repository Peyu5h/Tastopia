import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../rtk/cartSlice";

export default function DishRow({ dish }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const itemInList = items.filter((item) => item.name === dish.name);
  const length = itemInList.length;
  return (
    <View className="flex-row  items-center shadow shadow-gray-600 bg-gray-50 px-3 py-2 rounded-3xl drop-shadow-lg  mb-4 mx-2 w-full  ">
      <Image
        className="rounded-3xl w-24 h-24"
        source={{
          uri: dish.image,
        }}
      />

      <View className="pl-4 w-[60vw] mb-4">
        <Text className="text-lg text-gray-600 ">{dish.name}</Text>
        <Text className="text-xs text-gray-700 ">{dish.description}</Text>

        <View className="flex-row justify-between  items-center mt-3 ">
          <Text className="text-xl text-gray-600 font-semibold ">
            ₹ {dish.price}
          </Text>
          <View className="flex-row space-x-2">
            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(dish))}
              className="w-8 h-8 bg-orange-500 rounded-full p-2"
            >
              <Icons.Minus height="16" width="16" stroke="white" />
            </TouchableOpacity>
            <View className="w-8 h-8 flex  rounded-full">
              <Text className="text-xl text-center text-gray-600 font-semibold ">
                {length}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(addToCart(dish))}
              className="w-8 h-8 bg-orange-500 rounded-full p-2"
            >
              <Icons.Plus height="16" width="16" stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
