import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icons from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const { items } = useSelector((state) => state.cart);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex-row items-center rounded-full p-2 bg-orange-400"
        >
          <Icons.ArrowLeft height={24} width={24} stroke="white" />
        </TouchableOpacity>
        <View className="items-center mt-4">
          <Text className="text-2xl font-semibold">Your cart</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* ============================================ */}

      <View className="mb-6 bg-orange-400/40  px-6 flex-row items-center justify-between">
        <View className="w-28 h-28">
          <Image
            className="w-28 h-28 rounded-full"
            source={{
              uri: "https://res.cloudinary.com/dkysrpdi6/image/upload/v1711018334/Take_Away-rafiki_aubusa.png",
            }}
          />
        </View>
        <View className="">
          <Text className="text-black text-sm font-medium">
            Deliver in 20-30 minutes
          </Text>
        </View>
        <View className="">
          <Text className="text-orange-800 text-sm font-bold">Change</Text>
        </View>
      </View>

      {/* ============================================ */}

      <View className="px-6 flex-col gap-y-4 h-[345px]">
        <ScrollView>
          {items
            .reduce((uniqueItems, currentItem) => {
              const existingItem = uniqueItems.find(
                (item) => item.name === currentItem.name
              );

              if (!existingItem) {
                uniqueItems.push(currentItem);
              }

              return uniqueItems;
            }, [])
            .map((uniqueItem, index) => (
              <CartItem key={index} itemm={uniqueItem} />
            ))}
        </ScrollView>
      </View>

      {/* ============================================ */}

      <View className="order absolute bottom-0 w-full px-6 z-50 bg-[#fed1ad] rounded-t-3xl">
        <View className="py-8 gap-y-1 ">
          <View className="flex-row justify-between items-center px-4 ">
            <Text className="text-[18px] font-medium">Total</Text>
            <Text className="text-[18px] font-medium">₹ {totalPrice}</Text>
          </View>
          <View className="flex-row justify-between items-center px-4">
            <Text className="text-[18px] font-medium">Delivery</Text>
            <Text className="text-[18px] font-medium">₹ 30</Text>
          </View>

          <View className="flex-row justify-between items-center px-4 mb-4">
            <Text className="text-lg font-bold">Subtotal</Text>
            <Text className="text-lg font-bold">₹ {totalPrice + 30}</Text>
          </View>

          <TouchableOpacity className="bg-orange-500 rounded-full py-3 mt-4">
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
