import React, { Component } from 'react';
import './style.css'

class EnrolmentForm extends Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.text = '';
        this.category = 'No category';
    }

    _handleTitleChange(e) {
        e.stopPropagation();
        this.title = e.target.value;
    }

    _handleTextAreaChange(e) {
        e.stopPropagation();
        this.text = e.target.value;
    }
    
    _createNote(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    _handleCategoryChange(e) {
        e.stopPropagation();
        this.category = e.target.value;
    }

    render() {
        return (
            <form 
                className='enrolment-form'
                onSubmit={this._createNote.bind(this)}
            >
                <select
                    className='enrolment-form_input'
                    onChange={this._handleCategoryChange.bind(this)}
                >   
                    <option>{this.category}</option>
                    {this.props.categories.map((category, index) => {
                        return (
                            <option key={index}>{category}</option>
                        );
                    })}
                </select>
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