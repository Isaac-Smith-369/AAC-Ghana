import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckDetailScreen from "../screens/DeckDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import routes from "../routes";
import DecksScreen from "../screens/DecksScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.DECKS}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.DECKS} component={DecksScreen} />
      <Stack.Screen name={routes.DECK_DETAIL} component={DeckDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
