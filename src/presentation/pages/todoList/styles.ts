import styled from 'styled-components';
import Colors from '../../styles/colors';

// *
// 	font-family: Bungee Hairline !important
// 	font-weight: bold
// 	color: $black
// 	border-color: $black 
// 	line-height: 1.5


// \::-webkit-input-placeholder
// 	color: rgba($pink, .5)

// \:-moz-placeholder
// 	color: rgba($pink, .5)

// \::-moz-placeholder
// 	color: rgba($pink, .5)

// \:-ms-input-placeholder
// 	color: rgba($pink, .5)

// body
// 	background: #fefefe


export const container = styled.div`
	margin: auto;
	text-align: center;
	max-width: 700px;
	margin: 60px auto 0 auto;
	padding: 0px 20px;
	
	h2 {
		margin-bottom: 30px;
		color: ${Colors.black};
  }
	
	#info {
		padding: 7px;
		text-align: left;
		color: ${Colors.grey};
  }

	#acu {
		text-align: left;
		padding: 7px;
  }
`;

			
			