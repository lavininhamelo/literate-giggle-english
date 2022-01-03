import { useEffect, useState } from 'react';
import { Category } from 'domain/Category';
import { StudyObject } from 'domain/StudyObject';
import { StudyObjects, StudyObjectTypes } from 'domain/StudyObject/StudyObjectTypes';
import { buildRegisterCategoryTraining } from 'factories/features';
import { buildLoadStudyByCategory } from 'factories/features/StudyObjects/load-study-by-category';
import { buildLoadStudy } from 'factories/features/StudyObjects/load-study';
import { useStateCategoriesById, useStateCategory } from 'presentation/state';
import { processRequest } from 'presentation/helpers';
import { buildSetStudyLevel } from 'factories/features/StudyObjects/update-study-level';
import { Notify } from 'presentation/components/Shared/Notification';
import { Word } from 'domain/Word';
import { Phrase } from 'domain/Phrase';
import { Synonym } from 'domain/Synonym';
import { Flashcard } from 'domain/Flashcard';

export function useSingleTraining(studyObjectType: StudyObjectTypes) {
	const [category, setCategory] = useState<Category>();
	const [index, setIndex] = useState<number>(0);
	const [studyObject, setStudyObjects] = useState<StudyObjects[]>();
	const [words, setWords] = useState<Word[]>();
	const [phrases, setPhrases] = useState<Phrase[]>();
	const [synonyms, setSynonyms] = useState<Synonym[]>();
	const [flashcards, setFlashcards] = useState<Flashcard[]>();
	const [loading, setLoading] = useState(false);
	const [categories, setCategories] = useStateCategory();
	const categoriesById = useStateCategoriesById();
	const registerCategoryTraining = buildRegisterCategoryTraining();
	const loadStudyByCategory = buildLoadStudyByCategory();
	const loadStudy = buildLoadStudy();
	const setStudyLevel = buildSetStudyLevel();

	type LevelTypes = 'good' | 'bad' | 'medium';

	useEffect(() => {
		switch (studyObjectType) {
			case StudyObjectTypes.WORD:
				setWords(studyObject as Word[]);
				break;
			case StudyObjectTypes.PHRASE:
				setPhrases(studyObject as Phrase[]);
				break;
			case StudyObjectTypes.SYNONYM:
				setSynonyms(studyObject as Synonym[]);
				break;
			case StudyObjectTypes.FLASHCARD:
				setFlashcards(studyObject as Flashcard[]);
				break;
		}
	}, [studyObject]);

	function setLevel(study: StudyObject, level: LevelTypes) {
		const levelPoints = {
			good: -1,
			medium: 0,
			bad: 1,
		};
		processRequest(setStudyLevel, {
			id: study.id,
			level: study.level + levelPoints[level],
			studyType: studyObjectType,
		})
			.then(() => {
				if (studyObject.length > index + 1) {
					setIndex(index + 1);
				} else {
					setStudyObjects([]);
				}
			})
			.catch(() => Notify('Error to update study level!', true));
	}

	async function getStudies() {
		processRequest(loadStudy, { studyType: studyObjectType })
			.then((studies) => setStudyObjects(studies))
			.catch(() => Notify('Error to start study training!', true));
	}

	async function getStudyByCategory() {
		processRequest(loadStudyByCategory, {
			studyType: studyObjectType,
			categoryId: category.id,
		})
			.then((studies) => setStudyObjects(studies))
			.catch(() => Notify('Error to start study training!', true));
	}

	async function startTraining() {
		setLoading(true);
		if (category) {
			makeRegisterCategoryTraining();
			getStudyByCategory();
		} else {
			getStudies();
		}
	}

	function makeRegisterCategoryTraining() {
		processRequest(registerCategoryTraining, category).then().catch();
		updateCategoryState(category);
	}

	function updateCategoryState(category: Category) {
		const { index } = categoriesById[category.id];
		const _categories = [...categories];
		_categories[index] = category;
		setCategories(_categories);
	}

	return {
		StudyObjectTypes,
		loading,
		categories,
		index,
		category,
		words,
		phrases,
		synonyms,
		flashcards,
		startTraining,
		setLevel,
		setCategory,
	};
}
