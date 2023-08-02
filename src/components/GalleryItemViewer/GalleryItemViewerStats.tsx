import { ThumbUp, ThumbDown, Whatshot } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

interface GalleryItemViewerStatsProps {
    ups: number;
    downs: number;
    score: number;
}

const GalleryItemViewerStats: React.FC<GalleryItemViewerStatsProps> = ({
    ups,
    downs,
    score,
}) => {
    const contentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 25,
                alignItems: 'center',
                paddingTop: 15,
            }}
        >
            <Tooltip title="Upvotes">
                <div style={contentStyle}>
                    <ThumbUp sx={{ height: 20, width: 20 }} />
                    <span>{ups}</span>
                </div>
            </Tooltip>
            <Tooltip title="Downvotes">
                <div style={contentStyle}>
                    <ThumbDown sx={{ height: 20, width: 20 }} />
                    <span>{downs}</span>
                </div>
            </Tooltip>
            <Tooltip title="Score">
                <div style={contentStyle}>
                    <Whatshot sx={{ height: 20, width: 20 }} />
                    <span>{score}</span>
                </div>
            </Tooltip>
        </div>
    );
};

export default GalleryItemViewerStats;
