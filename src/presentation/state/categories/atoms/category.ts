import { Category } from 'domain/Category';
import { atom, useRecoilState } from 'recoil';

const initialState = [];

export const categoryState = atom<Category[]>({
	key: 'categoryState',
	default: initialState,
});

export const useStateCategory = () => {
	return useRecoilState(categoryState);
};
