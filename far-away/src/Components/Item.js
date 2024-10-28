export default function Item({ item, onDelete, OnToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => OnToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
