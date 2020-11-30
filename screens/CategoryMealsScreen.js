import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import MealCard from "../components/MealCard";
import { CATEGORIES, MEALS } from "../data/DummyData";

function CategoryMealsScreen({ navigation }) {
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(navigation.getParam("categoryId")) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={({ item, index }) => <MealCard {...item} key={index} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryItem = CATEGORIES.find((i) => i.id === navigation.getParam("categoryId"));
  return {
    title: categoryItem.name,
  };
};

export default CategoryMealsScreen;
