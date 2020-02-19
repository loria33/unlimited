
import { css } from 'styled-components';

const mapStyles = css`
    margin-top:${props => props.marginTop};
    margin-bottom:${props => props.marginBottom};
    margin-right:${props => props.marginRight};
    margin-left:${props => props.marginLeft};
    width:${props => props.width};
    float:${props => props.float?props.float:'none'};
    text-align:${props => props.textAlign?props.textAlign:'unset'};
    display:${props => props.display?props.display:'inline-block'};
    height:${props => props.height?props.height:'inherit'};
    border:${props => props.border?props.border:'none'};
    background-color:${props => props.bgColor?props.bgColor:'transparent'};
    padding-bottom:${props => props.paddingBottom?props.paddingBottom:0};
    padding-top:${props => props.paddingTop?props.paddingTop:0};
    white-space: normal;
    border-radius:${props => props.borderRadius?props.borderRadius:0};
    @media only screen and (max-width:1400px) {

    } 
    @media only screen and (max-width:1100px) {
       
    } 
    @media only screen and (max-width:868px) {
        width: ${props => props.respwidth?props.respwidth:props.width};
        text-align:${props => props.respAlign?props.respAlign:props.textAlign?props.textAlign:'unset'};
        margin-right:${props => props.respAlign ==='center'?'0':props.marginRight};
        margin-left:${props => props.respAlign ==='center'?'0':props.marginLeft};
        
    } 
`;

export default mapStyles;