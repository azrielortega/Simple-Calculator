import React, { Component, useState } from 'react';
import '/src/public/css/Calculator.css';

class Calculator extends Component {

    constructor (props){
        super(props);
        this.state = {
            calc: "",
            result: ""
        }
    }

    updateCalc = (value) =>{
        const operators = ['/', '*', '+', '-', '.'];

        if (
            operators.includes(value) && this.state.calc === '' || 
            operators.includes(value) && operators.includes(this.state.calc.slice(-1))
        ){
            return;
        }
            this.setState ({calc : this.state.calc + value});

        if (!operators.includes(value)){
            this.setState ({result : eval(this.state.calc + value).toString()});
        }
        else{
            this.setState ({result : ""});
        }
    }

    finishCalc = () => {
        this.setState ({calc : this.state.result,
                        result : ""});
    }

    deleteCalc = () => {
        const operators = ['/', '*', '+', '-', '.'];

        this.setState ({calc : this.state.calc.slice(0, -1)});

        if (!operators.includes(this.state.calc.slice(-1)) || this.state.calc === ''){
            this.setState ({result : ""});
        }
        else{
            this.setState ({result : eval(this.state.calc).toString()});
        }
    }

    createDigits = () => {
        const digits = [];

        for (let i = 1; i <= 9; i++){
            digits.push(
                <button key = {i}
                onClick = { () => this.updateCalc(i.toString())}>
                {i}</button>
            )
        }
        
        return digits
    }

    render() { 
        return (
            <div className = "Calculator">
                <div className = "display">
                    { this.state.result !== "" ? <span>{this.state.result}</span> : ''}
                    { this.state.calc !== "" ? <div>{this.state.calc}</div> : '0' }
                </div>

                <div className = "operators">
                    <button onClick = { () => this.updateCalc('/')}>/</button>
                    <button onClick = { () => this.updateCalc('*')}>*</button>
                    <button onClick = { () => this.updateCalc('+')}>+</button>
                    <button onClick = { () => this.updateCalc('-')}>-</button>

                    <button onClick = { () => this.deleteCalc()}>DEL</button>
                </div>

                <div className = "digits">
                    { this.createDigits()}
                    <button onClick = { () => this.updateCalc('0')}>0</button>
                    <button onClick = { () => this.updateCalc('.')}>.</button>
                    <button onClick = { () => this.finishCalc()}>=</button>
                </div>
            </div>
        );
    }
}
 
export default Calculator;