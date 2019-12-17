import React from "react";

//bootstrap
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

const ListFavorites = props => {

    const style = {
        margin: "10px",
        borderRadius: '2%',
        width: '18rem',

    };


    return (
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'end' }}>
            {props.favorites.map(favorite => (

                <Card style={style} className='text-left text-secondary' key={favorite.name} border="dark">
                    <Card.Header >{favorite.character_name}<Button variant="light" className='float-right text-secondary' size='sm' onClick={() => props.deleteFavorite(favorite.character_id)} >Delete</Button></Card.Header>
                    <Card.Body>
                        <Card.Text >Height: {favorite.character_height} inches</Card.Text>
                        <Card.Text >Weight: {favorite.character_mass} kg</Card.Text>
                        <Card.Text >Gender: {favorite.character_gender}</Card.Text>
                        <Card.Text >Birth Year: {favorite.character_birth_year}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
export default ListFavorites;