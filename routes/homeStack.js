import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import TypePo from '../screens/typepo';
import ListVendor from '../screens/vendors'
import ListFacility from '../screens/faciltiy'
import ListPos from '../screens/listpo'
import TruckDetails from '../screens/truck_details'
import InvoiceDetails from '../screens/invoice_details'
import FinalPage from '../screens/finalPage'
import Scanner from '../screens/components/Qrscanner'

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Home',
            headerShown: false
        },
    },
    Scanner:{
        screen: Scanner,
        navigationOptions:{
            // title: 'Home',
            headerShown: false
        },
    },
    ListFacility:{
        screen: ListFacility,
        navigationOptions:{
            title: 'Choose facility',
        }
    },
    TypePo: {
        screen: TypePo,
        navigationOptions:{
            title: 'Grofers',
        }
    },
    ListVendors:{
        screen: ListVendor,
        navigationOptions:{
            title: 'Select vendor',
        }
    },
    ListPos:{
        screen: ListPos,
        navigationOptions:{
            title: 'Active PO',
        }
    },
    TruckDetails:{
        screen: TruckDetails,
        navigationOptions:{
            title: 'Truck Info',
        }
    },
    InvoiceDetails:{
        screen: InvoiceDetails,
        navigationOptions:{
            title: 'Invoice Info',
        }
    },
    FinalPage:{
        screen: FinalPage,
        navigationOptions:{
            title: 'Final Page',
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);