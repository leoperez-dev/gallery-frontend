import { Provider } from 'react-redux';
import { store } from './store/store';
import GalleryFilterBar from './components/GalleryFilterBar/GalleryFilterBar';
import Gallery from './components/Gallery/Gallery';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Example Image gallery
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    maxWidth: 1500,
                    padding: '0 15px',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                }}
            >
                <GalleryFilterBar />
                <Gallery />
            </div>
        </div>
    );
}

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppWrapper;
