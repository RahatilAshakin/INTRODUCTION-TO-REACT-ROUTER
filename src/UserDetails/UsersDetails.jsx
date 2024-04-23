import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {

    const user = useLoaderData();

    const {name, website}=user


    return (
        <div className="text-center border-2 border-yellow-300">
            <h2>User Details: {name}</h2>
            <p>Visit me: {website}</p>
        </div>
    );
};

export default UsersDetails;