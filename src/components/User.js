const User = (props) =>{
    return(
        <div className="user-cart"> 
            <h2>Name :{props.name}</h2>
            <h3>Location:{props.location}</h3>
            <h3>Age:{props.age}</h3>
        </div>
    );
}

export default User;