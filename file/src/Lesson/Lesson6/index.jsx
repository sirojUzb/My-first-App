import React, { Component } from 'react';
import Practice from './practice';

export default class Lesson6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Muhammad", surname: "Khamrayev"},
                {id: 2, name: "Azambek", surname: "Rahmatov"},
                {id: 3, name: "Husan", surname: "Bo'tayev"},
            ],
            selectData: {},
            showSelectInput: false,
        };
    }
  render() {
    const onDelete=(id) => {
        this.setState({data: this.state.data.filter((value)=>{
            return value.id !== id;
            }),
        });
    }
    const onSave = () => {
        this.setState({
            data: this.state.data.map((value) => {
                return value.id === this.state.selectData.id ? this.state.selectData : value;
            }),
        })
    };
    return (
      <div 
        style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
        }}
    >
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{this.state.data.map((value) => {
                return(
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{this.state.showSelectInput && value.id === this.state.selectData.id ? <input value={this.state.selectData.name} onChange={(e)=>{
                            this.setState({
                                selectData: {
                                    id: this.state.selectData.id,
                                    name: e.target.value,
                                    surname: this.state.selectData.surname,
                                }
                            })
                        }}/> : value.name}</td>
                        <td>{this.state.showSelectInput && value.id === this.state.selectData.id ? <input value={this.state.selectData.surname} onChange={(e)=>{
                            this.setState({
                                selectData: {
                                    id: this.state.selectData.id,
                                    name: this.state.selectData.name,
                                    surname: e.target.value,
                                }
                            })
                        }}/> : value.surname}</td>
                        <td>
                            {value.id === this.state.selectData.id ? (
                            <button
                                onClick={() => {
                                    onSave();
                                    this.setState({
                                        showSelectInput: false,
                                        selectData: {},
                                    });
                                }}
                                >
                                    Save
                                </button>) : (<button onClick={() => {
                                this.setState({
                                    selectData: value, 
                                    showSelectInput: true,
                                });
                            }}
                            >
                                Edit
                            </button>
                            )}
                                                     
                            <button onClick={()=>{
                                onDelete(value.id);
                            }}>Delete</button>
                        </td>
                    </tr>);
            })}
            </tbody>
        </table>
        <div>
            <input placeholder='Name'/>
            <input placeholder='Surname'/>
            <button>Add</button>
        </div>
        <Practice />
      </div>
    )
  }
}
