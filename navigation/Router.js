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
//Classes
import ClassScreen from '../screens/classes/ClassScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  map: () => MapScreen,
  events: () => EventsScreen,
  places: () => PlacesScreen,
  classes: () => ClassesScreen,

  //Events
  newEvent: () => NewEventScreen,

  //Classes
  classScreen: () => ClassScreen,
}));
