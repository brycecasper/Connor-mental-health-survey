import React, {useState} from 'react';
import axios from 'axios';

const Security = props => {
    const [answerInput, setAnswerInput] = useState('');

    const clearance = () => {
        axios.post('/api/check-answer', {securityAnswer: answerInput})
        .then(res => {
            if(res.status === 200){
                props.history.push('/survey')
            }
        })
        .catch(() => window.alert('Nice try robot'));
    }

    return(
        <main className='security-main'>

        <div className='flex-security'>

            <p className='p-two'>Security question to prevent bots:</p>

            <p>What is the frozen water that falls from the sky during winter called?</p>

            <input className='input-one' type='text' value={answerInput} placeholder='Answer'
                onChange={(e) => setAnswerInput(e.target.value)}
            />

            <button className='security-button' onClick={() => clearance()}>Submit</button>

        </div>

        </main>
    );
}

export default Security;