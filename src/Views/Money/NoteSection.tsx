import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const NotesWrapper = styled.section`
	background: #f5f5f5;
	padding: 0 16px;
	font-size: 14px;
`;

type Props = {
	value: string;
	onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
	const note = props.value;
	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		props.onChange(e.target.value);
	};
	return (
		<NotesWrapper>
			<Input label="备注"
			       type="text"
			       placeholder="点击输入备注"
			       value={note}
			       onChange={onChange}>
			</Input>
		</NotesWrapper>
	);
};

export {NoteSection};