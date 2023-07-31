import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GalleryAlbum, GalleryImage } from "../../components/GalleryItem/GalleryItem";
import { GalleryFilters } from "../slices/gallerySlice";
import { getQueryString } from "../../utils/query";

export const galleryApi = createApi({
	reducerPath: 'galleryApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: (builder) => ({
		getGallery: builder.query<(GalleryAlbum | GalleryImage)[], GalleryFilters>({
			query: (filters) => {
				return `/gallery/?${getQueryString(filters)}`
			},
		}),
	}),
});

export const { useGetGalleryQuery } = galleryApi;
