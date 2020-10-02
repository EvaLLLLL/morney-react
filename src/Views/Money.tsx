import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {Layout} from '../components/Layout';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
`;

const Money = () => {
	return (
		<MyLayout>
			<TagsSection/>
			<NoteSection/>
			<CategorySection/>
			<NumberPadSection/>
		</MyLayout>
	);
};

export default Money;