/* 
* @Author: zjy
* @Date:   2016-10-21 11:17:45
* @Last Modified by:   zjy
* @Last Modified time: 2016-10-25 17:10:43
*/

'use strict';
import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Divider from 'material-ui/Divider';

class TodoMain extends Component{
    render(){
        let todolist = this.props.todolist;
        let onStateChange = this.props.onStateChange;
        return (
            <List>
                <Divider/>
                {todolist.map((todo,index)=>{
                    return  <div><ListItem 
                                key={index}
                                leftCheckbox={<Checkbox defaultChecked={todo.isDone} onCheck={(e,checked)=>onStateChange(index,checked)}/>}
                                rightIconButton={<FlatButton 
                                    onClick={(e)=>this.props.deleteTodo(index)}
                                    style={{'marginTop':'6px'}}
                                    icon={<DeleteIcon/>}/>}
                                primaryText={todo.text}
                                ></ListItem><Divider/></div>
                })}
            </List>
        );
    }
}
export default TodoMain;