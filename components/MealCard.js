import React from "react";
import { View, Text } from "react-native";

export default function MealCard(props) {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
}
