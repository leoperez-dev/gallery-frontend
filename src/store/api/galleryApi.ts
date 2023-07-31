import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GalleryAlbum, GalleryImage } from "../../components/GalleryItem/GalleryItem";
import { GalleryFilters } from "../slices/gallerySlice";

export const galleryApi = createApi({
	reducerPath: 'galleryApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: (builder) => ({
		getGallery: builder.query<(GalleryAlbum | GalleryImage)[], GalleryFilters>({
			query: (filters) => {
				const { showViral, ...restFilters } = filters;
				return `/gallery/${Object.values(restFilters).filter(Boolean).join('/')}?showViral=${showViral}`
			},
			// transformResponse: ({ data }) => data
		}),
	}),
});

export const { useGetGalleryQuery } = galleryApi;
