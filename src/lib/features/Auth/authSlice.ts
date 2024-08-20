import { FAKE_PROFILE_DATA, IUser } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
    me: IUser;
}

const initialState: Profile = {
    me: FAKE_PROFILE_DATA,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Partial<IUser>>) => {
            state.me = { ...state.me, ...action.payload };
        },
        loadMe: (state) => {
            state.me
        }
    },
});

export const { updateProfile, loadMe } = authSlice.actions;
export default authSlice.reducer;