import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, ListGroup } from 'react-bootstrap'
import gryf_icon from '../img/Gryffindor_Icon.png' 
import huff_icon from '../img/Hufflepuff_Icon.png'
import raven_icon from '../img/Ravenclaw_Icon.png'
import slyth_icon from '../img/Slytherin_Icon.png'


export const Character = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const fetchCharacter = async () => {    
            const response = await fetch(`https://fedeperin-harry-potter-api.herokuapp.com/personajes/${id}`);
            const data = await response.json();
            setCharacter(data);
        }
        fetchCharacter();
    }, [id]);


    return (
        <div>
            <Container style={{ marginTop: '2rem', textAlign: 'center' }}>
                { character.personaje ? (

                    <div className="card-character mb-4 mt-4 mx-auto" key={character.id}>
                        <div className="card-character-head">
                            <h3 className="mb-4">
                                {character.personaje}
                            </h3>
                            {character.casaDeHogwarts === 'Gryffindor' ? <img src={gryf_icon} alt="Gryffindor" className="img-fluid rounded" /> : null}
                            {character.casaDeHogwarts === 'Hufflepuff' ? <img src={huff_icon} alt="Hufflepuff" className="img-fluid rounded" /> : null}
                            {character.casaDeHogwarts === 'Ravenclaw' ? <img src={raven_icon} alt="Ravenclaw" className="img-fluid rounded" /> : null}
                            {character.casaDeHogwarts === 'Slytherin' ? <img src={slyth_icon} alt="Slytherin" className="img-fluid rounded" /> : null}
                        </div>
                        <img src={character.imagen} alt={character.personaje} className="img-fluid mb-4 rounded" />

                        <ListGroup>
                            <ListGroup.Item><strong>Interpretado por:</strong> {character.interpretado_por}</ListGroup.Item>
                            <ListGroup.Item><strong>Casa de Hogwarts:</strong> {character.casaDeHogwarts}</ListGroup.Item>
                            <ListGroup.Item><strong>Hijos:</strong>
                            {character.hijos.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {character.hijos.map(child => (
                                        <li className="list-group-item" key={child}>{child}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No tiene hijos</p>
                            )}
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </div> 
                        
                ):(
                    <p>Cargando personaje....</p>
                )}

            </Container>
        </div>   
    )
}
