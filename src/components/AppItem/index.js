// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="appitem-container">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p className="appitem-heading">{appName}</p>
    </li>
  )
}

export default AppItem
