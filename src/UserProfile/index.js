import { useAtom } from 'jotai';
import React from 'react';
import { jwtAtom } from '../App';
import jwt_decode from "jwt-decode";
import { Container, Row } from 'react-bootstrap';
const Profile = () => {
    const [jwt,] = useAtom(jwtAtom);
    function getRolesFromJWT(){
    if(jwt){
      const decodedJwt = jwt_decode(jwt);
      return JSON.stringify(decodedJwt.authorities);
    }
  }


    return (
       
        <Container style={{ paddingBottom: 400 , paddingTop: 30 }}>
            <Row>
                <div>
                    Hello {jwt_decode(jwt).sub}
                </div>
                <div>
                    Role {getRolesFromJWT().slice(15,-3)}
                </div>
            </Row>
        </Container>
    );
};

export default Profile;