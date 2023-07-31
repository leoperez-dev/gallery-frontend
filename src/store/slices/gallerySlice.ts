import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type GallerySectionFilter = 'hot' | 'top' | 'user';
export type GallerySortFilter = 'viral' | 'top' | 'time' | 'rising';
export type GalleryWindowFilter = 'day' | 'week' | 'month' | 'year' | 'all';

export interface GalleryFilters {
    section: GallerySectionFilter;
    sort?: GallerySortFilter;
    page?: number;
    window?: GalleryWindowFilter;
    showViral?: boolean;
}

export interface GallerySliceState {
    filters: GalleryFilters;
}

const initialState: GallerySliceState = {
    filters: {
        section: 'hot',
        sort: 'viral',
        page: 0,
        window: 'day',
        showViral: true,
    },
};

const resetPage = (state: GallerySliceState) => {
    state.filters.page = 0;
};

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setSection: (state, action: PayloadAction<GallerySectionFilter>) => {
            resetPage(state);
            state.filters.section = action.payload;
        },
        setSort: (state, action: PayloadAction<GallerySortFilter>) => {
            resetPage(state);
            state.filters.sort = action.payload;
        },
        setWindow: (state, action: PayloadAction<GalleryWindowFilter>) => {
            resetPage(state);
            state.filters.window = action.payload;
        },
        setShowViral: (state, action: PayloadAction<boolean>) => {
            resetPage(state);
            state.filters.showViral = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.filters.page = action.payload;
        },
        nextPage: state => {
            state.filters.page !== undefined && state.filters.page++;
        },
        previousPage: state => {
            state.filters.page !== undefined &&
                state.filters.page > 0 &&
                state.filters.page--;
        },
    },
});

export const {
    setSection,
    setSort,
    setPage,
    nextPage,
    previousPage,
    setWindow,
    setShowViral,
} = gallerySlice.actions;
