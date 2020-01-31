

import { css } from 'styled-components';
const burgerMenuStyles = css`
    
    position: relative;
    cursor: pointer;
    display: block;
    z-index: 100;
    
    @media (min-width: 868px) {
      display: none;
    }
`;

export default burgerMenuStyles;

