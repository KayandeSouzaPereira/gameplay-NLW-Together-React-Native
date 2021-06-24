import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../Telas/Home'
import { AppointmentDetails } from "../Telas/AppointmentDetails";
import { AppointmentCreate } from "../Telas/AppointmentCreate";
import { SignIn } from '../Telas/Login'

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: theme.colors.secondary100
            }
        }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}            
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}            
            />
        </Navigator>
    )
}

