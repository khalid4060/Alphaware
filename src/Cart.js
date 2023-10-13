import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { clearCart ,removeItem} from "./utility/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

    return (
      <div>
        <h1>cart</h1>
       
        {cartItem.map((item,index)=>{

return(
   <div className="item">

  {item.imageUrl &&<>
    <div>{item.name}</div>
     <div className="add-img">
     <button onClick={()=>{
        dispatch(removeItem(index))
     }}>Remove</button>
     <img src={item.imageUrl} alt="Sorry" />
     </div>
     </>}  
    
    
    
    </div>
    
)

})}
 <button onClick={() => {
          dispatch(clearCart())
          
        }}>Clear</button>
      </div>
    );
}
export default Cart