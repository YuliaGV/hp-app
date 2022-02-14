import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => { 
        navigate('/books', {
        replace: true
        });
    }

    return (
        <div>
            <Container style={{ marginTop: '2rem', textAlign: 'center', color:'white' }}>
                <h1>Bienvenid@ muggle</h1>
                <p>Esta es una pequeña Wiki dedicada al mundo de Harry Potter, consumiendo la API creada por <a href="https://github.com/fedeperin/harry-potter-api" target='_blank'>Fede Perin</a></p>
                <Button variant="primary" onClick={handleLogin}>
                    Alohomora
                </Button>
            </Container>
        </div>   
    )
}