import {Component} from 'react'

import HistotyList from '../HistoryItem'

import './index.css'

class GoogleItem extends Component {
  state = {searchInput: ''}

  searchItem = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const searchResult = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <nav className="hello">
          <div className="history">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="InputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="imageSearch"
            />
            <input
              className="inputType"
              type="search"
              placeholder="Search History"
              onChange={this.searchItem}
            />
          </div>
        </nav>
        <div className="image-card">
          {searchResult.length === 0 ? (
            <p className="parag">There is no history to show</p>
          ) : (
            searchResult.map(eachItem => (
              <HistotyList key={eachItem.id} eachList={eachItem} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default GoogleItem
