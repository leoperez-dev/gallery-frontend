import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';

export const AppTheme: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
