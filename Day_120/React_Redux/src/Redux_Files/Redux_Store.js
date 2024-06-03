import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers_With_Action_Creators";
export const Redux_Store = configureStore({
  reducer: {  Reducers },
});
