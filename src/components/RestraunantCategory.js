import ItemList from "./ItemList";
import { useState } from "react";

const RestraunantCategory = ({ data, showItems, setShowIndex }) => {
    const {title, itemCards} = data?.card?.card;
    //const [showItems, setShowItem] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }

    return (
        // {header accordian}
        <div className="category-card">
           <div className="w-6/12 mx-auto my-4 bg-gray-100 rounded-lg shadow-lg p-4 ">
           <div className="flex justify-between font-bold text-lg items-center">
           <span onClick={handleClick}>{title}({itemCards.length})</span>
           <span>⬇️</span>
        </div>
        
          {showItems && <ItemList items={itemCards}/> }
           </div>
        </div>
    )
   
}

export default RestraunantCategory;