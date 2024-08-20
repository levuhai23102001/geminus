import { FAKE_PROFILE_DATA, IUser, USER_DATA } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
    profile: IUser;
}

const initialState: Profile = {
    profile: {} as IUser,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getProfile: (state, action: PayloadAction<string>) => {
            const foundUser = USER_DATA.find(
                (user) => user.user_link === action.payload
            );
            if (foundUser) {
                state.profile = foundUser;
            } else {
                console.error("User not found");
            }
        },
    },
});

export const { getProfile } = userSlice.actions;
export default userSlice.reducer;
