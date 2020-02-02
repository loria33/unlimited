import React, {useEffect} from 'react'; 
import {
    Link
  } from "react-router-dom";
import NavBarComg from '../NavBarComg';
import SmallWrapper from '../SmallWrapper';
import styled from 'styled-components';
import BurgerMenu from '../BurgerMenu';
import menuIcon from '../../assets/menu-icon.png';




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
align-items:center;

@media only screen and (max-width:868px) {
  display:none;
} 
`;

function Header(props) {
  
  useEffect(() => {
    console.log('Header rendered');
  }, []);
  
  const handleClick = () => {
    debugger;
  }
    return (      
      <>
      <FlexContainer>
        <SmallWrapper width='40%' marginLeft='6vw' respwidth='80%'>
            <SmallWrapper float='left' marginRight='4vw'>
              <BurgerMenu open={props.open}>
                <img src={menuIcon} alt='menu icon' style={{width:'1rem'}} />
              </BurgerMenu>
            </SmallWrapper>
            <SmallWrapper float='left' marginRight='4vw' >
               <span style={{fontSize:'30px'}}>Unlimited</span>   
            </SmallWrapper>
        </SmallWrapper>
      </FlexContainer>
      <FlexBigContainer>
        <SmallWrapper float='left' marginRight='1vw' marginLeft='1vw'>
               <span style={{fontSize:'1em'}}>Unlimited</span>   
        </SmallWrapper>
        <SmallWrapper marginLeft='6vw' height='0em'>
            <NavBarComg big={true}>
              <Link to="/">Home</Link>
              <Link to="/SearchResults">SearchResults</Link>
              <Link to="/Articles">Articles</Link>
            </NavBarComg>
        </SmallWrapper>
        <SmallWrapper marginLeft='8vw'>
              <div style={{border:'1px solid',justifyContent:'center',alignContent:'center'}} onClick={handleClick}>
                  <span style={{fontSize:'30px',paddingRight:'10px',paddingLeft:'10px',display:'block'}}>Check Availability</span>   
              </div>            
        </SmallWrapper>
      </FlexBigContainer>
      </>
    )
  }

export default Header

