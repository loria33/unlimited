import React, {useEffect} from 'react'; 
import { useSelector, useDispatch } from "react-redux";
//import {incrementNumber,} from "../_actions/number";
import SearchBox from '../components/SearchBox';
import contact from '../assets/contact.jpg';
import Img from '../components/ImgComg';
import Blog from '../components/Blog';
import * as homepageActions from '../_actions/homepageActions';

function Home() {
  ;
  const dispatch = useDispatch();
  const blogCats = useSelector(state => state.homepageReducer.blogCategories);
 
  
  useEffect(() => {
    dispatch(homepageActions.getCms('/blog-categories'));
  },[dispatch]);


    return (
    <div style={{justifyContent:'center',backgroundColor:'white'}}>
    
    <Img src={contact} width={'100%'} height={'30vh'}
         respheight={'15vh'} />
    <SearchBox />
    <Blog blogCats={blogCats}></Blog>

    

    {/* {number.clickedNumber || 0}<br />
            <button onClick={handleClick}>
              Click Me!
            </button> */}
    </div>
    );
  }

export default Home