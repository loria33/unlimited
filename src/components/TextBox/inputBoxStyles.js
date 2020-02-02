
import { css } from 'styled-components';

const inputBoxStyles = css`
    margin-top:${props => props.marginTop};
    margin-bottom:${props => props.marginBottom};
    margin-right:${props => props.marginRight};
    margin-left:${props => props.marginLeft};
    width:${props => props.width};
    float:${props => props.float?props.float:'none'};
    text-align:${props => props.textAlign?props.textAlign:'unset'};
    display:${props => props.display?props.display:'inline-block'};
    height:${props => props.height?props.height:'inherit'};
    border-bottom: 1px solid blue;
    border-top: none;
    border-right: none;
    border-left: none;
    white-space: normal;
    outline:none;
    direction:${props => props.direction?props.direction:'inherit'};
    ::placeholder,
    ::-webkit-input-placeholder {
        color: gray;
    }
    :-ms-input-placeholder {
        color: gray;
    }
    
    @media only screen and (max-width:868px) {
        width: ${props => props.respwidth?props.respwidth:props.width};
        text-align:${props => props.respAlign?props.respAlign:props.textAlign?props.textAlign:'unset'};
        margin-right:${props => props.respAlign ==='center'?'0':props.marginRight};
        margin-left:${props => props.respAlign ==='center'?'0':props.marginLeft};
        
    } 
`;

export default inputBoxStyles;