import styles from './GalleryPagination.module.css';
import Button from '../Button/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface GalleryPaginationProps {
    showPrevious: boolean;
    showNext: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

const GalleryPagination = ({
    showPrevious,
    showNext,
    onPrevious,
    onNext,
}: GalleryPaginationProps) => {
    return (
        <div className={styles.GalleryPagination}>
            <span>
                {showPrevious && (
                    <Button onClick={onPrevious}>
                        <ArrowLeftIcon height={50} width={50} />
                    </Button>
                )}
            </span>
            <span>
                {showNext && (
                    <Button onClick={onNext}>
                        {' '}
                        <ArrowRightIcon height={50} width={50} />
                    </Button>
                )}
            </span>
        </div>
    );
};

export default GalleryPagination;
