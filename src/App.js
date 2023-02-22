import logo from "./logo.svg";
import "./App.css";
import "./responsiveApp.css";
import imgTitleSvg from "./img/commerce_icon.svg";
import imgCartSvg from "./img/cart_icon.svg";
import { useEffect, useState } from "react";
import mock from "./mock";

function App() {
  const [stateProducts, setStateProducts] = useState([]);
  const [stateSearchOptions, setStateSearchOptions] = useState({
    inputSearch: "",
  });
  const [stateCombobox, setStateCombobox] = useState({
    inputCombo: "Por nombre",
    filter: 0,
  });
  const [statePagination, setStatePagination] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);

  const [stateCart, setStateCart] = useState({
    arrayCart: [],
    stateCart: false,
  });

  const changeValueInputId = (e) => {
    setStateSearchOptions({
      ...stateSearchOptions,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const ShoppingCart = ({ hookstateCart }) => {
    return (
      <div
        style={
          hookstateCart[0].stateCart ? { display: "flex" } : { display: "none" }
        }
        className="divContainerShoppingCart00"
      >
        <div className="flexColumn">
          <div className="flexRow">
            <h4>Nombre</h4>
            <h4>Precio</h4>
            <h4>Acciones</h4>
          </div>
          <div className="flexColumn">
            {hookstateCart[0].arrayCart.map((listArrayCart, index) => {
              return (
                <div className="flexRow">
                  <h4>{listArrayCart.name}</h4>
                  <h4>{listArrayCart.price}</h4>

                  <button
                    onClick={() => {
                      let indexResult = index;
                      hookstateCart[1]({
                        ...hookstateCart[0],
                        arrayCart: hookstateCart[0].arrayCart.filter(
                          (list, index) => index !== indexResult
                        ),
                      });
                    }}
                  >
                    Quitar
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const ComboBox = ({ hookStateInputCombobox }) => {
    const arrayFilter = ["Por nombre", "Mayor precio", "Menor precio"];
    const [stateCombobox, setStateCombobox] = useState(false);

    return (
      <div className="flexColumn divContainerComboBox00">
        <input
          readonly
          onClick={() => {
            setStateCombobox(true);
          }}
          value={hookStateInputCombobox[0].inputCombo}
        ></input>
        <div
          style={stateCombobox ? { display: "flex" } : { display: "none" }}
          className="flexColumn"
        >
          {arrayFilter.map((listArrayFilter, index) => {
            return (
              <h3
                onClick={() => {
                  setStateCombobox(false);
                  hookStateInputCombobox[1]({
                    ...hookStateInputCombobox[0],
                    filter: index,
                  });
                  hookStateInputCombobox[1]({
                    filter: index,
                    inputCombo: listArrayFilter,
                  });
                }}
              >
                {listArrayFilter}
              </h3>
            );
          })}
        </div>
      </div>
    );
  };
  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("items"));
    console.log(items);

    if (items !== null) {
      if (items.length > 0) {
        setStateCart({ ...stateCart, arrayCart: [...items] });
      }
    }
  }, []);

  useEffect(() => {
    if (stateCart.arrayCart.length > 0) {
      sessionStorage.setItem("items", JSON.stringify(stateCart.arrayCart));
    }
  }, [stateCart.arrayCart]);

  useEffect(() => {
    setStateProducts(mock(stateSearchOptions, stateCombobox.filter));
    setSelectedPage(0);
  }, [stateSearchOptions, stateCombobox.filter]);

  useEffect(() => {
    let countPagination = 0;
    let arrayPagination = [];
    if (stateProducts.length % 4 == 0) {
      countPagination = Math.trunc(stateProducts.length / 8);
    } else {
      countPagination = Math.trunc(stateProducts.length / 4) + 1;
    }

    for (let i = 0; i < countPagination; i++) {
      arrayPagination.push(i);
    }
    setStatePagination(arrayPagination);
  }, [stateProducts]);

  return (
    <div className="App flexColumn">
      <header className="flexRow">
        <div>
          <img src={imgTitleSvg}></img>
          <h2>E-commerce</h2>
        </div>
        <div className="flexColumn">
          <button
            onClick={() => {
              if (stateCart.stateCart == true) {
                setStateCart({ ...stateCart, stateCart: false });
              } else {
                setStateCart({ ...stateCart, stateCart: true });
              }
            }}
          >
            <img src={imgCartSvg}></img>
           {stateCart.arrayCart.length}
          </button>
          <ShoppingCart hookstateCart={[stateCart, setStateCart]} />
        </div>
      </header>
      <main>
        <section className="flexColumn">
          <h2>Buscar</h2>
          <input
            name="inputSearch"
            onChange={changeValueInputId}
            value={stateSearchOptions.inputSearch}
          ></input>
          <div className="flexColumn">
            <h3>Ordenar por</h3>
            <ComboBox
              hookStateInputCombobox={[stateCombobox, setStateCombobox]}
            />
          </div>
        </section>
        <section>
          {stateProducts
            .slice(selectedPage * 4, selectedPage * 4 + 4)
            .map((list) => {
              return (
                <div className="divContainerEcommerce00 flexColumn">
                  <img src={list.urlImg}></img>
                  <h3>{list.name}</h3>

                  <div className="flexColumn">
                    <h4>Información:</h4>
                    <h4>{list.info}</h4>
                  </div>
                  <div className="flexRow">
                    <h4>Stock:</h4> <h4>{list.stock}</h4>
                  </div>
                  <div className="flexRow">
                    <h4>Precio:</h4> <h4>{list.price}</h4>
                  </div>

                  <button
                    onClick={() => {
                      if (
                        stateCart.arrayCart.find(
                          (listHookstateCart) =>
                            listHookstateCart.name == list.name
                        ) == undefined
                      ) {
                        setStateCart({
                          ...stateCart,
                          arrayCart: [
                            ...stateCart.arrayCart,
                            { name: list.name, price: list.price },
                          ],
                        });
                      }
                    }}
                  >
                    Agregar
                  </button>
                </div>
              );
            })}
        </section>
      </main>
      <div>
        {statePagination.map((listStatePagination) => {
          return (
            <button
              style={
                selectedPage === listStatePagination
                  ? { backgroundColor: "rgb(199, 197, 197)" }
                  : {}
              }
              onClick={() => {
                setSelectedPage(listStatePagination);
              }}
            >
              {listStatePagination + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
