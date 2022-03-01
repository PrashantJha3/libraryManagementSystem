import CartContext from "../store/cart-context";
import { useContext } from "react";

const Books = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="center">
    <table>
      {cartCtx.items.map((employee) => {
        return (
          <tr>
            <td>{employee.bookId}</td>
            <td>{employee.bookName}</td>
          </tr>
        );
      })}
    </table>
    </div>
  );
};

export default Books;
