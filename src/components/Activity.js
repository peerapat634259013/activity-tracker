import React from 'react'
import { useDispatch } from 'react-redux'; // ประกาศเรียกใช้
const Activity = ({id, name, duration}) => {
    const dispatch =  useDispatch(); //สร้างฟังก์ชั่น 
    const deleteActivity = () =>{
        dispatch(
            {
                type:"DELETE_ACTIVITY",
                payload:{
                    id: id,
                },
            }
        )
    }
    
  return (
    <div className='section'>
        <p>
            <b>Activity</b> {name}, {""}
            <b>Duration</b> {duration}
            <button onClick={deleteActivity}>Delete</button>
        </p>
    </div>
  );
}

export default Activity;