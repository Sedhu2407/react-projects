import dishData from "./dishes";
import DataDesign from "./dataDesign";
import "./menu.css";

function Menu() {
  const data = dishData;
  console.log(data);
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Tamil Nadu Hotel. 6 dishes to choose from. All dishes are
        organic and delicious.
      </p>
      <ul className="dishes">
        {data.map((datas) => (
          <DataDesign dataObj={datas} key={datas.name} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
