import React from 'react';

// require('icons/money.svg');
// require('icons/label.svg');
// require('icons/chart.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
// require 一个目录/文件夹

type Props = {
	name: string
}

const Icon = (props: Props) => {
	return (
		<svg className="icon">
			<use xlinkHref={'#' + props.name}/>
		</svg>
	);
};

export default Icon;