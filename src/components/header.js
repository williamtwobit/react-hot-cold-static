import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    let infoModal;
    if(props.state.poodle === true){
        infoModal = <InfoModal poodle={id=> props.poodle(id)}/>
    }
    return (
        <header>
            <TopNav poodle={id=> props.poodle(id)} newGame={e=> props.newGame()}/>
            {infoModal}
            <h1>HOT or COLD</h1>
        </header>
    );
};

// newGame={props.newGame()} poodle={props.poodle()}