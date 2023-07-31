import classNames from "classnames";
import styles from './Select.module.css';
import { CaretDownIcon } from "@radix-ui/react-icons";

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className, ...props }) => {
	const cn = classNames(className, styles.select);

	return (
		<span className={styles.wrapper}>
			<select className={cn} {...props} />
			<CaretDownIcon className={styles.icon} />
		</span>
	);
};

export const Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>> = (props) => {
	return (
		<option {...props} />
	)
};
