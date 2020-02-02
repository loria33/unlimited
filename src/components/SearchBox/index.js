/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledSearchBox from './styledSearchBox'
import TextBox from '../TextBox';
import SmallWrapper from '../SmallWrapper';
import Texts from '../../configs/Texts';
import { useDispatch,useSelector } from "react-redux";
import * as homepageActions from '../../_actions/homepageActions';



function SearchBox(props) {
    const dispatch = useDispatch();
    const cityText = useSelector(state => state.homepageReducer.cityText);
    const roadText = useSelector(state => state.homepageReducer.roadText);

    const handleClick = (e) => {    
        dispatch(homepageActions.roadInput(e.target.value));
    } 
    
    const handleChangeRoad = (e) => {
        dispatch(homepageActions.roadInput(e.target.value));

    }
    const handleChangeCity = (e) => {
        dispatch(homepageActions.cityInput(e.target.value));
    }
  return (
      <StyledSearchBox marginTop={'-5vh'} marginBottom={'20px'}
      height={props.height} width={'100%'} float={props.float} textAlign={'center'} >
          <SmallWrapper class='asas' paddingTop={'10px'} paddingBottom={'10px'} border={'1px solid black'} bgColor={'white'} marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
                       height={props.height} width={'100%'} float={props.float} textAlign={props.textAlign} respwidth={'80%'} respAlign={props.respAlign}>
                <SmallWrapper display={'block'}>
                    <SmallWrapper marginRight='4vw'>
                        <TextBox value={roadText} onChange={handleChangeRoad}   placeholder={Texts.homePage.roadTextPlaceHolder} direction={'rtl'} textAlign={'start'}></TextBox>
                    </SmallWrapper>
                    <SmallWrapper marginRight='4vw'>
                        <TextBox value={cityText} onChange={handleChangeCity} placeholder={Texts.homePage.cityTextPlaceHolder} direction={'rtl'} textAlign={'start'}></TextBox>
                    </SmallWrapper>
                </SmallWrapper>                           
                <SmallWrapper onClick={handleClick} marginTop={'20px'} marginBottom={'20px'} border={'1px solid gray'} bgColor={'gray'} borderRadius={'30px'} 
                       width={'60%'} textAlign={'center'} respwidth={'60%'} >
                       <span style={{fontSize:'1rem',color:'white',display:'block'}}>Call Google</span>
                </SmallWrapper>
                
          </SmallWrapper>
      </StyledSearchBox>
    
  );
}

SearchBox.propTypes = {};

export default memo(SearchBox);
