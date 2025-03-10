import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

/**
 * GoogleSignup component allows users to sign up or sign in using their email and password or Google account.
 * 
 * @component
 * @example
 * return (
 *   <GoogleSignup />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @function handleGoogleSignup
 * @description Handles sign up with Google using Firebase authentication.
 * 
 * @function handleSignout
 * @description Handles user sign out using Firebase authentication.
 * 
 * @function handleSignup
 * @description Handles user sign up with email and password using Firebase authentication.
 * 
 * @function handleSignin
 * @description Handles user sign in with email and password using Firebase authentication.
 * 
 * @state {string} email - The email input value.
 * @state {string} password - The password input value.
 * @state {object|null} user - The authenticated user object or null if not authenticated.
 * @state {string|null} error - The error message or null if no error.
 */
const GoogleSignup = () => {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");
    
    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            setEmail(result.user.email);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleSignout = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setEmail("");
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setUser(userCredentials.user);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setUser(userCredentials.user);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    return (
        <>
            <Box>
                {user ? (
                    <Box>
                        
                        <Text fontSize="xl">Welcome, {user.email}</Text>
                        <Button colorScheme="teal" onClick={handleSignout}>Sign out</Button>
                    </Box>
                ) : (
                    <Box>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button colorScheme="teal" onClick={handleSignup}>Sign up</Button>
                        <Button colorScheme="teal" onClick={handleSignin}>Sign in</Button>
                        <Button colorScheme="teal" onClick={handleGoogleSignup}>Sign up with Google</Button>
                    </Box>
                )}
            </Box>
            {error && <Text color="red.500">{error}</Text>}
        </>
    );
}

export default GoogleSignup;
