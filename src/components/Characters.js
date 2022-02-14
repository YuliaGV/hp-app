import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Masonry from 'react-masonry-css'

export const Characters = () => {

    
    const navigate = useNavigate();

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
            const data = await response.json();
            setCharacters(data);
        }
        fetchCharacters();
    }, []);


    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const showCharacter = (id) => {
        navigate(`/character/${id}`);
    }

    return (
        <div>
            <Container style={{  marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>

                <h1 className="mb-4">PERSONAJES</h1>

                { characters.length > 0 ? (
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                { characters.map(character => (
                                <Card style={{ backgroundColor: '#f5f5f5'}}>
                                    <Card.Title style={{ paddingTop: '1rem', color: '#763626' }}>{character.personaje}</Card.Title>
                                    <Card.Body>
                                        <img src={character.imagen} alt={character.personaje} className="img-fluid rounded" />
                                    </Card.Body>
                                    <Card.Footer>
                                    <Button className="btn btn-description" onClick={() => showCharacter(character.id)}> Ver personaje </Button>
                                    </Card.Footer>
                                </Card>
                        ))
                }                     
                </Masonry>
                ) : (
                    <p>Cargando personajes...</p>
                )}
                <br />

                
            </Container>
        </div>
        
    )
}
