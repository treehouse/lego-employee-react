const User = (props) => {
  const { users, setUsers, image, name, location, id } = props;

  function deleteUser(userID) {
    setUsers(users.filter((user, index) => index !== userID));
  }

  return (
    <li className="flex place-items-center mb-3 last-of-type:mb-0">
      <img className="size-[60px] mr-4 rounded-full" src={image} />
      <div>
        <p>{name}</p>
        <p className="text-slate-400 text-sm">{location}</p>
      </div>
      <button
        onClick={() => {
          deleteUser(id);
        }}
        className="ml-auto bg-[#ed4b46] px-3 py-2 rounded-md hover:bg-[#cd3737] duration-200"
      >
        Delete
      </button>
    </li>
  );
};
export default User;
