import React, {useState} from 'react';

const Opening = props => {
    const [toggle, setToggle] = useState(true);
    const [passwordInput, setPasswordInput] = useState('');

    const begin = () => {
        props.history.push('/survey');
    }

    const results = () => {
        if(passwordInput === 'Development101!'){
            return props.history.push('/results')
        } else {
            return window.alert('Incorrect password')
        }
    }

    return(
        <main className='opening-main'>

        <section className='admin'>
            {
                toggle
                ?
                <div onClick={() => setToggle(!toggle)}>Admin</div>
                :
                <div>
                    <div onClick={() => setToggle(!toggle)}>Close</div>
                <input type='password' 
                    value={passwordInput} onChange={e => setPasswordInput(e.target.value)}
                />
                <button onClick={() => results()} className='auth-button'>Submit</button>
                </div>
            }
        </section>

        <section className='opening-box'>
            <div className='p-one'>
            <header>
                Thank you for taking the time to participate in this psychological survey and showing your support. The purpose of this study is to see how our mental health and sense of personal direction is affected by music. I ask that you answer the 12 questions with as much accuracy as you can with COMPLETE honesty. All survey submissions are 100% ANONYMOUS.
            </header>
            <p>Thank you.</p>

            <button className='begin-button' onClick={() => begin()}>Begin</button>
            </div>
        </section>

        </main>
    )

}

export default Opening;