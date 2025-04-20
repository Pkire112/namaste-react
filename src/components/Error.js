import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div className="error">
            <h2>Oooops!!!</h2>
            <p>Something went wrong</p>
            <p>{err.status + " : " + err.statusText}</p>
            <p>{err.data}</p>
        </div>
    )
};
export default Error;