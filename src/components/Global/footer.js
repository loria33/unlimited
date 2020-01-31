import React from 'react'; 
import { Link } from "react-router-dom";
import NavBarComg from '../NavBarComg';
import SmallWrapper from '../SmallWrapper';
import styled from 'styled-components';


const FlexContainer = styled.div`
display:flex;
margin-top:10px;

@media only screen and (min-width:868px) {
  display:none;
} 
`;

const FlexBigContainer = styled.div`
display:flex;
margin-top:10px;

@media only screen and (max-width:868px) {
  display:none;
} 
`;

function Footer() {
    return (
      <>
      <FlexContainer>
            <SmallWrapper width='100%' marginLeft='6vw'>
                Small footer
            </SmallWrapper>
      </FlexContainer>
      <FlexBigContainer>
        <SmallWrapper width='100%' marginLeft='6vw'>
            <NavBarComg big={true}>
              <Link to="/">Home</Link>
              <Link to="/SearchResults">SearchResults</Link>
              <Link to="/Articles">Articles</Link>
            </NavBarComg>
        </SmallWrapper>
      </FlexBigContainer>
      </>
    )
  }

export default Footer

