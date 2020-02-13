/**
 *
 * StyledInputBox
 *
 */

import React, { memo } from 'react';
import StyledInputBox from './styledInputBox'


function TextBox(props) {
  return (
      <StyledInputBox onChange={props.onChange} value={props.value} placeholder={props.placeholder} direction={props.direction} marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
         display={props.display} height={props.height} width={props.width} float={props.float} textAlign={props.textAlign} respwidth={props.respwidth} respAlign={props.respAlign}>
      </StyledInputBox>
    
  );
}

TextBox.propTypes = {};

export default memo(TextBox);
