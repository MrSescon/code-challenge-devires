import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Form = styled.div`
	margin-bottom: 50px;

	input {
		background: transparent;
		border: solid 1px;
		padding: 7px 10px;
		border-right: none;
		width: 70%;
		color: ${Colors.black};
		border-color: ${Colors.pink};

		&:focus, &:active {
			outline: none;
		}
	}

	button {
		border: solid 1px $pink;
		padding: 7px 10px;
		background: rgba(${Colors.pink}, .8);
		cursor: pointer;
		width: 15%;
		min-width: 20px;
		transition: all 100ms linear 80ms;
		color: ${Colors.white};
		line-height: 1;
		font-size: 18px;

		&:focus, &:active {
			outline: none;
		}

		&:hover, &:active {
			background: rgba(${Colors.pink}, 1);
		}
	}

	button, input {
		vertical-align: middle;
		height: 35px;
		box-sizing: border-box;
	}
`;
