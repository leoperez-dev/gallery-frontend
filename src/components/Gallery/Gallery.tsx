import { useSelector } from "react-redux";
import { useGetGalleryQuery } from "../../store/api/galleryApi";
import { RootState, useAppDispatch } from "../../store/store";
import { previousPage, nextPage } from "../../store/slices/gallerySlice";
import GalleryItem from "../GalleryItem/GalleryItem";
import GalleryPagination from "../GalleryPagination/GalleryPagination";
import styles from './Gallery.module.css';
import { useRef } from "react";

const Gallery = () => {
	const filters = useSelector((state: RootState) => state.gallery.filters);
	const dispatch = useAppDispatch();
	const { data = [], isLoading } = useGetGalleryQuery(filters);
	const containerRef = useRef<HTMLDivElement>(null);

	const scrollToTop = () => containerRef.current?.scrollIntoView({ behavior: 'smooth' });

	const onPrevious = () => {
		dispatch(previousPage());
		scrollToTop();
	};

	const onNext = () => {
		dispatch(nextPage());
		scrollToTop();
	};

	return (
		<div>
			<div className={styles.GalleryContainer} ref={containerRef}>
				{isLoading ? <h2>Loading..</h2> :
					data.map((item) => <GalleryItem {...item} key={item.id} />)
				}
				{!data.length && !isLoading && <h2>No results to show.</h2>}

			</div>
			<GalleryPagination
				showPrevious={!!filters.page}
				showNext={data.length > 0}
				onNext={onNext}
				onPrevious={onPrevious}
			/>
		</div>
	)
}

export default Gallery;