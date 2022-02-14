import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap'

export const Books = () => {

    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');


    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/libros');
            const data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    }, []);


    return (
        <div>
            <Container style={{  marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>

                <h1 className="mb-4">LIBROS</h1>

                { books.length > 0 ? (
                    <Row>
                        { books.map(book => (   
                            <Col md={4} key={book.id}>
                                <Card style={{ height: '250px', marginBottom: '0.5rem'} }>
                                    <Card.Title style={{ paddingTop: '1rem', color: '#763626' }}>{book.libro}</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            <b>Título original:</b> {book.titulo_original}
                                            <br />
                                            <b>Autor:</b> {book.autora}
                                            <br />
                                            <b>Fecha de publicación:</b> {book.fecha_de_lanzamiento}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button className="btn btn-description" onClick={() => {
                                            setShow(true);
                                            setDescription(book.descripcion);
                                        }}>
                                            Ver sinopsis
                                        </Button>
                                    </Card.Footer>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p>Cargando libros...</p>
                )} 
                 <br />     
            </Container>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Descripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                </Modal.Body>
            </Modal>
        </div>
    )
}
