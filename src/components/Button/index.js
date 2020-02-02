/**
 *
 * SmallWrapper
 *
 */

import React, { memo } from 'react';
import StyledSmallWrapper from './styledSmallWrapper'


function SmallWrapper(props) {
  return (
      <StyledSmallWrapper marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
      display={props.display} height={props.height} width={props.width} float={props.float} textAlign={props.textAlign} respwidth={props.respwidth} respAlign={props.respAlign}>
          {props.children} 
      </StyledSmallWrapper>
    
  );
}

SmallWrapper.propTypes = {};

export default memo(SmallWrapper);
