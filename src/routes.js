import {createAppContainer, createStackNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import ComponentLifeCycle from '~/pages/componentLifeCycle';
import HooksLifeCycle from '~/pages/hooksLifeCycle';
import ReduxComponent from '~/pages/reduxComponent';
import ReduxHooks from '~/pages/reduxHooks';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    ComponentLifeCycle,
    HooksLifeCycle,
    ReduxComponent,
    ReduxHooks,
  }),
);

export default Routes;
