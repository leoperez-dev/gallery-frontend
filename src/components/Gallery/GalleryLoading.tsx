import { Skeleton } from '@mui/material';

const GalleryLoading = () => {
    return (
        <>
            {[...new Array(12)].map((_, i) => (
                <Skeleton
                    variant="rounded"
                    height={Math.floor(Math.random() * (750 - 350) + 350)}
                    key={i}
                />
            ))}
        </>
    );
};

export default GalleryLoading;
