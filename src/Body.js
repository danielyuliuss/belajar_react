import React from 'react';

class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            body : "Ini adalah isi body pertamaku",
            subBody : "Ini adalah sub-body pertamaku"
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.body}</p>
                <p>{this.state.subBody}</p>
                <p><button onClick={this.ubahState}>Ubah State</button></p>
            </div>
        )
    }

    ubahState = () =>{
        this.setState({body:"bodynya saya ubah pakai state di"});

    }

    // ubahState(){
    //     this.setState({body:"bodynya saya ubah pakai state 3"});
    // }
}

export default Body;