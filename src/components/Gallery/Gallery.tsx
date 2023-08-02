import { useSelector } from 'react-redux';
import { useGetGalleryQuery } from '../../store/api/galleryApi';
import { RootState, useAppDispatch } from '../../store/store';
import { previousPage, nextPage } from '../../store/slices/gallerySlice';
import { useRef } from 'react';
import { Masonry } from '@mui/lab';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryPagination from '../GalleryPagination/GalleryPagination';
import GalleryLoading from './GalleryLoading';
import useGalleryColumns from './useGalleryColumns';

const Gallery = () => {
    const filters = useSelector((state: RootState) => state.gallery.filters);
    const dispatch = useAppDispatch();
    const { data = [], isFetching, error } = useGetGalleryQuery(filters);
    const columns = useGalleryColumns();
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () =>
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });

    const onPrevious = () => {
        dispatch(previousPage());
        scrollToTop();
    };

    const onNext = () => {
        dispatch(nextPage());
        scrollToTop();
    };
    console.log(data, error);
    
    return (
        <div>
            <div ref={containerRef}>
                {!data.length && !isFetching && <h2>No results to show.</h2>}
                <Masonry columns={columns} spacing={2}>
                    {isFetching ? (
                        <GalleryLoading />
                    ) : (
                        data.map(item => (
                            <div key={item.id} style={{ minWidth: 250 }}>
                                <GalleryItem {...item} />
                            </div>
                        ))
                    )}
                </Masonry>
            </div>
            <GalleryPagination
                showPrevious={!!filters.page}
                showNext={data.length > 0}
                onNext={onNext}
                onPrevious={onPrevious}
            />
        </div>
    );
};

export default Gallery;
