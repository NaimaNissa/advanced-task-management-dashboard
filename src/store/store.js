import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import workspaceSlice from './slices/workspaceSlice';
import taskSlice from './slices/taskSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    workspace: workspaceSlice,
    task: taskSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

