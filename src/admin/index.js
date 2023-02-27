import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { jwtAtom } from '../App';
import jwt_decode from "jwt-decode";

const Admin = () => {

    const [jwt,] = useAtom(jwtAtom);
   
    

   
    return (
        <div>
            <div>
                email is {jwt_decode(jwt).sub}
            </div>
            
        </div>
    );
};

export default Admin;