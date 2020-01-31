

import { css } from 'styled-components';

const navBarStyles = css`
  flex-direction:row;
  list-style-type: none;
  font-size:16px;

  & a {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 100;
    border-bottom: 1px solid transparent;
    margin-right: 20px;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #00adee;
    }
    @media only screen and (max-width:868px) {
      display:none;
    } 
`;

export default navBarStyles;