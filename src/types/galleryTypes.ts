export interface GalleryBaseItem {
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

export interface GalleryAlbum extends GalleryBaseItem {
    cover: string;
    images: Image[];
}

export interface GalleryImage extends GalleryBaseItem, Image {}

export type GalleryItem = (GalleryImage | GalleryAlbum) & {
    height: number;
    width: number;
    type: string;
};
