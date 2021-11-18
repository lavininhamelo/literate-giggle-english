import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 100%;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
  }

  
`;

const GlobalStyles = () => (
	<>
		<CustomStyles />
	</>
);

export default GlobalStyles;
