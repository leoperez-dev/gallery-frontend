import classnames from 'classnames';
import styles from './Button.module.css';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({className, ...restProps}) => {
	return <button {...restProps} className={classnames(className, styles.Button)}/>;
}
 
export default Button;