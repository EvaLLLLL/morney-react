import styled from 'styled-components';

const NumberPadWrapper = styled.section`
	display: flex;
	flex-direction: column;
	> .output {
		background: white;
		font-size: 36px;
		line-height: 72px;
		text-align: right;
		padding: 0 16px;
		box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
		@media(max-width: 500px) {
			line-height: 50px;
		}
	}
	> .pad {
		> button {
			border: none;
			font-size: 18px;
			float: left;
			height: 64px;
			width: 25%;
			&.ok {
				height: 128px;
				float: right;
			}
			&.zero {
				width: 50%;
			}
			&:nth-child(1) {
				background: #F2F2F2;
			}
			&:nth-child(2),
			&:nth-child(5) {
				background: #E0E0E0;
			}
			&:nth-child(3),
			&:nth-child(6),
			&:nth-child(9) {
				background: #D3D3D3;
			}
			&:nth-child(4),
			&:nth-child(7),
			&:nth-child(10) {
				background: #C1C1C1;
			}
			&:nth-child(8),
			&:nth-child(11),
			&:nth-child(13) {
				background: #B8B8B8;
			}
			
			&:nth-child(12) {
				background: #9A9A9A
			}
			&:nth-child(14) {
				background: #A9A9A9;
			}
		}
		@media(max-width: 500px){
			> button {
				height: 48px;
				&.ok {
					height: 96px;
				}
			}
		}
	}
`;

export {NumberPadWrapper};