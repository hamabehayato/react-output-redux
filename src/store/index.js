import { configureStore } from '@reduxjs/toolkit';
import reducer from './todo';

export default configureStore({
  reducer: {
    todo: reducer,
  },
});
