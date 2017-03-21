import {
  createRouter,
} from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
}));
