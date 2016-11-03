/* 
* @Author: zjy
* @Date:   2016-10-20 15:41:08
* @Last Modified by:   zjy
* @Last Modified time: 2016-11-03 10:44:31
*/

'use strict';
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import LocalDB from 'localDb';
import AppBar from 'material-ui/AppBar';
import TodoHeader from './todoHeader.js';
import TodoMain from './TodoMain.js';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.db = new LocalDB("todoList","Object");
        this.state = {
            todos:this.db.get("todos")||[]
        };
    }
    addTodos(item){
        this.state.todos.push(item);
        this.db.set("todos",this.state.todos);
        this.setState({
            todos:this.db.get("todos")
        });
    }
    changeTodoState(index,state){
        this.state.todos[index].isDone = state;
        this.db.set("todos",this.state.todos);
    }
    deleteTodos(index){
        this.state.todos.splice(index,1);
        this.setState({todos:this.state.todos});
        this.db.set("todos",this.state.todos);
    }
    render(){
        let style = {'height': '100%',
                    'width': '100%',
                    'display': 'flex',
                    'flex-direction': 'column',
                    'position': 'absolute'
        };
        return(
            <div style={style}>
                <AppBar title="hello"></AppBar>
                <TodoHeader addTodos={this.addTodos.bind(this)}></TodoHeader>
                <TodoMain onStateChange={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodos.bind(this)} todolist={this.state.todos}/>
            </div>
        );
    }
}
export default TodoList;