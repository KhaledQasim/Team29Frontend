import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { Atomlogged, jwtAtom } from '../App';

function Logout  ()  {
    const [,setJwt] = useAtom(jwtAtom);
    const [,setIsLogged] = useAtom(Atomlogged);
    useEffect(() => {
        
        fetch("/auth/logout").then((response) => {
            
            if (response.status === 200){
              setJwt(null);
              setIsLogged(false);
            }
          })
    }, [setIsLogged, setJwt])
    
    return (
        <div>
        Your JWT has expired or is Invalid, please re-login.    
        </div>
    );
};

export default Logout;