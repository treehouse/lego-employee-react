/**
 * 
 * @param {number} pageNum - the page number 
 * @param {function} updateStartIndex - updates the startIndex state
 * @param {boolean} isActive - evaluates whether the button is currently active
 * @param {function} updateActivePage - updates the activePage state
 * @returns {JSX.Element} - a button that updates the startIndex and activePage
 */
const Pagination = ({ pageNum, updateStartIndex, isActive, updateActivePage }) => {
  const active = isActive ? 'bg-[#166db4]' : 'bg-[#2b8fe1] hover:scale-75';
  return (
    <button
      onClick={() => {
        updateStartIndex(pageNum);
        updateActivePage(pageNum);
      }}
    >
      <li className={`${active} mt-5 duration-200 text-white px-4 py-2 rounded-md`}>
        {pageNum}
      </li>
    </button>
  )
}

export default Pagination
