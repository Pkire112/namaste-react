import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestraunantMenu from "../utils/useRestraunantMenu";
import RestraunantCategory from "./RestraunantCategory";

const RestraunantMenu = () => {
// const [resInfo, setResInfo]= useState(null);
// const { resId } = useParams();
// console.log("resId",resId);

//     useEffect(()=>{
//         fetchMenu();
//     },[]);

//     const fetchMenu = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
//         console.log("data",data);
//         const json = await data.json();
//         console.log("menu",json);
//         setResInfo(json.data);
        
//     };
    const { resId } = useParams();
    const resInfo = useRestraunantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    if (resInfo === null) return <ShimmerUI />;
   const {name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
   const { itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

//    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.filter();
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold my-6 text-2xl"> {cuisines.join(",")} - {costForTwoMessage}</p>
                {categories.map((item,index) => (
                    //Controlled component
                    <RestraunantCategory data={item} showItems={index === showIndex ? true :false }
                    setShowIndex={()=>setShowIndex(index)}/>
                ))}
        </div>

    );
};

export default RestraunantMenu;