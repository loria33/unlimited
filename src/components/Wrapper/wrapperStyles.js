
import { css } from 'styled-components';

const wrapperStyles = css`
  
    background:url(${props => props.bgImage}); 
    background-color:${props => props.bgColor};
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
    background-size: cover;
    background-repeat: no-repeat;
   

    @media only screen and (max-width:1400px) {
       
      } 
    @media only screen and (max-width:1100px) {
       
    } 
    @media only screen and (max-width:900px) {
    
    } 
`;

export default wrapperStyles;