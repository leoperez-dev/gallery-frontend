import { GallerySortFilter } from '../../store/slices/gallerySlice';
import { Select, Option } from '../Select/Select';

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
            <Option value="viral">Viral</Option>
            <Option value="top">Top</Option>
            <Option value="time">Time</Option>
            {showRising && <Option value="rising">Rising</Option>}
        </Select>
    );
};

export default GallerySortSelect;
