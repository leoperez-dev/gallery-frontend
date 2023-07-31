
import { GalleryWindowFilter } from "../../store/slices/gallerySlice";
import { Select, Option } from "../Select/Select";

export interface GalleryWindowSelectProps {
	onChange: (value: GalleryWindowFilter) => void;
	value?: GalleryWindowFilter;
}

const GalleryWindowSelect: React.FC<GalleryWindowSelectProps> = ({ value, onChange }) => {

	return (
		<Select value={value} onChange={(e) => onChange(e.target.value as GalleryWindowFilter)}>
			<Option value="day">Day</Option>
			<Option value="week">Week</Option>
			<Option value="month">Month</Option>
			<Option value="year">Year</Option>
			<Option value="all">All time</Option>
		</Select>
	);
}

export default GalleryWindowSelect;