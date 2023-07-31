import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, ThickArrowUpIcon, ThickArrowDownIcon, BarChartIcon } from '@radix-ui/react-icons';
import styles from './GalleryItemViewer.module.css';
import { GalleryAlbum, GalleryImage } from '../GalleryItem/GalleryItem';
import GalleryImagePreview from '../GalleryImagePreview/GalleryImagePreview';
import GalleryVideoPreview from '../GalleryVideoPreview/GalleryVideoPreview';
import { videoFormats } from '../../utils/videoFormats';

interface GalleryItemViewerProps {
	item: (GalleryImage | GalleryAlbum) & { height: number, width: number, type: string };
	children: React.ReactNode;
}

const GalleryItemViewer: React.FC<GalleryItemViewerProps> = ({ children, item }) => {

	const { title, description, type, width, height, link, ups, downs, score } = item;

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				{children}
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.DialogOverlay} />
				<Dialog.Content className={styles.DialogContent}>
					{title && <Dialog.Title className={styles.DialogTitle}>{title}</Dialog.Title>}
					{description && <Dialog.Description className={styles.DialogDescription}>{description}</Dialog.Description>}

					{videoFormats.includes(type) ?
						<GalleryVideoPreview
							width={width}
							height={height}
							src={link}
							className={styles.Preview}
							mode="full"
						/>
						:
						<GalleryImagePreview
							src={link}
							alt={title}
							width={width}
							height={height}
							className={styles.Preview}
							mode="full"
						/>
					}

					<div className={styles.StatsBar}>
						<div className={styles.StatsBarContent}>
							<ThickArrowUpIcon height={20} width={20} />
							<span className={styles.StatsBarLabel}>{ups}</span>
						</div>
						<div className={styles.StatsBarContent}>
							<ThickArrowDownIcon height={20} width={20}/>
							<span className={styles.StatsBarLabel}>{downs}</span>
						</div>
						<div className={styles.StatsBarContent}>
							<BarChartIcon height={20} width={20}/>
							<span className={styles.StatsBarLabel}>{score}</span>
						</div>
					</div>

					<Dialog.Close asChild>
						<button className={styles.CloseButton} aria-label="Close">
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default GalleryItemViewer;