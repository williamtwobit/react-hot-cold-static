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
        return (
            <form onSubmit={(e)=> {e.preventDefault(); this.props.testing(this.state.inputValue)}}>
                <input onChange={(e)=>this.getValue(e.target.value)} type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
}
