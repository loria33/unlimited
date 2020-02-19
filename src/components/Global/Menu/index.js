/**
 *
 * menu
 *
 */

import React from 'react';
import StyledMenu from './styledMenu';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SmallWrapper from '../../SmallWrapper';
import * as homepageActions from '../../../_actions/homepageActions'

function Menu(props) {

  const dispatch = useDispatch();

  const handleClick = () => {
    document.body.style.overflow = "scroll"
    dispatch(homepageActions.openDrawer(false));
  }

  return (
    
    <SmallWrapper onClick={handleClick} width={'100%'} bgColor={props.open?'rgba(53,53,53, 0.9)':'transparent'} height={props.open?'100%':'0vh'} position={'absolute'} >
    <StyledMenu open={props.open}>
              
                    <Link to="/" onClick={handleClick} >בית</Link>
                    <Link to="/SearchResults" onClick={handleClick} >תוצאות חיפוש</Link>
                    <Link to="/Articles" onClick={handleClick} >כתבות</Link>
              
    </StyledMenu>
    </SmallWrapper>
  );
}

Menu.propTypes = {};

export default Menu;

