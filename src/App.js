import React, { Component } from 'react';
import EnrolmentForm from './components/EnrolmentForm';
import NotesList from './components/NotesList';
import CategoriesList from './components/CategoriesList';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
    };
  }

  createNote(title, text, category) {
    const newNote = {title, text, category};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index,1);
    this.setState({note: arrayNotes});
  }

  createCategory(nameCategory) {
    const newArrayCategories = [...this.state.categories, nameCategory];
    const newState = {
      ...this.state, 
      categories: newArrayCategories
    }
    this.setState(newState);
  }

  render() {
    return (
      <section className='content'>
        <EnrolmentForm 
          categories={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className='principal-content'>
          <CategoriesList 
            categories={this.state.categories}
            createCategory={this.createCategory.bind(this)}
          />
          <NotesList 
            notes={this.state.notes} 
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
