import RestraunantCart, {withPromotedLabel} from "./RestraunantCart";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import { Spinner } from "react-bootstrap";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Body = () => {

    // const [listofRestraunants, setListofRestraunants] = useState(resList);
    const [listofRestraunants, setListofRestraunants] = useState([]);
    const [filteredRestro, setFilteredRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestraunantCartLabel = withPromotedLabel(RestraunantCart);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log("body:=",json);
        setListofRestraunants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const {setUserInfo, loggedInUser} = useContext(UserContext);

    // if (listofRestraunants.length === 0) {
    //     return <ShimmerUI />;
    // };
    // use Terinary operator to show shimmer UI or actual data

    const isOnline = useOnlineStatus();
    if (!isOnline) {
        return <h1>Looks like you are offline!! check your internet connection</h1>;
    };
    return  listofRestraunants.length ===0?<ShimmerUI /> :  (
        <div className="body">
                <div className="filter-btn flex items-center" >
                    <div className="search p-4 m-4">
                     <input className="border border-solid border-black" type="text" placeholder="Search Restraunants" value={searchText} onChange ={(e)=>{
                        setSearchText(e.target.value);
                     }}/>
                     <button className="search-btn px-4 bg-green-100 m-4 h-8 rounded-lg" onClick={()=>{

                    //fILTER THE RESTRAUNANT CARD AND UPDATE THE UI
                    const searchRestraunant = listofRestraunants.filter((restraunant) =>
                        restraunant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestro(searchRestraunant);
                    }}>Search</button>
                    </div>
                    <div className="">
                        <label>UserName:</label> 
                        <input className="border border-black p-2 " value={loggedInUser} onChange={(e) =>setUserInfo(e.target.value)}/>
                    </div>
                <button className="butn px-4 py-2 m-4 bg-green-100 h-8 rounded-lg" onClick={() => {
                    const fiterList = listofRestraunants.filter((restraunant) => 
                      restraunant.info.avgRating > 4
                    );
                    setListofRestraunants(fiterList);
                }}> Top Rated Restraunants</button>
                </div>
            <div className="flex flex-wrap justify-center">
             {filteredRestro.map(restraunant => 
             <Link key={restraunant.info.id} to={"/restaurants/"+restraunant.info.id}>
                {/*aggregatedDiscountInfoV3?.discountTag*/}
                {restraunant.info?.aggregatedDiscountInfoV3?.discountTag ?(<RestraunantCartLabel resData={restraunant} />) :
             (<RestraunantCart resData={restraunant}/>)}
             </Link>)}
            </div>
        </div>
    )
};
export default Body;