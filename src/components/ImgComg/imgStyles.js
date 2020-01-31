
import { css } from 'styled-components';
const imgStyles = css`
        width: ${props => props.width?props.width:'auto'};
        height:${props => props.height?props.height:'auto'};
        margin:0;
        max-width: 100%;  
        min-width:${props => props.minWidth?props.minWidth:props.width?props.width:'auto'};
        min-height:${props => props.minHeight?props.minHeight:props.height?props.height:'auto'};

        @media only screen and (max-width:868px) {
            width: ${props => props.respwidth?props.respwidth:props.width?props.width:'auto'};
            height:${props => props.respheight?props.respheight:props.height?props.height:'auto'};
        } 
`;

export default imgStyles ;