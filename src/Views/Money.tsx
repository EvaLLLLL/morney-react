import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {Layout} from 'components/Layout';
import {NoteSection} from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
`;

type Category = '-' | '+';

const defaultFormData = {
	tagIds: [] as number[],
	note: '',
	category: '-' as Category,
	amount: 0
};

const CategoryWrapper = styled.div`
	background: #c4c4c4;
`;

const Money = () => {
	const [selected, setSelected] = useState(defaultFormData);
	const {addRecord} = useRecords();
	const onChange = (obj: Partial<typeof selected>) =>
		setSelected({...selected, ...obj});
	
	const submit = () => {
		if (addRecord(selected)) {
			alert('记录已保存');
			setSelected(defaultFormData);
		} else {
			alert('金额不能为空，请输入金额');
		}
	};
	
	return (
		<MyLayout>
			<TagsSection value={selected.tagIds}
			             onChange={tagIds => onChange({tagIds})}
			             scrollTop={9999}/>
			<NoteSection value={selected.note}
			             onChange={note => onChange({note})}/>
			<CategoryWrapper>
				<CategorySection value={selected.category}
				                 onChange={category => onChange({category})}/>
			</CategoryWrapper>
			<NumberPadSection value={selected.amount}
			                  onChange={amount => onChange({amount})}
			                  onOk={submit}/>
		</MyLayout>
	);
};

export default Money;