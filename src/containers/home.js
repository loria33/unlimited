import React, {useEffect} from 'react'; 
import { useSelector, useDispatch } from "react-redux";
import {incrementNumber,} from "../_actions/number";

function Home() {

  useEffect(() => {
    console.log('Home rendered');
  }, []);

  const dispatch = useDispatch();
  const number = useSelector(state => state.number);

  const handleClick = () => {
    dispatch(incrementNumber((number && number.clickedNumber) || 0))
  }

    return (
    <div>
    <h2>Check</h2>
    
    {number.clickedNumber || 0}<br />
            <button onClick={handleClick}>
              Click Me!
            </button>
    </div>
    );
  }

export default Home