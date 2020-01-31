
import { css } from 'styled-components';
import * as varstyle from '../../Variables';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-top-right-radius:${varstyle.radius};
  border-bottom-right-radius:${varstyle.radius};
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: ${varstyle.fontfamily.sansBold}
  font-weight: 600;
  font-size: 20px;
  height:67px;
  border: 1px solid ${props => props.borderColor?props.borderColor:varstyle.color.black.simpleBlack};
  background-color: ${props => props.buttonColor?props.buttonColor:varstyle.color.black.blacktwo};
  color:${varstyle.color.white.default};
  &:active {

  }
`;

export default buttonStyles;