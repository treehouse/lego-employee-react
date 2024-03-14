import './styles.css';

const User = (props) => {
  const { isVisible, users, setUsers, image, name, location, id } = props;

  function deleteUser(userID) {
    setUsers(users.filter((user, index) => index !== userID));
  }

  return (
    <li
      className={`${
        !isVisible ? "hidden" : "flex"
      } place-items-center mb-5 last-of-type:mb-0`}
    >
      <img className="emp-photo" src={image} />
      <div>
        <p className="emp-name">{name}</p>
        <p className="header4">{location}</p>
      </div>
      <button
        onClick={() => {
          deleteUser(id);
        }}
        className="delete"
      >
        <img className="" src="../public/trash-can-solid.svg" alt="Delete employee"/>
      </button>
    </li>
  );
};
export default User;
