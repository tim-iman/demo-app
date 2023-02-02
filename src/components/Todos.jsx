import React, { Component } from "react";

export default class Todos extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            actualTodo: "" 
        }
    }

    // CRUD

    render(){
        return(
            <>
            <h1>Todos</h1>
            <ul>
                {
                    this.state.todos.map((todo,index)=>{
                        return(<li key={todo+index}>{todo}<button>Done</button>
                        <button >X</button>
                        </li>)
                    })
                }
            </ul>
            <input type="text" className="input"placeholder="Add your task" value={this.state.actualTodo} onChange={(e) =>{this.setState({actualTodo:e.target.value})}} />
            <br />
            <br />
            <button onClick={()=>{
                this.setState({todos:[this.state.actualTodo,...this.state.todos]})
                this.setState({actualTodo:""})
            }}>Add</button>
            </>
        )
    }
}