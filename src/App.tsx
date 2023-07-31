import { Provider } from 'react-redux';
import { store } from './store/store';
import GalleryFilterBar from './components/GalleryFilterBar/GalleryFilterBar';
import Gallery from './components/Gallery/Gallery';
import styles from './App.module.css';

function App() {
    return (
        <div>
            <h1 className={styles.Title}>My Image Gallery</h1>
            <h2 className={styles.Subtitle}>
                Simple mage gallery created using the imgur.com API
            </h2>
            <GalleryFilterBar />
            <Gallery />
        </div>
    );
}

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppWrapper;
