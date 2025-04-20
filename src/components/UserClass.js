 import React from 'react';
 class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.name,"cosntructor called");
        this.state = {
            count : 0,
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"",
            }
        };
    }
    async componentDidMount() {

        //API calls
        const dataApi=await fetch("https://api.github.com/users/Pkire112");
        const json=await dataApi.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }

    render() {
        const { count } = this.state;
        return (
            <div className='user-cart'>
                <img src='{this.state.userInfo.avatar_url}' alt='user' />
                <h2>Name:{this.state.userInfo.name}</h2>
                <p>Location: {this.state.userInfo.location}</p>
                <h2>Count: {count}</h2>
                <button onClick={() => {
                    this.setState({ count: count + 1 });
                }}>Increment Count</button>
            </div>
        );
    }
 }

export default UserClass;