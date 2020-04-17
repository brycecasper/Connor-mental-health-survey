import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Survey extends Component {
    constructor(){
        super();
        this.state = {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            ten: '',
            eleven: '',
            twelve: ''
        }
    }

    submitAnswers = () => {
        const {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve} = this.state;
        axios.post('/api/results', {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <main className='survey-main'>

                <section className='survey-box'>

                    <p>What is your age?</p>
                    <textarea className='answer' type='text' value={this.state.one} name='one' 
                        onChange={this.handleChange}></textarea>

                    <p>How often do you listen to music?</p>
                    <textarea className='answer' value={this.state.two} name='two' 
                        onChange={this.handleChange}></textarea>

                    <p>How much time a day do you spend listening to music?</p>
                    <textarea className='answer' value={this.state.three} name='three' 
                        onChange={this.handleChange}></textarea>

                    <p>Why do you listen to music and why is it importanat to you?</p>
                    <textarea className='answer' value={this.state.four} name='four' 
                        onChange={this.handleChange}></textarea>

                    <p>Do you listen to music to take your mind off things? If so why?</p>
                    <textarea className='answer' value={this.state.five} name='five' 
                        onChange={this.handleChange}></textarea>

                    <p>Do you feel comfortable being alone in silence? If so why?</p>
                    <textarea className='answer' value={this.state.six} name='six' 
                        onChange={this.handleChange}></textarea>

                    <p>Do you feel uncomfortable being alone with your thoughts? If so why?</p>
                    <textarea className='answer' value={this.state.seven} name='seven' 
                        onChange={this.handleChange}></textarea>

                    <p>On a scale from 1-10 what would you rate your anxiety levels? (10 being the highest)</p>
                    <textarea className='answer' value={this.state.eight} name='eight' 
                        onChange={this.handleChange}></textarea>

                    <p>On a scale from 1-10 how bad do you suffer from depression? (10 being the highest)</p>
                    <textarea className='answer' value={this.state.nine} name='nine' 
                        onChange={this.handleChange}></textarea>

                    <p>Do you feel stuck or without a purpose in life?</p>
                    <textarea className='answer' value={this.state.ten} name='ten' 
                        onChange={this.handleChange}></textarea>

                    <p>Do you think about your purpose in life daily?</p>
                    <textarea className='answer' value={this.state.eleven} name='eleven' 
                        onChange={this.handleChange}></textarea>

                    <p>As an individual do you feel whole and complete or dull and empty?</p>
                    <textarea className='answer' value={this.state.twelve} name='twelve' 
                        onChange={this.handleChange}></textarea>

                <Link to='/closing'>
                    <button className='survey-button' onClick={() => this.submitAnswers()}>Submit</button>
                </Link>

                </section>

            </main>
        )
    }
}

export default Survey;