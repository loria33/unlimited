

import { css } from 'styled-components';

const menuStyles = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: green;
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        transform: translateX(-100%);
        transform: ${props => props.open? 'translateX(0)' : 'translateX(-100%)'};

        @media (max-width: 868px) {
            width: 100%;
        }
        
        a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: white;
            text-decoration: none;
            transition: color 0.3s linear;

            &:hover {
                color: red;
            }
        }
`;

export default menuStyles;