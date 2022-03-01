import { useContext } from "react";
import CartContext from "../store/cart-context";
import Books from "./Books";
import classes from "./Admin.module.css";

const Admin = (props) => {
  const cartCtx = useContext(CartContext);

  const logoutHandleClick = () => {
    props.isLogout(true);
  };

  const handleAdd = (event) => {
    let item = {};
    console.log("cartCtx.totalId = " + cartCtx.totalId);
    item.bookId = cartCtx.totalId + 1;
    item.bookName = prompt("Please enter the book name");
    item.authorName = prompt("Please  enter the author name");
    alert(item.bookName + "\n" + item.authorName);
    cartCtx.addItem(item);
  };

  const bookRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="adminCenter">
      <h1>Admin Page</h1>
      <table className="center">
        {cartCtx.items.map((book) => {
          return (
            <tr>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>

              <td>
                <button className="button-del" onClick={bookRemoveHandler.bind(null, book.bookId)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <button className="button" onClick={handleAdd}>Add</button>
      <button className="button" onClick={logoutHandleClick}>Logout</button>
    </div>
  );
};

export default Admin;
