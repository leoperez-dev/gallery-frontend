import { GalleryWindowFilter } from '../../store/slices/gallerySlice';
import { Select, MenuItem } from '@mui/material';

export interface GalleryWindowSelectProps {
    onChange: (value: GalleryWindowFilter) => void;
    value?: GalleryWindowFilter;
}

const GalleryWindowSelect: React.FC<GalleryWindowSelectProps> = ({
    value,
    onChange,
}) => {
    return (
        <Select
            value={value}
            onChange={e => onChange(e.target.value as GalleryWindowFilter)}
        >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
            <MenuItem value="all">All time</MenuItem>
        </Select>
    );
};

export default GalleryWindowSelect;
