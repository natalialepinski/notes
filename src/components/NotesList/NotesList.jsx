import React, { Component } from 'react';
import CardNote from '../CardNote';
import './style.css'

class NotesList extends Component {
    render() {
        return (
            <ul className='notes-list'>
                {this.props.notes.map((note, index) => {
                    return (
                        <li className='notes-list_item' key={index}>
                            <CardNote 
                                title={note.title} 
                                text={note.text} 
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;