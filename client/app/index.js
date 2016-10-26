/* 
* @Author: zjy
* @Date:   2016-10-20 15:41:08
* @Last Modified by:   zjy
* @Last Modified time: 2016-10-24 11:26:19
*/

'use strict';
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import LocalDB from 'localDb';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TodoHeader from '../../client/app/todolist/todoHeader.js';
import TodoMain from '../../client/app/todolist/TodoMain.js';

class FirstComponent extends Component{
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
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar title="hello"></AppBar>
                    <TodoHeader addTodos={this.addTodos.bind(this)}></TodoHeader>
                    <TodoMain onStateChange={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodos.bind(this)} todolist={this.state.todos}/>
                </div>
            </MuiThemeProvider>);
    }
}
ReactDOM.render(<FirstComponent />,document.getElementById('main-container'));