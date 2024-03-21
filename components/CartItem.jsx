import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Icons from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../rtk/cartSlice";

export default function CartItem({ itemm }) {
  const { items } = useSelector((state) => state.cart);
  const itemInList = items.filter((item) => item.name === itemm.name);
  const length = itemInList.length;
  const dispatch = useDispatch();
  return (
    <View className="my-2">
      <View className="bg-white shadow-black shadow-lg h-[68px] rounded-full flex-row items-center justify-between px-6">
        <View className="pizzaAndNo flex-row items-center gap-x-4">
          <Text className="text-md font-semibold text-orange-600">
            {length}x
          </Text>
          <Image
            source={{
              uri: itemm.image,
            }}
            className="w-12 h-12 rounded-full"
          />
        </View>
        <View className="PrizeAndMin flex-row items-center gap-x-3">
          <Text className="text-[16px] font-semibold">₹ {itemm.price}</Text>
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(itemm))}
            className="w-8 h-8 bg-orange-500 rounded-full p-2"
          >
            <Icons.Minus height="16" width="16" stroke="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
