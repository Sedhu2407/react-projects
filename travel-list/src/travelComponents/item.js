import "./item.css";

function Item({ item, deleteItem, changeData }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.isPacked}
        onChange={() => changeData(item.id)}
      ></input>
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.number} {item.item}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
