

import { css } from 'styled-components';

const menuStyles = css`
        display:flex;
        flex-direction: column;
        background: black;
        height: 100vh;
        text-align: left;
        padding: 50px 10px 10px 6vw;
        position: absolute;
        top: 0;
        left: 0;
        color:red;
        transition: transform 0.3s ease-in-out;
        transform: translateX(-100%);
        transform: ${props => props.open? 'translateX(0%)' : 'translateX(-100%)'};

        @media (max-width: 868px) {
            width: 100%;
        }
        @media (min-width: 868px) {
            display: none;
        }
        
        a {
            font-size: 1rem;
            text-transform: uppercase;
            padding: 1rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: white;
            text-decoration: none;
            transition: color 0.3s linear;
            paddingTop:40px
            &:hover {
                color: blue;
            }
        }
`;

export default menuStyles;