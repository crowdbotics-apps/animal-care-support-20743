import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile112379Navigator from '../features/UserProfile112379/navigator';
import Tutorial112378Navigator from '../features/Tutorial112378/navigator';
import NotificationList112350Navigator from '../features/NotificationList112350/navigator';
import Settings112349Navigator from '../features/Settings112349/navigator';
import Settings112341Navigator from '../features/Settings112341/navigator';
import UserProfile112339Navigator from '../features/UserProfile112339/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile112379: { screen: UserProfile112379Navigator },
Tutorial112378: { screen: Tutorial112378Navigator },
NotificationList112350: { screen: NotificationList112350Navigator },
Settings112349: { screen: Settings112349Navigator },
Settings112341: { screen: Settings112341Navigator },
UserProfile112339: { screen: UserProfile112339Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
