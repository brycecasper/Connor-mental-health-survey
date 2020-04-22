import React, {useState} from 'react';

import axios from 'axios';

const Auth = props => {
    const [passwordInput, setPasswordInput] = useState('');

    const auth = () => {
        axios.post('/auth/password', {password: passwordInput})
        .then(() => props.history.push('/secure'))
        .catch(err => console.log(err));
    }

    return (
        <main className='auth-main'>

        <input type='text' placeholder='Password' 
            value={passwordInput} onChange={e => setPasswordInput(e.target.value)}
        />
        <button className='auth-button' onClick={() => auth()}>Login</button>

        </main>
    )
}

export default Auth;