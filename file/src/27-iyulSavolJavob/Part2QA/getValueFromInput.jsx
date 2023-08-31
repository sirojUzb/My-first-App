import React, { Component } from 'react'

export default class GetValueFromInput extends Component {
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
        }
    }
    render() {
        const getValue = (event) => {
            console.log(event.target.value);
        };
        return(
            <div>
                <input onChange={getValue}/>
            </div>
        )
    }
}
