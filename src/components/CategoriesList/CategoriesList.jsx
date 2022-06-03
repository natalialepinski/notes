import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {
    _handleInput(e) {
        if (e.key === 'Enter') {
            e.stopPropagation();
            let nameCategory = e.target.value;
            this.props.createCategory(nameCategory);
        }
    }

    render() { 
        return (
            <section className='categories-list'>
                <ul className='categories-list_list'>
                    {this.props.categories.map((category, index) => {
                        return (
                            <li className='categories-list_item' key={index}>{category}</li>
                        );
                    })}
                </ul>
                <input 
                    type='text' 
                    className='categories-list_input'
                    placeholder='Add new category'
                    onKeyUp={this._handleInput.bind(this)}
                />
            </section>
        );
    }
}
 
export default CategoriesList;