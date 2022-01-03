import React from 'react';
import ButtonReview from './ButtonReview';

import { ButtonsWrapper } from '../styles';

interface Props {
	onGood: React.MouseEventHandler<HTMLButtonElement>;
	onMedium: React.MouseEventHandler<HTMLButtonElement>;
	onBad: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonsReview: React.FC<Props> = ({ onMedium, onBad, onGood }) => {
	return (
		<ButtonsWrapper className="mt-4">
			<ButtonReview onClick={onMedium} icon="sentiment_satisfied" color="#6081d4">
				Medium
			</ButtonReview>
			<ButtonReview onClick={onBad} icon="sentiment_very_satisfied" color="#69c977">
				Good
			</ButtonReview>
			<ButtonReview onClick={onGood} icon="sentiment_dissatisfied" color="#ce2451">
				Bad
			</ButtonReview>
		</ButtonsWrapper>
	);
};

export default ButtonsReview;
