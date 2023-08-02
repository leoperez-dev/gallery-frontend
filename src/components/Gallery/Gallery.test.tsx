import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Gallery from './Gallery';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Gallery', () => {
	test('should render the loading skeleton', async () => {
		const { container } = render(
			(
				<Provider store={store}>
					<Gallery />,
				</Provider>)
		);
		
		expect(container.getElementsByClassName('MuiSkeleton-root')).toHaveLength(12)
	});
});