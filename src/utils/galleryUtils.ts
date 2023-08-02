import { GalleryImage, GalleryAlbum, GalleryItem } from '../types/galleryTypes';

export function isAlbum(
    item: GalleryImage | GalleryAlbum,
): item is GalleryAlbum {
    return item.is_album;
}

export function mapImageData(
    item: GalleryImage | GalleryAlbum,
): GalleryItem | null {
    if (isAlbum(item)) {
        const image = item.images.find(image => image.id === item.cover);
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
            link,
        };
    }
    return item;
}
