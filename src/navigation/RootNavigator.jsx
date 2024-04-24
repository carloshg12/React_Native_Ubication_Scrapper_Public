import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Principal } from '../screens/Principal';
import { restoreToken } from '../features/auth/auth';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Wrapper() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

function RootNavigator() {
    const { userToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('userToken');
                console.log('Retrieved token:', userToken); // Verifica qué se recupera exactamente
                dispatch(restoreToken(userToken));
            } catch (e) {
                console.error('Restoring token failed', e);
            }
        };

        bootstrapAsync();
    }, [dispatch]);

    if (!userToken) {
        return <AuthStack />;
    } else {
        return <Principal />;
    }
}