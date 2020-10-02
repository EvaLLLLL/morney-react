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

type Props = {
	value: '-' | '+';
	onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
	const category = props.value;
	const categoryMap = {'-': '支出', '+': '收入'};
	const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
	return (
		<CategoryWrapper>
			<ul>
				{categoryList.map(c =>
					<li key={c}
					    className={category === c ? 'selected' : ''}
					    onClick={() => {
						    props.onChange(c);
					    }}>
						{categoryMap[c]}
					</li>)}
			</ul>
		</CategoryWrapper>
	);
};

export {CategorySection};