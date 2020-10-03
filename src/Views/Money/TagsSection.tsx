import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

type Props = {
	value: string[];
	onChange: (value: string[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
	const {tags, setTags} = useTags();
	const selectedTags = props.value;
	const onAddTag = () => {
		const tagName = window.prompt('请输入新标签的名称');
		if (tagName !== null) {
			setTags([...tags, tagName]);
		}
	};
	const onToggleTag = (tag: string) => {
		if (selectedTags.indexOf(tag) >= 0) {
			props.onChange(selectedTags.filter(t => t !== tag));
		} else {
			props.onChange([...selectedTags, tag]);
		}
	};
	const getClass = (tag: string) => {
		return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
	};
	return (
		<Wrapper>
			<ol>
				{
					tags.map(tag => {
							return (
								<li key={tag}
								    onClick={() => {
									    onToggleTag(tag);
								    }}
								    className={getClass(tag)}>
									{tag}
								</li>
							);
						}
					)
				}
			</ol>
			<button onClick={onAddTag}>新增标签</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	flex-grow: 1;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 12px 16px;
	> ol {
			margin: 0 -12px;
		> li {
				background: #D9D9D9;
				border-radius: 18px;
				display: inline-block;
				padding: 3px 18px;
				font-size: 14px;
				margin: 8px 12px;
				&.selected {
					background: #6566ff;
					color: white;
				}
		}
	}
	> button {
		background: none;
		border: none;
		border-bottom: 1px solid #333;
		padding: 2px 4px;
		color: #666;
		margin-top: 8px;
	}
`;

export {TagsSection};