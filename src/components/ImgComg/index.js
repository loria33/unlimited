/**
 *
 * ImgComg
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import StyledImg from './styledImg';
// import PropTypes from 'prop-types';

function Imgcomg(props) {
  return (
   <StyledImg src={props.src} width={props.width} height={props.height} respwidth={props.respwidth} 
   respheight={props.respheight} minWidth={props.minWidth} minHeight={props.minHeight}/>
  );

  <img src="img/download-apple.png"
    
     class="Download-Apple"></img>
}

export default Imgcomg;
