import { GallerySectionFilter } from '../../store/slices/gallerySlice';
import { Select, MenuItem } from '@mui/material';

export interface GallerySectionSelectProps {
    onChange: (value: GallerySectionFilter) => void;
    value?: GallerySectionFilter;
}

const GallerySectionSelect: React.FC<GallerySectionSelectProps> = ({
    value,
    onChange,
}) => {
    return (
        <Select
            value={value}
            onChange={e => onChange(e.target.value as GallerySectionFilter)}
        >
            <MenuItem value="hot">Hot</MenuItem>
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="user">User</MenuItem>
        </Select>
    );
};

export default GallerySectionSelect;
