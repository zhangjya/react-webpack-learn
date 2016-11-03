/* 
* @Author: zjy
* @Date:   2016-11-02 10:59:29
* @Last Modified by:   zjy
* @Last Modified time: 2016-11-02 15:28:40
*/

'use strict';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
/**
 * 需求： 每个人至少随机到0.01元；
 * 
 */
class BonusView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            total:0,
            number:0,
            bonus:'',
        };
    }
    calculate(){
        let num = this.state.number,
            total = this.state.total*100,
            bonus = '';
        for(let i=1;i<=num;i++){
            if(i<num){
                let maxAmount = total-num+i;
                let randombonus = this.toRandomBonus(maxAmount);
                bonus = bonus + (randombonus/100)+' ';
                total = total-randombonus;
            }else{
                bonus = bonus + (total/100);
            }
        }
        this.setState({
            bonus:bonus,
        });
    }
    toRandomBonus(amount){
        if(amount == 1){
            return amount;
        }
        var num = Math.floor((Math.random())*amount);
        if(num == 0){
            this.toRandomBonus(amount);
        }else return num;
    }
    onTotalChange(v){
        if(v>0){
            this.setState({
                total:v,
                bonus:''
            });
        }else{
            this.setState({bonus:`请输入正确的金额${v}`});
        }
    }
    onNumChange(v){
        if(v>0){
            this.setState({
                number:v,
                bonus:''
            });
        }else{
            this.setState({bonus:`请输入正确的人数${v}`});
        }
        
    }
    render(){
        return (
            <div>
                <AppBar title="GetBonus"></AppBar>
                <TextField type='number' hintText="输入红包总额" fullWidth={true} onChange={(e)=>this.onTotalChange(e.target.value)}/>
                <TextField type='number' hintText="输入红包个数" fullWidth={true} onChange={(e)=>this.onNumChange(e.target.value)}/>
                <RaisedButton label="计算" fullWidth={true} onClick={this.calculate.bind(this)}/>
                <TextField disabled="false" hintText="红包随机结果" fullWidth={true} value={this.state.bonus}/>
            </div>
        );
    }
};
export default BonusView;