import React, {useEffect} from 'react'; 
import { useDispatch,useSelector} from "react-redux";
import SearchBox from '../components/SearchBox';
import contact from '../assets/contact.jpg';
import Img from '../components/ImgComg';
import MapWrapper from '../components/MapWrapper';
import * as homepageActions from '../_actions/homepageActions';

function SearchResults() {
  
  const dispatch = useDispatch();
 
    return (
    <div style={{justifyContent:'center',backgroundColor:'white'}}>
    
    <Img src={contact} width={'100%'} height={'30vh'}
         respheight={'15vh'} />
    <MapWrapper />
    </div>
    );
  }

export default SearchResults