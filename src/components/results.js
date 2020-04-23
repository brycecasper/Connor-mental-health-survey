import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const Results = () => {
    const [resultsList, setResultsList] = useState([]);

    useEffect(() => {
        getResults();
    }, [])

    const getResults = () => {
        axios.get('/api/results-list')
        .then(res => {
            console.log(res)
            setResultsList(res.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <main className='results-main'>

        <section className='flex-results'>
        {
            resultsList.map((e, i) => (
                <div key={i}>
                    <p>{e.one}</p>
                    <p>{e.two}</p>
                    <p>{e.three}</p>
                    <p>{e.four}</p>
                    <p>{e.five}</p>
                    <p>{e.six}</p>
                    <p>{e.seven}</p>
                    <p>{e.eight}</p>
                    <p>{e.nine}</p>
                    <p>{e.ten}</p>
                    <p>{e.eleven}</p>
                    <p>{e.twelve}</p>
                <div className='bar-seperation'></div>
                </div>
            ))
        }
        </section>

        </main>
    )
}

export default withRouter(Results);

// import React, {Component} from 'react';
// import axios from 'axios';
// import {withRouter} from 'react-router-dom';

// class Results extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             results: []
//         }
//         this.componentDidMount = this.componentDidMount.bind(this);
//     }

//     componentDidMount(){
//         this.getResults();
//     }

//     getResults = () => {
//         axios.get('/api/results-list')
//         .then(res => this.setState({results: res.data}))
//         .catch(err => console.log(err));
//     }

//     render(){
//         return(
//             <main>

//             <section>
//             {
//                 this.state.results.map((e, i) => (
//                     <div key={i}>
//                         <p>{e.one}</p>
//                         <p>{e.two}</p>
//                         <p>{e.three}</p>
//                         <p>{e.four}</p>
//                         <p>{e.five}</p>
//                         <p>{e.six}</p>
//                         <p>{e.seven}</p>
//                         <p>{e.eight}</p>
//                         <p>{e.nine}</p>
//                         <p>{e.ten}</p>
//                         <p>{e.eleven}</p>
//                         <p>{e.twelve}</p>
//                     </div>
//                 ))
//             }
//             </section>

//             </main>
//         )
//     }
// }

// export default withRouter(Results);