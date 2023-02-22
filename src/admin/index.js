import React from 'react';
import { useUser } from '../userProvider';


const Admin = () => {
    const user = useUser();
    return (
        <div>
            {/* <div>Jwt is: {jwt}</div> */}
            <div>
                jwt is {user.jwt}
            </div>
        </div>
    );
};

export default Admin;