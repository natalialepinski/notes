import React, { Component } from 'react';
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';

class CardNote extends Component {

    _deleteNote() {
        const index = this.props.index;
        this.props.deleteNote(index);
    }

    render() { 
        return (
            <section className='card-note'>
                <header className='card-note_header'>
                    <h3 className='card-note_title'>{this.props.title}</h3>
                    <DeleteIcon onClick={this._deleteNote.bind(this)}/>
                    <h4>{this.props.category}</h4>
                </header>
                <p className='card-note_text'>{this.props.text}</p>
            </section>
        );
    }
}
 
export default CardNote;