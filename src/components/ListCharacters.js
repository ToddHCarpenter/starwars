import React from "react";
import axios from "axios";
import Accord from './Accord';

//bootstrap
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion'


const Characters = props => {

  const style = {
    margin: "10px",
    borderRadius: '2%',
    width: '18rem',
    flexGrow: '1'
  };


  const save = (character) => {
    axios({
      method: 'post',
      url: '/add',
      data: {
        name: character.name,
        height: character.height,
        gender: character.gender,
        birth: character.birth_year,
        mass: character.mass
      }
    });
  }

  return (
    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'end' }}>
      {props.getCharacter.map(character => (
        <Accordion >
          <Card style={style} className='text-left text-secondary' border="dark">
            {console.log(character.id)}
            <Card.Header key={character.name}>{character.name}</Card.Header>

            <Card.Body>
              <Card.Text >Height: {character.height} inches</Card.Text>
              <Card.Text >Gender: {character.gender}</Card.Text>

            </Card.Body>
            <Accord character={character} save={save} />
          </Card>
        </Accordion>
      ))}
    </div>
  );
};
export default Characters;
