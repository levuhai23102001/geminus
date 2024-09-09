import { FAKE_PROFILE_DATA, FOLLOWING_DATA, IUser } from "@/constants";
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
        },
        followUser: (state, action: PayloadAction<string>) => {
            const profileId  = action.payload;
            const followingIds = FOLLOWING_DATA[0].following_users;
            if (!followingIds.includes(profileId)) {
                followingIds.push(profileId);
                state.me.following = followingIds.length;
            }
        },
        unfollowUser: (state, action: PayloadAction<string>) => {
            const profileId = action.payload;
            const followingIds = FOLLOWING_DATA[0].following_users;
            if(followingIds && followingIds.includes(profileId)){
                followingIds.splice(followingIds.indexOf(profileId), 1);
                state.me.following = followingIds.length;
            }
        },
    },
});

export const { updateProfile, loadMe, followUser, unfollowUser } = authSlice.actions;
export default authSlice.reducer;