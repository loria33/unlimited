/**
 *
 * menu
 *
 */

import React from 'react';
import StyledMenu from './styledMenu';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as homepageActions from '../../../_actions/homepageActions'

function Menu(props) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(homepageActions.openDrawer(false));
  }

  return (

    <StyledMenu open={props.open}>
              <Link to="/" onClick={handleClick} >Home</Link>
              <Link to="/SearchResults" onClick={handleClick} >SearchResults</Link>
              <Link to="/Articles" onClick={handleClick} >Articles</Link>
    </StyledMenu>

  
  );
}

Menu.propTypes = {};

export default Menu;

