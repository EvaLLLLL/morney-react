import {useState} from 'react';
import {createID} from 'lib/createID';

const defaultTags = [
	{id: createID(), name: '衣'},
	{id: createID(), name: '食'},
	{id: createID(), name: '住'},
	{id: createID(), name: '行'}
];

const useTags = () => {
	const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
	
	const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
	
	const findTagIndex = (id: number) => {
		let result = -1;
		for (let i = 0; i < tags.length; i++) {
			if (tags[i].id === id) {
				result = i;
				break;
			}
		}
		return result;
	};
	
	const updateTag = (id: number, obj: { name: string }) => {
		// 获取要改的 tag 的下标
		const index = findTagIndex(id);
		// 深拷贝 tags 得到 tagsClone
		const tagsClone = JSON.parse(JSON.stringify(tags));
		// 把 tagsClone 的第 index 删掉，换成新的
		tagsClone.splice(index, 1, {id: id, name: obj.name});
		setTags(tagsClone);
	};
	
	const deleteTag = (id: number) => {
		// 获取要改的 tag 的下标
		const index = findTagIndex(id);
		// 深拷贝 tags 得到 tagsClone
		const tagsClone = JSON.parse(JSON.stringify(tags));
		// 把 tagsClone 的第 index 删掉
		tagsClone.splice(index, 1);
		setTags(tagsClone);
	};
	
	return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};