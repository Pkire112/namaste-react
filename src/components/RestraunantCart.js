import { CDN_URL } from "../utils/constants";

const RestraunantCart = (props) => {
    const{resData} = props;
    // destructruing the data more
    const {name, cuisines, avgRating, costForTwo, sla} = resData.info;
    return(
    <div className="w-[250px] p-4 m-4 bg-gray-50 hover:bg-gray-400" >
        <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
        {/* <h3> {resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating}</h4>
         <h4> {resData.info.costForTwo}</h4> */}
         <h3 className="font-bold text-lg"> {name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>

    </div>)
};

// HIGHER ORDER COMPONENTS
//input - RestraunantCart output - new RestraunantCart with promoted label

export const withPromotedLabel = (RestraunantCart)=>{
    return(props) =>{
        return(
            <div className="promoted-label">
                <label className="absolute bg-gray-600 text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestraunantCart {...props}/>
            </div>
        );
    };
}
export default RestraunantCart;