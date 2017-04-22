import {
  createRouter,
} from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EventsScreen from '../screens/EventsScreen';
import PlacesScreen from '../screens/PlacesScreen';
import ClassesScreen from '../screens/ClassesScreen';
import LoginScreen from '../screens/LoginScreen';
//Events
import NewEventScreen from '../screens/events/NewEventScreen'
import ViewEventScreen from '../screens/events/ViewEventScreen'
//Classes
import ClassScreen from '../screens/classes/ClassScreen';
import NewClassReviewScreen from '../screens/classes/NewClassReviewScreen';

//components
import LocationInput from '../components/input/LocationInput'

export default createRouter(() => ({
  LoginScreen: () => LoginScreen,
  home: () => HomeScreen,
  map: () => MapScreen,
  events: () => EventsScreen,
  places: () => PlacesScreen,
  classes: () => ClassesScreen,

  //Events
  newEvent: () => NewEventScreen,
  ViewEventScreen: () => ViewEventScreen,

  //Classes
  classScreen: () => ClassScreen,
  NewClassReviewScreen: () => NewClassReviewScreen,

  //components
  LocationInput: () => LocationInput,
}));
