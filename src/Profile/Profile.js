import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup } from 'react-bootstrap';


function Profile({Fullname,bio,profession,children,handelName}) {
  return (
    <div>
        <ListGroup as="ol" numbered>
  <ListGroup.Item as="li">{Fullname}</ListGroup.Item>
  <ListGroup.Item as="li">{bio}</ListGroup.Item>
  <ListGroup.Item as="li">{profession}</ListGroup.Item>
  <Button onClick={handelName}>click</Button>g
</ListGroup>
<img src={children} alt='feuille' />
    </div>
  )
}

export default Profile