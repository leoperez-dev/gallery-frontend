interface GalleryVideoPreviewProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    mode?: 'thumbnail' | 'full';
}

const GalleryImagePreview: React.FC<GalleryVideoPreviewProps> = ({
    src,
    mode = 'thumbnail',
    style,
    ...restProps
}) => {
    //get low quality poster image to minimize layout reflow
    const lqSrc = `${src?.substring(0, src.lastIndexOf('.'))}l${src?.substring(
        src.lastIndexOf('.'),
    )}`;
    const isThumbnail = mode === 'thumbnail';
    const imageSrc = isThumbnail ? lqSrc : src;

    return (
        <img
            src={imageSrc}
            loading="lazy"
            {...restProps}
            style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                ...style,
            }}
        />
    );
};

export default GalleryImagePreview;
