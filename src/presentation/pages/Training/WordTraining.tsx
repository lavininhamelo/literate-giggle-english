import { Card } from 'presentation/components/Card';
import { Question } from 'presentation/components/Question';
import React from 'react';
import ButtonReview from './components/ButtonReview';
import { Container, ButtonsWrapper } from './styles';
import { useSingleTraining } from './useSingleTraining';
import { Button } from 'presentation/components/Shared/Form';
import InputSelect from 'presentation/components/Shared/Form/Input/InputSelect/InputSelext';
import { StudyObjectTypes } from 'domain/StudyObject/StudyObjectTypes';
import Link from 'next/link';

const WordTraining: React.FC = () => {
	const {
		loading,
		setLevel,
		startTraining,
		index,
		categories,
		words,
		setCategory,
		category,
	} = useSingleTraining(StudyObjectTypes.WORD);

	return (
		<Container className="w-full sm:w-8/12 ">
			<Question>Training Words</Question>
			<Link href="/training/phrase">
				<Button>Go to</Button>
			</Link>
			<Button onClick={() => startTraining()}>Start training</Button>
			<InputSelect
				onChange={(e: any) => setCategory(e)}
				list={categories}
				value={category}
				option="name"
				label="Category"
			/>
			{loading}
			{!!words && words[index] && (
				<div key={words[index].id} className="w-full flex flex-col items-center mb-10">
					<Card>
						<Question>
							How to say
							<Question className="mx-2" emphasis={true}>
								&quot;{words[index].word}&quot;
							</Question>
							in English?
						</Question>
					</Card>

					<ButtonsWrapper className="mt-4">
						<ButtonReview
							onClick={() => setLevel(words[index], 'medium')}
							icon="sentiment_satisfied"
							color="#6081d4">
							Medium
						</ButtonReview>
						<ButtonReview
							onClick={() => setLevel(words[index], 'good')}
							icon="sentiment_very_satisfied"
							color="#69c977">
							Good
						</ButtonReview>
						<ButtonReview
							onClick={() => setLevel(words[index], 'bad')}
							icon="sentiment_dissatisfied"
							color="#ce2451">
							Bad
						</ButtonReview>
					</ButtonsWrapper>
				</div>
			)}
			{/* <div className="mt-8"></div>
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
			</Card> */}
		</Container>
	);
};

export { WordTraining };
