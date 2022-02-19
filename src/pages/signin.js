import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from "../container/Header"
import FooterContainer from "../container/Footer"
import Form from "../components/form/Form"
import * as ROUTES from '../constant/routes'

function Singin() {
    const history = useNavigate()
    const { firebase } = useContext(FirebaseContext) // get firebase from FirebaseContext passed from Index
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const isInvalid = password === '' || emailAddress === '';

    const handlesignin = (event) =>{
        event.preventDefault()

        // firebase work here!
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                //push to borwse page
                history(ROUTES.BROWSE)
            })
            .catch((error) =>{
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })

    }

    return ( 
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handlesignin} method="POST">
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Button disabled={isInvalid} type="submit" onClick={handlesignin}>Sign In</Form.Button>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google's reCAPTCHA to ensure you're not a bot. Learn more</Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer/>
        </>
     );
}

export default Singin;