import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("myFlixUser"));
const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            state = action.payload
            return action.payload

        }
    }
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;