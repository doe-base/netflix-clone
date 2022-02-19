import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from "../container/Header"
import FooterContainer from "../container/Footer"
import Form from "../components/form/Form"
import * as ROUTES from '../constant/routes'

function Singup() {
    const history = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    
    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handlesignup = (event) =>{
        event.preventDefault()

        // firebase work here!
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1, 
                })
                .then(() => {
                    history(ROUTES.BROWSE)
                })
            .catch((error) =>{
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
        )

    }

    return ( 
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handlesignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />

                        <Form.Input 
                            placeholder="Email Address "
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
                        <Form.Button disabled={isInvalid} type="submit" onClick={handlesignup}>Sign In</Form.Button>
                    </Form.Base>

                    <Form.Text>
                       Already have an account <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google's reCAPTCHA to ensure you're not a bot. Learn more</Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer/>
        </>
     );
}

export default Singup;