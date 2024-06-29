// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, categoryItems, isChanged} = props
  const {tabId, displayText} = tabItem
  const geetingTabId = () => {
    categoryItems(tabId)
  }
  const isSelected = isChanged ? 'getting-change' : ''
  const isBorder = isChanged ? 'border-changed' : ''
  return (
    <li className={`border ${isBorder}`}>
      <button
        className={`list-button ${isSelected}`}
        onClick={geetingTabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
