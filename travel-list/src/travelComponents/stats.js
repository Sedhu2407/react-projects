import "./stats.css";
function Stats(props) {
  if (!props.data.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const datas = props.data;
  const itemsLength = datas.length;
  const packedItem = datas.filter((e) => e.isPacked).length;
  const percent = Math.round((packedItem / itemsLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything done."
          : `You have ${itemsLength} items on yourlist and you already packed ${packedItem} (${percent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
