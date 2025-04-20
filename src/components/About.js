import UserClass from './UserClass';
import User from './User';
import React from 'react';
import UserContext from '../utils/userContext';

class About extends React.Component{

    constructor(props) {
        super(props);
        console.log("Constructor Parent called");
        this.state = {
            count : 0,
        };
    }
    componentDidMount() {
        console.log("Component Parent mounted");
    }
    render(){
        console.log("Constructor Render called");
        return (
            <div>
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            {/* <User name="John Doe" age={30} location="Bangalore" /> */}
            <div>
                <UserContext.Consumer>

                    {({ loggedInUser }) => <h1 className="font-bold text-2xl">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name="John Doe" age={30} location="US" />
            </div>
        );

    }
}
// const About = () => {
//     return (
//         <div>
//         <h1>About Us</h1>
//         <p>This is the about page of our application.</p>
//         {/* <User name="John Doe" age={30} location="Bangalore" /> */}
//         <UserClass name="John Doe" age={30} location="Bangalore" />
//         </div>
//     );
// };
export default About;