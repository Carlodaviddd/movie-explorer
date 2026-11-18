import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search Screen" }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ title: "Movie Details Screen" }}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{ title: "Favorite Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
