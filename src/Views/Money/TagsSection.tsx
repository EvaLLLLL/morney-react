import styled from 'styled-components';
import React, {useEffect, useRef} from 'react';
import {useTags} from '../../hooks/useTags';

type Props = {
	value: number[];
	onChange: (selected: number[]) => void;
	scrollTop?: number
}

const TagsSection: React.FC<Props> = (props) => {
	const {tags, addTag} = useTags();
	const selectedTagIds = props.value;
	const mainRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		setTimeout(() => {
			if (!mainRef.current) {
				return;
			}
			mainRef.current.scrollTop = props.scrollTop!;
		}, 0);
	}, [props.scrollTop]);
	
	const onToggleTag = (tagId: number) => {
		if (selectedTagIds.indexOf(tagId) >= 0) {
			props.onChange(selectedTagIds.filter(t => t !== tagId));
		} else {
			props.onChange([...selectedTagIds, tagId]);
		}
	};
	const getClass = (tagId: number) => {
		return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
	};
	return (
		<Wrapper ref={mainRef}>
			<ol>
				{
					tags.map(tag => {
							return (
								<li key={tag.id}
								    onClick={() => {
									    onToggleTag(tag.id);
								    }}
								    className={getClass(tag.id)}>
									{tag.name}
								</li>
							);
						}
					)
				}
			</ol>
			<button onClick={addTag}>新增标签</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	overflow: scroll;
	background: #FFFFFF;
	display: flex;flex-grow: 1;flex-shrink: 1;flex-direction: column;
	//justify-content: flex-end;
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

TagsSection.defaultProps = {
	scrollTop: 0
};

export {TagsSection};