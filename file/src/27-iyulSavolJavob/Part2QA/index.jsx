import React, { Component } from "react";

export default class Part2QA extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: [
                {
                    name: "Asadbek",
                    surname: "Abduvoitov",
                    password: "12345678",
                    gmail: "asadbek@gmail.com",
                },
                {
                    name: "Muhammad",
                    surname: "Hamrayev",
                    password: "87654321",
                    gmail: "muhammad@gmail.com",
                },
    
            ],
            name: "",
            surname: "",
        };
    }
    render() {
        const getValue = (event) => {
            console.log(event.target.value);
        };
        const getParametr = (name) => {
            console.log(name);
        }
        return(
            <div>

                <br />
                Name: {this.state.name}
                <br />
                Surname: {this.state.surname}
                <br />
                <label>Name: </label>
                <input 
                    onChange={(event)=>{
                        this.setState({name: event.target.value,
                    });
                }} />
                <br />
                <label>Surname:</label>
                <input onChange={(event) => {
                    this.setState({
                        surname: event.target.value,
                    })
                }}/>
                <br />
                <button
                onClick={() => {
                    getParametr("Muhammad");
                }}>
                 Add   
                </button>
            </div>
        )
    }
}
