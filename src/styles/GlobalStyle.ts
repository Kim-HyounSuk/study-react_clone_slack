import { css } from '@emotion/react';

const GlobalStyle = css`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		height: 100%;
	}

	body {
		width: 100%;
		font-family: 'Noto Sans', 'Noto Sans KR';
	}

	ul,
	li {
		list-style-type: none;
		padding-left: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyle;
