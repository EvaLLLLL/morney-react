import {Layout} from '../components/Layout';
import React, {useState, ReactNode} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords, RecordItem} from '../hooks/useRecords';
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
		color: #999999;
	}
`;

const Header = styled.h3`
	font-size: 18px;
	line-height: 20px;
	padding: 10px 16px;
`;

const Statistics = () => {
	const [category, setCategory] = useState<'-' | '+'>('-');
	const {records} = useRecords();
	const {getName} = useTags();
	const hash: { [K: string]: RecordItem[] } = {};
	const selectedRecords = records.filter(r => r.category === category);
	
	selectedRecords.forEach(r => {
		const key = day(r.createdAt).format('YYYY年MM月DD日');
		if (!(key in hash)) {
			hash[key] = [];
		}
		hash[key].push(r);
	});
	
	const array = Object.entries(hash).sort((a, b) => {
		if (a[0] === b[0]) {
			return 0;
		} else if (a[0] > b[0]) {
			return -1;
		} else {
			return 1;
		}
	});
	return (
		<Layout>
			<Wrapper>
				<CategorySection value={category}
				                 onChange={value => setCategory(value)}/>
			</Wrapper>
			{array.map(([date, records]) => {
				return (
					<div>
						<Header>{date}</Header>
						<div>
							{records.map(r => {
								return (
									<Item>
										<div className="tags">
											{r.tagIds
												.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
												.reduce((result, span, index, array) =>
													result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
											}
										</div>
										<div className="note oneLine">
											{r.note && <div className="note">{r.note}</div>}
										</div>
										<div className="amount">
											￥{r.amount}
										</div>
									</Item>
								);
							})}
						</div>
					</div>
				);
			})}
		</Layout>
	);
};

export default Statistics;