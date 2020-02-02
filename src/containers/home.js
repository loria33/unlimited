import React, {useEffect} from 'react'; 
//import { useSelector, useDispatch } from "react-redux";
//import {incrementNumber,} from "../_actions/number";
import SearchBox from '../components/SearchBox';
import contact from '../assets/contact.jpg';
import Img from '../components/ImgComg';
function Home() {

  useEffect(() => {
    console.log('Home rendered');
  }, []);

  // const dispatch = useDispatch();
  // const number = useSelector(state => state.number);

  //  const handleClick = () => {
  //   dispatch(incrementNumber((number && number.clickedNumber) || 0))
  // } 

    return (
    <div style={{justifyContent:'center',backgroundColor:'white'}}>
    
    <Img src={contact} width={'100%'} height={'30vh'}
         respheight={'15vh'} />
    <SearchBox />

    {/* {number.clickedNumber || 0}<br />
            <button onClick={handleClick}>
              Click Me!
            </button> */}
    </div>
    );
  }

export default Home