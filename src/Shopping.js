import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utility/cartSlice";
const Shopping=()=>{
    const [state, setstate] = useState([]);
    const dispatch=useDispatch()
    const fetchdata=async()=>{
        const data =await fetch('http://3.7.252.58:4001/product/getAllProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8'
            },
            // body: '{\n"limit":100,\n"page":0,\n"search":""\n}',
            body: JSON.stringify({
                'limit': 100,
                'page': 0,
                'search': ''
            })
        });


        const json=await data.json()
        console.log(json)
        setstate(json)
        
    }
    useEffect(() => {
        fetchdata()
       
    }, []);
    const clickhandle= (item) => {
        dispatch(addItem(item));
      };
    return (
        <div className="item-list">
            {state.map((item,index)=>{

                return(
                   <div className="item">

                  {item.imageUrl &&<>
                    <div>{item.name}</div>
                     <div className="add-img">
                     <button onClick={()=>{
                        clickhandle(item)
                     }}>Add</button>
                     <img src={item.imageUrl} alt="Sorry" />
                     </div>
                     </>}  
                    
                    
                    
                    </div>
                    
                )

            })}
        </div>
    )
}
export default Shopping