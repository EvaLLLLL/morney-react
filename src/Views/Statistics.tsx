import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const Wrapper = styled.div`
	background: white;
`;

const Item = styled.div`
	line-height: 20px;
	padding: 10px 16px;
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: white;
	> .note {
		margin-right: auto;
		margin-left: 16px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #999999;
	}
`;

const Statistics = () => {
	const [category, setCategory] = useState<'-' | '+'>('-');
	const {records} = useRecords();
	const {getName} = useTags();
	
	return (
		<Layout>
			<Wrapper>
				<CategorySection value={category}
				                 onChange={value => setCategory(value)}/>
			</Wrapper>
			<div>
				{records.map(r => {
					return <Item>
						<div className="tags">
							{r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
						</div>
						{r.note && <div className="note">{r.note}</div>}
						<div className="amount">
							￥{r.amount}
						</div>
						{/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
					</Item>;
				})}
			</div>
		</Layout>
	);
};

export default Statistics;