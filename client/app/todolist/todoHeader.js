/* 
* @Author: zjy
* @Date:   2016-10-21 11:06:50
* @Last Modified by:   zjy
* @Last Modified time: 2016-10-21 14:44:00
*/

'use strict';
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

class TodoHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:""
        };
    }
    valueChange(e){
        this.setState({
            value:e.target.value
        });
    }
    onKeyUp(e){
        if(e.keyCode == 13){
            this.handler();
        }
    }
    handler(){
        if(this.state.value){
            this.props.addTodos({
                text:this.state.value,
                isDone:false
            });
        }
        this.state.value = "";
    }
    render(){
        return(<TextField 
            value={this.state.value||""}
            onKeyUp={this.onKeyUp.bind(this)}
            onChange={this.valueChange.bind(this)}
            onBlur={this.handler.bind(this)}
            hintText="What's your task?"
        ></TextField>);
    }
}
export default TodoHeader;