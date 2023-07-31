import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { gallerySlice } from './slices/gallerySlice';
import { galleryApi } from './api/galleryApi';

export const store = configureStore({
    reducer: {
        gallery: gallerySlice.reducer,
        [galleryApi.reducerPath]: galleryApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(galleryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
