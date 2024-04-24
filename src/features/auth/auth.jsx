import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authState: 'signInn',
    userToken: null,
    isLoading: true,
    isSignout: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        restoreToken: (state, action) => {
            console.log('Token restored:', action.payload);  // Añade esto para debuggear
            state.userToken = action.payload ?? null;  // Usa null si el token es undefined
            state.isLoading = false;
        },
        signIn: (state, action) => {
            state.isSignout = false;
            state.userToken = action.payload;
        },
        signOut: state => {
            state.isSignout = true;
            state.userToken = null;
        },
        setAuthState: (state, action) => {
            state.authState = action.payload;
        },
    },
});

export const { restoreToken, signIn, signOut, setAuthState } =
    authSlice.actions;
export default authSlice.reducer;