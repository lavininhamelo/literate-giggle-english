import { Card } from 'presentation/components/Card';
import OptionList from 'presentation/components/Option/OptionList';
import { Question } from 'presentation/components/Question';
import { Result } from 'presentation/components/Result';
import { Button, InputText } from 'presentation/components/Shared/Form';
import { Icon } from 'presentation/components/Shared/Icon';
import React, { useEffect } from 'react';
import ButtonReview from './components/ButtonReview';
import { useStateThreeFirstCategories } from 'presentation/state/categories/selectors/selectThreeFirstCategories';

import { Container, ButtonsWrapper } from './styles';

const Test: React.FC = () => {
	const options = [
		{ id: 1, name: 'Option One', isCorrect: false },
		{ id: 2, name: 'Option Two', isCorrect: false },
		{ id: 3, name: 'Option Three', isCorrect: true },
		{ id: 4, name: 'Option Four', isCorrect: false },
	];

	const categories = useStateThreeFirstCategories();

	useEffect(() => {
		console.log(categories);
	}, []);

	return (
		<Container className="w-full sm:w-8/12 ">
			<Card>
				<Question>
					Write
					<Question className="mx-2" emphasis={true}>
						&quot;Qual é o seu nome?&quot;
					</Question>
					in English:
				</Question>
				<div className="flex items-center mt-4">
					<InputText className="mr-4" type="text" name="test" value={"What's your name?"} />
					<Button icon="send"></Button>
				</div>
			</Card>

			<div className="mt-8"></div>
			<Card>
				<div className="flex flex-col items-center">
					<Question>Voce errou!</Question>
					<Result isCorrect={true}>What&apos;s your name?</Result>
				</div>
			</Card>
			<div className="mt-8"></div>

			<Card>
				<div className="flex flex-col items-center">
					<Question>Voce acertou!</Question>
					<Result isCorrect={false}>What&apos;s your name?</Result>
				</div>
			</Card>

			<div className="mt-8"></div>

			<Card>
				<Question className="mb-4" emphasis={true}>
					Result{' '}
				</Question>
				<Question>
					There are many variations of passages of Lorem Ipsum available, but the majority have
					suffered alteration in some form, by injected humour, or randomised words which don&apos;t
					look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
				</Question>
			</Card>

			<div className="mt-8"></div>

			<Card>
				<Question>
					Synonyms for
					<Question className="mx-2" emphasis={true}>
						{'"Good"'}
					</Question>
				</Question>

				<div className="flex items-center mt-4">
					<span className="m-4">1.</span>
					<InputText className="mr-4" type="text" name="Synonym 1" value={'Nice'} />
					<Button icon="send"></Button>
				</div>
				<div className="flex items-center mt-4">
					<span className="m-4">2.</span>
					<InputText disabled className="mr-4" type="text" name="Synonym 1" value={'Cool'} />
					<Icon name="thumb_up" className="mx-4" color="#69c977"></Icon>
				</div>
				<div className="flex items-center mt-4">
					<span className="m-4">3.</span>
					<InputText className="mr-4" type="text" name="Synonym 1" value={'Fine'} />
					<Icon name="thumb_down" className="mx-4" color="#be4040"></Icon>
				</div>
			</Card>
			<div className="mt-8"></div>

			<Card>
				<Question>
					Synonyms for
					<Question className="mx-2" emphasis={true}>
						{'"Good"'}
					</Question>
					<OptionList className="mt-4" options={options} />
				</Question>
			</Card>
			<div className="mt-8"></div>

			<Card>
				<Question>
					Synonyms for
					<Question className="mx-2" emphasis={true}>
						{'"Good"'}
					</Question>
					<OptionList className="mt-4" isMultiple={false} options={options} />
				</Question>
			</Card>
			<ButtonsWrapper className="mt-4">
				<ButtonReview icon="sentiment_satisfied" color="#6081d4">
					Medium
				</ButtonReview>
				<ButtonReview icon="sentiment_very_satisfied" color="#69c977">
					Good
				</ButtonReview>
				<ButtonReview icon="sentiment_dissatisfied" color="#ce2451">
					Bad
				</ButtonReview>
			</ButtonsWrapper>
		</Container>
	);
};

export { Test };
