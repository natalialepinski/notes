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
                                index={index}
                                title={note.title} 
                                text={note.text} 
                                category={note.category}
                                deleteNote={this.props.deleteNote}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NotesList;