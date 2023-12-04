import UserItem from "./UserItem";
import styles from "./UsersList.module.css";
function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <ul className={styles["users-list"]}>
      {props.items.map((user) => (
        <UserItem
          user={user}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
