import { RESTRAUNANT_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const useRestraunantMenu = (resId) => {
    const [resInfo, setResInfo]= useState(null);
    
        useEffect(()=>{
            fetchMenu();
        },[]);
    
        const fetchMenu = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            setResInfo(json.data);
            
        };

    return resInfo;
}
export default useRestraunantMenu;