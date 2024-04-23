import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData()
    console.log(users);

    return (
        <div className="text-center border-2 rounded-xl p-2 border-green-600">
            <h2 className=" p-2 text-purple-800 font-bold text-xl">Our All {users.length} Are very Vodro And good</h2>

            <div className="
         grid md:grid-cols-3 text-left sm:text-center md:text-left lg:text-left sm:grid-cols-1 lg:grid-cols-3
          gap-4 ">

                {
                    users.map( user=><User key={user.id} user={user}
                    
                    ></User>)
                }

            </div>

        </div>
    );
};

export default Users;