import GalleryThumbnail from "../GalleryThumbnail/GalleryThumbnail";

export interface GalleryItem {
	id: string;
	title: string;
	description: string;
	link: string;
	is_album: boolean;
	ups: number;
	downs: number;
	score: number;
}

export interface Image {
	id: string;
	title: string;
	description: string;
	link: string;
	height: number;
	width: number;
	type: string;
}


export interface GalleryAlbum extends GalleryItem {
	cover: string;
	images: Image[];
}

export type GalleryImage = GalleryItem & Image;

function isAlbum(item: GalleryImage | GalleryAlbum): item is GalleryAlbum {
	return item.is_album;
}

function mapImageData(item: GalleryImage | GalleryAlbum): (GalleryImage | GalleryAlbum) & { height: number, width: number, type: string } | null {
	if (isAlbum(item)) {
		const image = item.images.find((image) => image.id === item.cover) as Image;
		//for simplicity's sake, skipping the image if it's not present in the list
		if (!image) {
			return null;
		}
		const { height, width, type, link } = image;
		
		return {
			...item,
			height,
			width,
			type,
			link
		};
	}
	return item;
}

const GalleryItem = (item: GalleryImage | GalleryAlbum) => {

	const imageData = mapImageData(item);

	return (
		imageData && <GalleryThumbnail {...imageData} />
	);
}

export default GalleryItem;