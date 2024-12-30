import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {searchInputsList: [], searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {searchInput} = this.state

    const newData = {
      id: uuidv4(),
      searchValue: searchInput,
      count: searchInput.length,
    }

    this.setState(prevState => ({
      searchInputsList: [...prevState.searchInputsList, newData],
    }))

    this.setState({searchInput: ''})
  }

  render() {
    const {searchInput, searchInputsList} = this.state

    const count = searchInputsList.length

    return (
      <div className="character-counter-bgContainer">
        <div className="character-counter-container">
          <div className="counter-container">
            <div className="heading-container">
              <h1 className="heading">Count the characters like a Boss...</h1>
            </div>
            <div className="container">
              {count === 0 ? (
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              ) : (
                <ul className="list-container">
                  {searchInputsList.map(each => (
                    <li className="count" key={each.id}>
                      <p>
                        {each.searchValue}: {each.count}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="input-bg-container">
            <h1 className="counter-heading">Character Counter</h1>
            <form onSubmit={this.submitForm} className="text-input-container">
              <input
                value={searchInput}
                placeholder="Enter the Characters here"
                className="input"
                type="text"
                onChange={this.onChangeSearchInput}
              />
              <button
                className="add-button"
                type="submit"
                onClick={this.onClickAddButton}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
