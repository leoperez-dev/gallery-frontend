import { GalleryItem } from '../../types/galleryTypes';
import GalleryVideoPreview from '../GalleryVideoPreview/GalleryVideoPreview';
import GalleryImagePreview from '../GalleryImagePreview/GalleryImagePreview';
import GalleryItemViewer from '../GalleryItemViewer/GalleryItemViewer';
import { isVideoFormat } from '../../utils/mediaUtils';
import {
    Card,
    CardActionArea,
    CardContent,
    Box,
    Typography,
} from '@mui/material';

const GalleryThumbnail = (item: GalleryItem) => {
    const { id, title, description, link, width, type } = item;

    return (
        <GalleryItemViewer item={item}>
            <CardActionArea
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                }}
            >
                <Card sx={{ width: '100%' }}>
                    <CardContent
                        sx={{
                            padding: 0,
                            paddingBottom: 0,
                            ':last-child': { paddingBottom: 0 },
                        }}
                    >
                        <Box key={id} sx={{ overflow: 'hidden' }}>
                            {isVideoFormat(type) ? (
                                <GalleryVideoPreview width={width} src={link} />
                            ) : (
                                <GalleryImagePreview
                                    src={link}
                                    alt={title}
                                    width={width}
                                />
                            )}
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            {title && (
                                <Typography variant="h6">{title}</Typography>
                            )}
                            {description && <p>{description}</p>}
                        </Box>
                    </CardContent>
                </Card>
            </CardActionArea>
        </GalleryItemViewer>
    );
};

export default GalleryThumbnail;
