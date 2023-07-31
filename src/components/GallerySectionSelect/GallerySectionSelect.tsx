import { GallerySectionFilter } from '../../store/slices/gallerySlice';
import { Select, Option } from '../Select/Select';

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
            <Option value="hot">Hot</Option>
            <Option value="top">Top</Option>
            <Option value="user">User</Option>
        </Select>
    );
};

export default GallerySectionSelect;
