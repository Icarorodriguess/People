import { createAppContainer, createStackNavigator} from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage'
import { capitalizeFirstLetter } from './src/util';
const AppNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) =>{
      const PeopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return ({
          title : PeopleName,
          headerTitleStyle: {
            fontSize : 30,
            color: '#FFFFFF',
          }
        });
     } 
  },
},{
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#00D0FF',
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
    },
    headerTitleStyle: {
      fontSize : 30,
      color: '#FFFFFF',
      flexGrow: 1,
      textAlign: 'center',
    }
  }

});

const AppContainer = createAppContainer(AppNavigator);



export default AppContainer;
