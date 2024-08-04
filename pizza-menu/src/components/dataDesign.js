import "./dataDesign.css";

function DataDesign({ dataObj }) {
  const dishData = dataObj;
  return (
    <li className={`dish ${dishData.soldOut ? "sold-out" : ""}`}>
      <img src={dishData.photoName} alt={dishData.name} />
      <div>
        <h3>{dishData.name}</h3>
        <p>{dishData.ingredients}</p>
        <span>{dishData.soldOut ? "SOLD OUT" : dishData.price}</span>
      </div>
    </li>
  );
}

export default DataDesign;
