import React from 'react';

const Opening = props => {

    const begin = () => {
        props.history.push('/survey');
    }

    return(
        <main className='opening-main'>

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