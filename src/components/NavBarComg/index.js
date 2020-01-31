/**
 *
 * NavBarComg
 *
 */

import React, { memo } from 'react';
import StyledNavBar from './styledNavBar';


function NavBarComg(props) {
  return (
    <StyledNavBar>
      {props.children}
    </StyledNavBar>
         
    
  );
}

NavBarComg.propTypes = {};

export default memo(NavBarComg);

