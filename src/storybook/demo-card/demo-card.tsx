import React, { ReactNode } from 'react';
import './demo-card.css';

export const DemoCard = ({ children }: { children: ReactNode }) => {
	return <div className={'demo-card'}>{children}</div>;
};
