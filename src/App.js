import React, { Component} from 'react';
import User from './container/User';

class App extends Component{

    render() {
        return (
            <section className="py-5 container">
                <User/>
            </section>
            
        );
    }
}

export default App;