import React from 'react';
import styled from 'styled-components';

const CategorySection = styled.section`
	font-size: 24px;
	> ul {
		display: flex;
		> li {
			position: relative;
			padding: 16px 0;
			width: 50%;
			text-align: center;
			background: #c4c4c4;
			&.selected::after {
				content: '';
				display: block;
				height: 4px;
				background: black;
				position: absolute;
				bottom: 0;
				width: 100%;
				left: 0;
			}
		}
	}
`;

export default CategorySection