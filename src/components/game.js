import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

// export default function Game(props){
//     return (
//             <div>
//                 <Header />
//                 <GuessSection feedback={"whats going on"} />
//                 <GuessCount count={3} />
//                 <GuessList guesses={[0]} />
//             </div>
//         );
// }

export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            guesses:[],
            correctAnswer: Math.floor((Math.random() * 100) + 1),
            feedback:'Make your guess!',
            guessButton:true,
            poodle:false, //This is the modal for the what?
        };
    };

    newGame(){
        this.setState({
            guesses:[],
            correctAnswer: Math.floor((Math.random() * 100) + 1),
            feedback:'New Game! Make your guess!',
            poodle:false,
            guessButton:true
        });
    };

    submitGuess(userGuess){
        let feedback;
        if(this.state.guesses.includes(userGuess)){
            feedback= "You've already entered that guess..."
            this.setState({
                feedback
            });
            return;
        }
        this.setState({
            guesses:[...this.state.guesses, userGuess]
        });

        let submittedGuess= Math.abs(userGuess-this.state.correctAnswer);

        if(userGuess == this.state.correctAnswer){
            return this.winner();
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
        else{
            feedback="Ice cold, baby... ice cold."
        }
        this.setState({
            feedback
        });
    };

    winner(){
        this.setState({
            feedback: "You Won. Click new game to play again",
            guessButton: false
        });
    };

    poodle(id){

        if(id === 'what'){
            this.setState({
                poodle: true
            });
        }
        else if(id === 'gotIt'){
            this.setState({
                poodle: false
            });
        }
    };

    render(){
        return (
            <div>
                <Header state={this.state} poodle={id=> this.poodle(id)} newGame={e=> this.newGame()}/>
                <GuessSection feedback={this.state.feedback} submitGuess={guess=>this.submitGuess(guess)} state={this.state}/>
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    };
}

