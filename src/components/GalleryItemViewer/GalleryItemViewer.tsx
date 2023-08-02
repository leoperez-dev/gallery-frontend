import { GalleryItem } from '../../types/galleryTypes';
import GalleryImagePreview from '../GalleryImagePreview/GalleryImagePreview';
import GalleryVideoPreview from '../GalleryVideoPreview/GalleryVideoPreview';
import { isVideoFormat } from '../../utils/mediaUtils';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import GalleryItemViewerStats from './GalleryItemViewerStats';
import { Close } from '@mui/icons-material';

interface GalleryItemViewerProps {
    item: GalleryItem;
    children: React.ReactNode;
}

const GalleryItemViewer: React.FC<GalleryItemViewerProps> = ({
    children,
    item,
}) => {
    const { title, description, type, width, height, link, ups, downs, score } =
        item;

    const [open, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(true)}>{children}</div>
            <Dialog open={open} onClose={() => setIsOpen(false)}>
                <DialogContent
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {title && (
                        <DialogTitle style={{ paddingLeft: 0 }}>
                            {title}
                        </DialogTitle>
                    )}
                    {description && <p>{description}</p>}

                    {isVideoFormat(type) ? (
                        <GalleryVideoPreview
                            width={width}
                            height={height}
                            src={link}
                            mode="full"
                            style={{
                                overflow: 'hidden',
                            }}
                        />
                    ) : (
                        <GalleryImagePreview
                            src={link}
                            alt={title}
                            width={width}
                            height={height}
                            mode="full"
                            style={{
                                overflow: 'hidden',
                            }}
                        />
                    )}

                    <GalleryItemViewerStats
                        ups={ups}
                        downs={downs}
                        score={score}
                    />

                    <IconButton
                        style={{ position: 'absolute', top: 25, right: 25 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <Close />
                    </IconButton>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default GalleryItemViewer;
