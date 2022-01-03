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
import Reviewer from './components/ButtonsReview';

const PhraseTraining: React.FC = () => {
	const {
		loading,
		setLevel,
		startTraining,
		index,
		categories,
		phrases,
		setCategory,
		category,
	} = useSingleTraining(StudyObjectTypes.PHRASE);

	return (
		<Container>
			<Question>Training Phrases</Question>
			<Link href="/training/word">
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
			{!!phrases && phrases[index] && (
				<div key={phrases[index].id} className="w-full flex flex-col items-center mb-10">
					<Card>
						<Question>
							How to say
							<Question className="mx-2" emphasis={true}>
								&quot;{phrases[index].phrase}&quot;
							</Question>
							in English?
						</Question>
					</Card>
				</div>
			)}
			<Reviewer
				onGood={() => setLevel(phrases[index], 'good')}
				onMedium={() => setLevel(phrases[index], 'medium')}
				onBad={() => setLevel(phrases[index], 'bad')}
			/>
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

export { PhraseTraining };
