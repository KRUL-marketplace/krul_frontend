import cx from 'classnames';

import './icon-humburger.scss';

interface Props {
	checked?: boolean;
}

export const IconHamburger = ({ checked = false }: Props) => {
	const classNames = cx('hamburger', checked ? 'hamburger_checked' : '');

	return (
		// <div className={'hamburger'}>
		// 	<label htmlFor="check" className={'hamburger_label'}>
		// 		<input type="checkbox" id="check" className={'hamburger_input'} />
		// 		<span className={'hamburger_stroke'}></span>
		// 		<span className={'hamburger_stroke'}></span>
		// 		<span className={'hamburger_stroke'}></span>
		// 	</label>
		// </div>

		<div className={classNames}>
			<div className="hamburger__label">
				<span className="hamburger__stroke"></span>
				<span className="hamburger__stroke"></span>
				<span className="hamburger__stroke"></span>
			</div>
		</div>
	);
};
