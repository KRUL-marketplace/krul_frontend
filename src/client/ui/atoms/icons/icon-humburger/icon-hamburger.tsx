import cx from 'classnames';

import './icon-humburger.scss';

interface Props {
	isOpen?: boolean;
}

export const IconHamburger = ({ isOpen = false }: Props) => {
	const classNames = cx('hamburger', isOpen ? 'hamburger_checked' : '');

	return (
		<div className={classNames}>
			<div className="hamburger__label">
				<span className="hamburger__stroke"></span>
				<span className="hamburger__stroke"></span>
				<span className="hamburger__stroke"></span>
			</div>
		</div>
	);
};
