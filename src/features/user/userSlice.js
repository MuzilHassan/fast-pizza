function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

export const setAddress = createAsyncThunk("user/setAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});
// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

const initialState = {
  userName: "",
  error: "",
  position: {},
  address: "",
  status: "idle",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        state.status = "idle";
        state.error = "";
      })
      .addCase(setAddress.rejected, (state) => {
        state.error =
          "Something went wrong while fetching address please write your address correctly";
        state.status = "idle";
      });
  },
});
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
