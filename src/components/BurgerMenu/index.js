/**
 *
 * BurgerMenu
 *
 */

import React, { memo } from 'react';
import StyledBurgerMenu from './styledBurgerMenu';

import { useDispatch } from "react-redux";
import * as homepageActions from '../../_actions/homepageActions';


function BurgerMenu(props) {
  const dispatch = useDispatch();
  const isDrawerOpen = props.open;
  
  const handleClick = () => {
    if(isDrawerOpen){
      document.body.style.overflow = "scroll"
      dispatch(homepageActions.openDrawer(false));
    }
    else {
      document.body.style.overflow = "hidden"
      dispatch(homepageActions.openDrawer(true));
    }
      
  }

  return (
   <StyledBurgerMenu onClick={handleClick}> 
      {props.children}
   </StyledBurgerMenu>
  );
}

BurgerMenu.propTypes = {};

export default memo(BurgerMenu);
