import { GallerySortFilter } from '../../store/slices/gallerySlice';
import { Select, MenuItem } from '@mui/material';

export interface GallerySortSelectProps {
    onChange: (value: GallerySortFilter) => void;
    value?: GallerySortFilter;
    showRising?: boolean;
}

const GallerySortSelect: React.FC<GallerySortSelectProps> = ({
    value,
    showRising = false,
    onChange,
}) => {
    return (
        <Select
            value={value}
            onChange={e => onChange(e.target.value as GallerySortFilter)}
        >
            <MenuItem value="viral">Viral</MenuItem>
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="time">Time</MenuItem>
            {showRising && <MenuItem value="rising">Rising</MenuItem>}
        </Select>
    );
};

export default GallerySortSelect;
