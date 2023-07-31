
import { GalleryAlbum, GalleryImage } from "../GalleryItem/GalleryItem";
import GalleryVideoPreview from "../GalleryVideoPreview/GalleryVideoPreview";
import GalleryImagePreview from "../GalleryImagePreview/GalleryImagePreview";
import GalleryItemViewer from "../GalleryItemViewer/GalleryItemViewer";
import styles from './GalleryThumbnail.module.css';
import { videoFormats } from "../../utils/videoFormats";


const GalleryThumbnail = (item: (GalleryImage | GalleryAlbum) & { height: number, width: number, type: string }) => {
	const { id, title, description, link, height, width, type, } = item;

	return (
		<GalleryItemViewer item={item}>
			<button className={styles.container}>
				<div className={styles.thumbnail} key={id}>
					{videoFormats.includes(type) ?
						<GalleryVideoPreview
							width={width}
							height={height}
							src={link}
						/>
						:
						<GalleryImagePreview
							src={link}
							alt={title}
							width={width}
							height={height}
						/>
					}
				</div>
				<div>
					{title && <h2 className={styles.title}>{title}</h2>}
					{description && <p className={styles.description}>{description}</p>}
				</div>
			</button>
		</GalleryItemViewer>
	);
}

export default GalleryThumbnail;