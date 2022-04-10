import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ResultsShowScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
