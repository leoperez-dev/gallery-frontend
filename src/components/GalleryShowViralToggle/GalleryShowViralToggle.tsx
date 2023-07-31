export interface GalleryShowViralToggleProps {
    onChange: (value: boolean) => void;
    value?: boolean;
}

const GalleryShowViralToggle: React.FC<GalleryShowViralToggleProps> = ({
    value,
    onChange,
}) => {
    return (
        <label htmlFor="showViral">
            <input
                id="showViral"
                type="checkbox"
                checked={value}
                onChange={e => onChange(e.target.checked)}
            />
            <span>Show viral</span>
        </label>
    );
};

export default GalleryShowViralToggle;
