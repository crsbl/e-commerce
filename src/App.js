import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import mock from "./mock";

function App() {
  const [stateProducts, setStateProducts] = useState([]);
  const [stateSearchOptions, setStateSearchOptions] = useState({
    inputSearch: "",
    filter: 0,
  });
  const [statePagination, setStatePagination] = useState([]);
const [selectedPage, setSelectedPage] = useState(1);


  const changeValueInputId = (e) => {
    setStateSearchOptions({
      ...stateSearchOptions,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  let arrayPagination = [];

  useEffect(() => {
    setStateProducts(mock(stateSearchOptions));
  }, [stateSearchOptions]);

  useEffect(() => {
let countPagination = 0

    if (stateProducts.length % 8 == 0) {
      countPagination = Math.trunc(stateProducts.length / 8);
    } else {
      countPagination = Math.trunc(stateProducts.length / 8) + 1;
    }

    for (let i = 0; i < countPagination; i++) {
      arrayPagination.push(i);
    }
    setStatePagination(arrayPagination); 
  }, [stateProducts]);

  return (
    <div className="App flexColumn">
      <header className="flexRow">
        <h2>E-commerce en proceso</h2>
        <button>Carrito</button>
      </header>
      <main className="flexRow">
        <section>
          <h2>Buscar</h2>
          <input
            name="inputSearch"
            onChange={changeValueInputId}
            value={stateSearchOptions.inputSearch}
          ></input>
          <div className="flexColumn">
            <h3>Ordenar por</h3>
          </div>
        </section>
        <section className="flexRow">
          {stateProducts.slice(selectedPage* 8, selectedPage *8 +8).map((list) => {
            return (
              <div className="divContainerEcommerce00 flexColumn">
                <img src=""></img>
                <h3>{list.name}</h3>

                <div className="flexColumn">
                  <h4>Informacion</h4>
                  <h4>{list.info}</h4>
                </div>
                <div className="flexRow">
                  <h4>Stock</h4> <h4>{list.stock}</h4>
                </div>
                <div className="flexRow">
                  <h4>Precio</h4> <h4>{list.price}</h4>
                </div>

                <button>Agregar</button>
              </div>
            );
          })}
        </section>
      </main>
      <div className="FlexRow">
        {statePagination.map((listStatePagination) => {
          return <button style={selectedPage ===listStatePagination ?{backgroundColor:"red"}:{}} onClick={()=>{setSelectedPage(listStatePagination)}}>{listStatePagination +1}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
