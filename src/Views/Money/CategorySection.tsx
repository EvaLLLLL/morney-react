import styled from 'styled-components';
import React, {useState} from 'react';

const CategoryWrapper = styled.section`
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

const CategorySection: React.FC = () => {
	const categoryMap = {'-': '支出', '+': '收入'};
	type Keys = keyof (typeof categoryMap)
	const [categoryList] = useState<Keys[]>(['-', '+']);
	const [category, setCategory] = useState('-');
	return (
		<CategoryWrapper>
			<ul>
				{categoryList.map(c =>
					<li className={category === c ? 'selected' : ''}
					    onClick={() => {setCategory(c);}}>
						{categoryMap[c]}
					</li>)}
			</ul>
		</CategoryWrapper>
	);
};

export {CategorySection};