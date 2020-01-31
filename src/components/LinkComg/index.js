/**
 *
 * LinkComg
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledLink from './styledLink';
import StyledA from './styledA';
import CommonHelper from '../../../helpers/CommonHelper';
import { FormattedMessage } from 'react-intl';
import messages from './messages';



function LinkComg(props) {
  if(CommonHelper.isInternal(props.to) ==  false) {
    return (
      <StyledA href={props.to} to={props.to}>        
        {props.children}
      </StyledA>
    );
    
  }
  else {
    return (
        <StyledLink to={props.to}>        
            {props.children}
        </StyledLink>
    );
  }
  

  
}

LinkComg.propTypes = {};

export default memo(LinkComg);
