const mock = (SearchOptions, filterCombobox) => {
  const products = [
    {
      name: "regla",
      info: "regla largo 30cm",
      stock: 10,
      urlImg: "",
      price: 500,
    },
    {
      name: "goma",
      info: "goma blanca de borrar",
      stock: 10,
      urlImg: "",
      price: 4200,
    },
    {
      name: "lapizes de colores",
      info: "30 lapizes de colores",
      stock: 10,
      urlImg: "",
      price: 4400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 6400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 8400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 200,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 800,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 1000,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 11100,
    },
    {
      name: "regla",
      info: "regla largo 30cm",
      stock: 10,
      urlImg: "",
      price: 8400,
    },
    {
      name: "goma",
      info: "goma blanca de borrar",
      stock: 10,
      urlImg: "",
      price: 4400,
    },
    {
      name: "lapizes de colores",
      info: "30 lapizes de colores",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "tijeras",
      info: "tijeras rojas plastico",
      stock: 10,
      urlImg: "",
      price: 400,
    },
  ];

  const result = products.filter(
    (number) =>
      number.name.slice(0, SearchOptions.inputSearch.length) ==
      SearchOptions.inputSearch
  );
console.log(filterCombobox,result);
  switch (filterCombobox) {
    case 0:
      result.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      console.log(result);
      break;
    case 1:
      result.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      break;
    case 2:
      result.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      break;
  }

  return result;
};

export default mock;
