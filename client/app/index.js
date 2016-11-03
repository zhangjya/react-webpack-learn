/* 
* @Author: zjy
* @Date:   2016-10-20 15:41:08
* @Last Modified by:   zjy
* @Last Modified time: 2016-11-02 15:49:40
*/

'use strict';
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from './todolist/';

class MyComponent extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <TodoList />
            </MuiThemeProvider>);
    }
}
ReactDOM.render(<MyComponent />,document.getElementById('main-container'));