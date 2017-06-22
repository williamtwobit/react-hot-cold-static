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
            correctAnswer:'3',
            feedback:'Make your guess!',
            guessButton:true,
            poodle:false, //This is the modal for the what?
        };
    };

    newGame(){
        this.setState({
            guesses:[],
            correctAnswer:'5',
            feedback:'New Game! Make your guess!',
            poodle:false
        });
    };
    submitGuess(userGuess){
        let feedback;

        this.setState({
            guesses:[...this.state.guesses, userGuess]
        });

        let submittedGuess=userGuess-this.state.correctAnswer;

        if(userGuess===this.state.correctAnswer){
            return this.winner;
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
        this.setState({
            feedback
        });
    };
    winner(){
        let feedback;
        this.setState({
            feedback:"You Won. Click new game to play again",
            guessButton: false
        });
    }
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
                <GuessSection feedback={this.state.feedback} submitGuess={guess=>this.submitGuess(guess)}/>
                <GuessCount count={3} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    };
}

