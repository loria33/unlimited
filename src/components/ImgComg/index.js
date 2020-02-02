/**
 *
 * ImgComg
 *
 */

import React from 'react';
import StyledImg from './styledImg';
// import PropTypes from 'prop-types';

function Imgcomg(props) {
  return (
   <StyledImg src={props.src} width={props.width} height={props.height} respwidth={props.respwidth} 
   respheight={props.respheight} minWidth={props.minWidth} minHeight={props.minHeight}/>
  );
}

export default Imgcomg;
