import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { Principal } from '../screens/Principal';

const AuthStack2 = createStackNavigator();

export default function AuthStack() {

    return (
        <AuthStack2.Navigator
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'pop',
            }}
        >
            <AuthStack2.Screen name="Auth" component={Welcome} />
            <AuthStack2.Screen name="Principal" component={Principal} />
        </AuthStack2.Navigator>
    );
}