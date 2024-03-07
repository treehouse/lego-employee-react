const App = () => {
  return (
    <div className="h-screen bg-slate-800 text-gray-200 p-5 ">
      <div className="w-full max-w-[500px] m-auto">
        <div className="">
          <input
            className="w-full px-3 py-2 rounded-md"
            type="text"
            placeholder="Search users..."
          />
          <p className="mt-6 text-sm text-slate-500">
            To add a new user, click the button below
          </p>
          <button className="w-full mt-block bg-[#4FA825] hover:bg-[#3c811d] duration-200 text-white px-3 py-2 rounded-md mt-1">
            Add a New User
          </button>
        </div>

        {/* users */}
        <div className="mt-10">
          <h3>Lego People in our Toy Box</h3>
          <ul className="user-list p-5 bg-slate-700 mt-2 rounded-md">
            <li className="flex place-items-center mb-3 last-of-type:mb-0">
              <img
                className="size-[60px] mr-4 rounded-full"
                src="https://placehold.co/500x500"
              />
              <div>
                <p>FirstName LastName</p>
                <p className="text-slate-400 text-sm">Location</p>
              </div>
              <button className="ml-auto bg-[#4FA825] px-3 py-2 rounded-md hover:bg-[#3c811d] duration-200">
                Delete
              </button>
            </li>
            <li className="flex place-items-center mb-3 last-of-type:mb-0">
              <img
                className="size-[60px] mr-4 rounded-full"
                src="https://placehold.co/500x500"
              />
              <div>
                <p>FirstName LastName</p>
                <p className="text-slate-400 text-sm">Location</p>
              </div>
              <button className="ml-auto bg-[#4FA825] px-3 py-2 rounded-md hover:bg-[#3c811d] duration-200">
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
