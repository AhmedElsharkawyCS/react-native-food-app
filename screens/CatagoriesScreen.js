import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../data/DummyData";

function CatagoriesScreen({ navigation: { navigate } }) {
  return <FlatList numColumns={2} renderItem={({ item, index }) => <CategoryCard {...item} navigate={navigate} key={index} />} data={CATEGORIES} />;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

CatagoriesScreen.navigationOptions = ({ navigation }) => ({
  title: `Meal Categories`,
});

export default CatagoriesScreen;
