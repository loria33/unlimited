
import { css } from 'styled-components';
import * as varstyle from '../../Variables'
const inputStyles = css`
    color:${props => props.textColor?props.textColor:varstyle.color.white.default};
    background-color:${varstyle.color.white.whitethree};
    height:67px;
    width:24.292vw;
    border-top-left-radius:${varstyle.radius};
    border-bottom-left-radius:${varstyle.radius};
    border:solid 0.5px ${varstyle.color.blue.cerulean};
    padding-left:31px;
    padding-right:31px;
    &:active {
        border:solid 1px ${varstyle.color.blue.cerulean}
    }
    &:focus {
        border:solid 1px ${varstyle.color.blue.cerulean}
    }
`;

export default inputStyles;