import {
  createRouter,
} from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EventsScreen from '../screens/EventsScreen';
import PlacesScreen from '../screens/PlacesScreen';
import ClassesScreen from '../screens/ClassesScreen';
//Events
import NewEventScreen from '../screens/events/NewEventScreen'
import ViewEventScreen from '../screens/events/ViewEventScreen'
//Classes
import ClassScreen from '../screens/classes/ClassScreen';

//components
import LocationInput from '../components/input/LocationInput'

export default createRouter(() => ({
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

  //components
  LocationInput: () => LocationInput,
}));
