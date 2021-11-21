import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Insumos from '../screens/Insumos';
import Orcamentos from '../screens/Orcamentos';
import Faturamento from '../screens/Faturamento';

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator backgroundColor="black"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Insumos':
                                iconName = 'package';
                                break;
                            case 'Orçamentos':
                                iconName = 'list';
                                break;
                            case 'Faturamento':
                                iconName = 'dollar-sign';
                                break;
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#2AAF14',
                    tabBarStyle: {
                        backgroundColor: '#000000',
                        height: '10%'
                    },
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginTop: -10,
                        paddingBottom: 10
                    }
                })}

            >
                <Tab.Screen name="Faturamento" component={Faturamento} />
                <Tab.Screen name="Insumos" component={Insumos} />
                <Tab.Screen name="Orçamentos" component={Orcamentos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}