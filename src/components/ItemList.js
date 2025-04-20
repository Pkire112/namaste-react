import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";

const ItemList=({items}) =>{
    // const {id, name, description, price} = items?.card?.info;
    const dispach = useDispatch();
    const handleItemClick = (item) => {
        //dispatch an action
        dispach(addItem(item));

    }
    return(
        <div>
           
                {items.map((item) => (
                    <div key={item?.card?.info.id} className="m-2 p-2 bg-gray-100 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12 p-4">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span className="py-2">-₹{item.card.info.price ? item?.card?.info?.price /100 :item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                            <p className="text-xs"> {item?.card?.info?.description}</p>
                        </div>
        
                        <div className="w-3/12 p-4">
                            <div className="absolute ">
                                <button className="p-2 mx-2 rounderd-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold border border-gray-400 shadow-sm"
                                onClick={() => handleItemClick(item)}>
                                    Add +
                                </button>
                             </div>
                            <div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>  </div>
                       </div>
                    </div>
                    
                ))}
        </div>
    )
};
export default ItemList;