import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    GalleryAlbum,
    GalleryImage,
    GalleryItem,
} from '../../types/galleryTypes';
import { GalleryFilters } from '../slices/gallerySlice';
import { getQueryString } from '../../utils/queryUtils';
import { mapImageData } from '../../utils/galleryUtils';

export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_URL }),
    endpoints: builder => ({
        getGallery: builder.query<GalleryItem[], GalleryFilters>({
            query: filters => {
                return `/gallery/?${getQueryString(filters)}`;
            },
            transformResponse: (data: (GalleryAlbum | GalleryImage)[]) => {
                const isGalleryItem = (
                    item: GalleryItem | null,
                ): item is GalleryItem => item !== null;
                
                return data.map(mapImageData).filter(isGalleryItem);
            },
        }),
    }),
});

export const { useGetGalleryQuery } = galleryApi;
