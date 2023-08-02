import { Switch, FormControlLabel } from '@mui/material';

export interface GalleryShowViralToggleProps {
    onChange: (value: boolean) => void;
    value?: boolean;
}

const GalleryShowViralToggle: React.FC<GalleryShowViralToggleProps> = ({
    value,
    onChange,
}) => {
    return (
        <FormControlLabel
            labelPlacement="start"
            label="Show viral"
            control={
                <Switch
                    checked={value}
                    onChange={e => onChange(e.target.checked)}
                />
            }
        />
    );
};

export default GalleryShowViralToggle;
