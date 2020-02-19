

import { css } from 'styled-components';

const menuStyles = css`
        display:flex;
        flex-direction: column;
        height: 100vh;
        text-align: right;
        padding: 50px 9vw 10px 20px;
        position: absolute;
        top: 0;
        right: 0;
        color:red;
        transition: transform 0.3s ease-in-out;
        transform: ${props => props.open? 'translateX(0%)' : 'translateX(100%)'};
        background-color: rgb(59,59,59,0.9);
       
        overflow-x: hidden;

        @media (max-width: 868px) {
            width: 80%;
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