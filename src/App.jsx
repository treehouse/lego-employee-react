import axios from "axios";
import { useRef, useState } from "react";
import User from "./User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const searchQuery = useRef("");

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
    <div className="h-screen bg-zinc-800 text-gray-200 p-5 ">
      <div className="w-full max-w-[500px] m-auto">
        <div className="">
          <input
            onChange={(e) => {
              setInputVal(e.target.value);
              searchQuery.current = e.target.value;
              searchUsers();
            }}
            className="w-full px-3 py-2 rounded-md text-zinc-700"
            type="text"
            placeholder="Search users..."
            value={inputVal}
          />
          <p className="mt-6 text-sm text-zinc-500">
            To add a new user, click the button below
          </p>
          <button
            onClick={() => {
              addNewUser();
            }}
            className="w-full mt-block bg-[#2b8fe1] hover:bg-[#166db4] duration-200 text-white px-3 py-2 rounded-md mt-1"
          >
            Add a New User
          </button>
        </div>

        {/* users */}
        <div className="mt-10">
          <h3>Lego People in our Toy Box</h3>
          <ul className="user-list p-5 bg-zinc-700 mt-2 rounded-md">
            {/* limit the users.length to 7, 
                map in those users */}
            { 
              users.slice(0, 8).map((user, index) => {
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
      </div>
    </div>
  );
};
export default App;
