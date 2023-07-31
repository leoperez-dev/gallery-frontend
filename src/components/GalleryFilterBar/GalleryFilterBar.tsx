import { useSelector } from "react-redux";
import { setSection, setSort, setWindow, setShowViral } from "../../store/slices/gallerySlice";
import { RootState, useAppDispatch } from "../../store/store";
import GallerySectionSelect from "../GallerySectionSelect/GallerySectionSelect";
import GalleryShowViralToggle from "../GalleryShowViralToggle/GalleryShowViralToggle";
import GallerySortSelect from "../GallerySortSelect/GallerySortSelect";
import GalleryWindowSelect from "../GalleryWindowSelect/GalleryWindowSelect";
import styles from './GalleryFilterBar.module.css';

const GalleryFilterBar: React.FC = () => {
	const filters = useSelector((state: RootState) => state.gallery.filters);
	const dispatch = useAppDispatch();

	const showSort = filters.section === 'hot' || filters.section === 'user';
	const showWindow = filters.section === 'top';

	return (
		<div className={styles.container}>
			<GallerySectionSelect onChange={(value) => dispatch(setSection(value))} value={filters.section} />
			<div className={styles.right}>
				<GalleryShowViralToggle onChange={(value) => dispatch(setShowViral(value))} value={filters.showViral} />
				{showSort && <GallerySortSelect onChange={(value) => dispatch(setSort(value))} value={filters.sort} />}
				{showWindow && <GalleryWindowSelect onChange={(value) => dispatch(setWindow(value))} value={filters.window} />}
			</div>
		</div>
	);
}

export default GalleryFilterBar;