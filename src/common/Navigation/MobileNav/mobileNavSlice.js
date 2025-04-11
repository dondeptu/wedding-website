import { createSlice } from "@reduxjs/toolkit";

const mobileNavSlice = createSlice({
    name: "mobileNav",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: state => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { toggleMenu } = mobileNavSlice.actions;

const selectMobileNavState = state => state.mobileNav;

export const selectIsMenuOpen = state => selectMobileNavState(state).isMenuOpen;

export default mobileNavSlice.reducer;