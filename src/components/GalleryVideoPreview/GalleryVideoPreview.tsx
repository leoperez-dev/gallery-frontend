interface GalleryVideoPreviewProps
    extends React.VideoHTMLAttributes<HTMLVideoElement> {
    mode?: 'thumbnail' | 'full';
}

const GalleryVideoPreview: React.FC<GalleryVideoPreviewProps> = ({
    src,
    mode = 'thumbnail',
    style,
    ...restProps
}) => {
    //get low quality poster image to minimize layout reflow
    const poster = `${src?.substring(0, src.lastIndexOf('.'))}m${src?.substring(
        src.lastIndexOf('.'),
    )}`;
    const lqSrc = `${src?.substring(
        0,
        src.lastIndexOf('.'),
    )}_lq${src?.substring(src.lastIndexOf('.'))}`;
    const isThumbnail = mode === 'thumbnail';
    const videoSrc = isThumbnail ? lqSrc : src;

    return (
        <video
            src={videoSrc}
            draggable="false"
            playsInline
            autoPlay
            muted={isThumbnail}
            loop={isThumbnail}
            poster={poster}
            style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                ...style,
            }}
            {...restProps}
        />
    );
};

export default GalleryVideoPreview;
