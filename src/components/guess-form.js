import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:0
        };
    }
    getValue(userNum){
        this.setState({
            inputValue:userNum
        });
    };
    render(){
        let button;
        if(this.props.state.guessButton === true){
            button = <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        };
        return (
            <form onSubmit={(e)=> {e.preventDefault(); this.props.testing(this.state.inputValue); e.target.reset();}}>
                <input onChange={(e)=>this.getValue(e.target.value)} type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required />
                    {button}
            </form>
        );
    }
}
