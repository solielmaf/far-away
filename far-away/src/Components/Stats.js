export default function Stats({ items }) {
  const numItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.floor((100 * numpacked) / numItem);
  return (
    <footer className="stats">
      <em>
        💼 You have {numItem} items on your list, and you already packed{" "}
        {numpacked}({percentPacked}%)
      </em>
    </footer>
  );
}
