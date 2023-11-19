import './index.css'

const HistotyList = props => {
  const {eachList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachList
  return (
    <div>
      <li className="itemContainer">
        <p className="Time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="titleName">{title}</p>
        <p className="domainLogo">{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="DeleteImage"
        />
      </li>
    </div>
  )
}

export default HistotyList
