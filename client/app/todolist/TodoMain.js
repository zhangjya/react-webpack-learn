/* 
* @Author: zjy
* @Date:   2016-10-21 11:17:45
* @Last Modified by:   zjy
* @Last Modified time: 2016-11-03 11:16:51
*/

'use strict';
import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Divider from 'material-ui/Divider';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';

class TodoMain extends Component{
    render(){
        let todolist = this.props.todolist,
            onStateChange = this.props.onStateChange,
            style = {'flex':1,'overflow':'auto'},
            options = {'mouseWheel': true,'freeScroll': true};
        return (<ReactIScroll iScroll={iScroll} style={style} options={options}><List>
                    <Divider/>
                    {todolist.map((todo,index)=>{
                        return  <div><ListItem 
                                    key={index}
                                    leftCheckbox={<Checkbox defaultChecked={todo.isDone} onCheck={(e,checked)=>onStateChange(index,checked)}/>}
                                    rightIconButton={<FlatButton 
                                        onTouchTap={(e)=>this.props.deleteTodo(index)}
                                        style={{'marginTop':'6px'}}
                                        icon={<DeleteIcon/>}/>}
                                    primaryText={todo.text}
                                    ></ListItem><Divider/></div>
                    })}
                </List>
            </ReactIScroll>
        );
    }
}
export default TodoMain;