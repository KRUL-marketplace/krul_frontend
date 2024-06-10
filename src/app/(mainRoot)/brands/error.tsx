'use client';

import React from 'react';

interface Props {
	error: Error & { digest?: string };
	reset: () => void;
}

const Error = ({ error, reset }: Props) => {
	return <div>{error.message}</div>;
};

export default Error;
