import { atom, useRecoilState } from 'recoil';

export const loadingState = atom<boolean>({
	key: 'loadingState',
	default: false,
});

export const useStateLoading = () => {
	return useRecoilState(loadingState);
};
