import {
  createRouter,
} from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EventsScreen from '../screens/EventsScreen';
import PlacesScreen from '../screens/PlacesScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  map: () => MapScreen,
  events: () => EventsScreen,
  places: () => PlacesScreen,
}));
