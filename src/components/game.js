import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component{
    Constructor(props){
        super(props);
        this.state={
            guesses:[],
            correctAnswer:'3',
            feedback:'Make your guess!',
            poodle:false //This is the modal for the what?
        };
        newGame(){
            this.setState({
                guesses:[],
                correctAnswer:'3',
                feedback:'Make your guess!'
                poodle:false
            })
        }
        submitGuess(userGuess){
            this.setState({
                guesses:[...this.state.guesses,userGuess]
                feedback: 
            })
            let submittedGuess=userGuess-correctAnswer;
            if(userGuess===correctAnswer){
                feedback="You Won. Click new game to play again";
                return winner();
            }
            else if(submittedGuess<10){
                feedback="Hot";
            }
            else if(submittedGuess<20){
                feedback="Kinda hot";
            }
            else if(submittedGuess<30){
                feedback="Less than warm";
            }
            else if(submittedGuess<40){
                feedback="Cold";
            }
        }
        poodle(clickMe){
            this.setState(){
                poodle: true;
            }
        }
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} />
                <GuessCount count={3} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

