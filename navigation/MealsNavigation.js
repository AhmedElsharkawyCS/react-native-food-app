import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import System from "../constants/System";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CatagoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: Platform.OS === System.ANDROID ? Colors.primaryColor : "" },
      headerTintColor: Platform.OS === System.ANDROID ? Colors.whiteColor : Colors.primaryColor,
    },
  },
);

export default createAppContainer(MealsNavigator);
