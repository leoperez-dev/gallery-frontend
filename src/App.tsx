import './App.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import GalleryFilterBar from './components/GalleryFilterBar/GalleryFilterBar';
import Gallery from './components/Gallery/Gallery';

function App() {

  return (
    <>
      <h1>Imgur gallery</h1>

      <GalleryFilterBar />
      <Gallery />
    </>
  )
}

const AppWrapper = () => <Provider store={store}><App /></Provider>

export default AppWrapper;
