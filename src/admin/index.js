import React from 'react';
import { useLocalState } from '../util/useLocalStorage';

const Admin = () => {
    const [ jwt, setJwt] = useLocalState("","jwt") 
    return (
        <div>
            {/* <div>Jwt is: {jwt}</div> */}
            <div>
                jwt is {jwt}
            </div>
        </div>
    );
};

export default Admin;