
import { css } from 'styled-components';
import * as varstyle from '../../Variables'
const textStyles = css`
    color:${props => props.textColor?props.textColor:'#ffffff'};
    font-weight:${props => props.bold};
    font-size:${props => props.fontSize}px;
    font-family:${props => props.fontFamily?props.fontFamily:varstyle.fontfamily.sans};
    float:${props => props.float == '0'?'none':props.float};
    word-wrap: break-word;

    @media only screen and (max-width:1024px) {   
        font-size:${props => (props.fontSize*0.8)}px; 
    } 
    @media only screen and (max-width:868px) {   
        font-size:${props => (props.mobilefontSize)}px; 
    } 
`;



export default textStyles;