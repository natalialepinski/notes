import React, { Component } from 'react';
import './style.css'

class EnrolmentForm extends Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.text = '';

    }

    _handleTitleChange(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleTextAreaChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text);
    }

    render() {
        return (
            <form 
                className='enrolment-form'
                onSubmit={this._createNote.bind(this)}
            >
                <input 
                    type='text' 
                    placeholder='Title'
                    className='enrolment-form_input'
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder='Write your note'
                    className='enrolment-form_textarea'
                    onChange={this._handleTextAreaChange.bind(this)}
                />
                <button className='enrolment-form_submit'>
                    Create
                </button>
            </form>
        )
    }
}

export default EnrolmentForm;