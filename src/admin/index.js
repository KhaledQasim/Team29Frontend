import React from 'react';
import { useAtom } from 'jotai';
import { jwtAtom } from '../App';

const Admin = () => {
    
    const [jwt , setJwt] = useAtom(jwtAtom);
    const clearJWT = () => {
        setJwt("")       
    }
    return (
        <div>
            {/* <div>Jwt is: {jwt}</div> */}
            <div>
                jwt is {jwt}
            </div>
            <button onClick={clearJWT}>clear jwt</button>
        </div>
    );
};

export default Admin;