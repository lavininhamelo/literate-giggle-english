import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: inline-block;
	width: 48px;
	height: 28px;
	z-index: 2;
`;
export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;

	&:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	border-radius: 34px;

	& :before {
		border-radius: 50%;
	}
`;
export const Input = styled.input`
	width: 40px;
	height: 20px;
	z-index: 5;

	&:checked + ${Slider} {
		background-color: #2196f3;
	}

	&:focus + ${Slider} {
		box-shadow: 0 0 1px #2196f3;
	}

	&:checked + ${Slider}:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}
`;
