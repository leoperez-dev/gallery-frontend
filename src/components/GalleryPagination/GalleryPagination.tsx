import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface GalleryPaginationProps {
    showPrevious: boolean;
    showNext: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

const GalleryPagination = ({
    showPrevious,
    showNext,
    onPrevious,
    onNext,
}: GalleryPaginationProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '15px 0',
                padding: '15px',
            }}
        >
            <span>
                {showPrevious && (
                    <IconButton onClick={onPrevious}>
                        <ArrowBack sx={{ height: 50, width: 50 }} />
                    </IconButton>
                )}
            </span>
            <span>
                {showNext && (
                    <IconButton onClick={onNext}>
                        {' '}
                        <ArrowForward sx={{ height: 50, width: 50 }} />
                    </IconButton>
                )}
            </span>
        </div>
    );
};

export default GalleryPagination;
