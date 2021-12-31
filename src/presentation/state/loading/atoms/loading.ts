import { atom, useRecoilState } from 'recoil';

export const loadingState = atom<boolean>({
	key: 'loadingState',
	default: false,
});

export const useLoading = () => {
	return useRecoilState(loadingState);
};
