import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'


export const Spells= () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const fetchSpells = async () => {
            const response = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/hechizos');
            const data = await response.json();
            setSpells(data);
        }
        fetchSpells();
    }, []);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };


    return (
        <div>
            <Container style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                
                <h1 className="mb-4">HECHIZOS</h1>


                { spells.length > 0 ? (
                    <Table  bordered hover size="sm" style={{ width: '100%', backgroundColor: '#ffffff', maxWidth: '800px', margin: 'auto' }}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Uso</th>
                            </tr>
                        </thead>
                        <tbody>
                            { spells.map(spell => (
                                <tr>
                                    <td>{spell.hechizo}</td>
                                    <td>{spell.uso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Cargando hechizos...</p>
                )}

                <br />

            </Container>
        </div>
    )
}
