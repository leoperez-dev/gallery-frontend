import { useTheme, useMediaQuery } from '@mui/material';

const useGalleryColumns = () => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    const medium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    return small ? 1 : medium ? 3 : 4;
};

export default useGalleryColumns;
