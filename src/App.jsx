import axios from "axios";
import { useRef, useState, useEffect } from "react";
import User from "./User";
import Pagination from "./Pagination";
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [numBtns, setNumBtns] = useState(0); // number of pagination buttons
  const [startIndex, setStartIndex] = useState(0); // start index of users array to show on page
  const [activePage, setActivePage] = useState(1); // active page number
  const [inputVal, setInputVal] = useState("");
  const searchQuery = useRef("");
  const usersPerPage = 7; // change this to set number of users per page
  const endIndex = Math.min(startIndex + usersPerPage, users.length); // select whichever value is smaller

  /**
   * useEffect to update the number of pagination buttons
   * when the users array or usersPerPage changes
   */
  useEffect(() => {
    setNumBtns(Math.ceil(users.length / usersPerPage));
  }, [users, usersPerPage]);

  async function addNewUser() {
    const res = await axios.get("https://randomuser.me/api/?lego");
    let data = res.data.results[0];
    const image = data.picture.thumbnail;
    const name = `${data.name.first} ${data.name.last}`;
    const location = `${data.location.city}, ${data.location.state}`;

    setUsers([
      ...users,
      { image: image, name: name, location: location, isVisible: true },
    ]);
  }

  function searchUsers() {
    users.map((user) => {
      user.isVisible = user.name
        .toLowerCase()
        .includes(searchQuery.current.toLowerCase());
    });
  }

  return (
    <div>

      <header className="bg-[#D9D9D9]">
        <h1 className="header1">Toy Box Enterprise<sup>®</sup></h1>
        <h2 className="header2">Welcome to the Toy Box employee database</h2>
      </header>

      <div className="employees">
        <div className="w-full max-w-[500px] m-auto mt-5">

          <div className="employee-sec">
            <div className="page-title">
              <h3 className="header3">Employees</h3>
              <h4 className="header4">View all current employees</h4>
            </div>
            <div className="main-button">
              <button
                onClick={() => {
                  addNewUser();
                }}
                className="add-employee"
              >
                Add New Employee
              </button>
            </div>
          </div>

          <div className="">
            <input
              onChange={(e) => {
                setInputVal(e.target.value);
                searchQuery.current = e.target.value;
                searchUsers();
              }}
              className="search-employees"
              type="text"
              placeholder="Search by name..."
              value={inputVal}
            />
            {/* <p className="mt-6 text-sm text-zinc-500">
              To add a new user, click the button below
            </p> */}
          </div>

          {/* users */}
          <div className="employee-list">
            <h4 className="header4">Showing results: <span className="results">1 of 1</span></h4>
            <ul className="employee-items user-list">
              {
                /**
                 * We use .slice() to select a subset of the users array to display
                 * @param {number} startIndex - initially 0, then updated by pagination button clicks
                 * @param {number} endIndex - calculated by startIndex + usersPerPage
                */
                users.slice(startIndex, endIndex).map((user, index) => {
                  return (
                    <User
                      isVisible={user.isVisible}
                      users={users}
                      setUsers={setUsers}
                      id={index}
                      key={index}
                      image={user.image}
                      name={user.name}
                      location={user.location}
                    />
                  );
                })
              }
            </ul>
          </div>

          {/* paginate */}
          <div>
            <ul className="flex place-content-center gap-3">
              {
                /**
                 * We use Array.from() to create an array of length numBtns
                 * We then map over this array to create the pagination buttons
                 */
                users.length > 0 ? (
                  Array.from({ length: numBtns }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <Pagination
                        key={i}
                        pageNum={pageNum}
                        isActive={pageNum === activePage}
                        updateActivePage={() => setActivePage(pageNum)}
                        updateStartIndex={() => setStartIndex((pageNum - 1) * usersPerPage)}
                      />
                    )
                  })
                ) : null
              }
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <h4 className="header4">© 2024 Toy Box Enterprise. All rights reserved.</h4>
      </footer>
    </div>
  );
};
export default App;
