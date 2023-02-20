const mock = (SearchOptions) => {
  const products = [
    {
      name: "regla",
      info: "regla largo 30cm",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "goma",
      info: "goma blanca de borrar",
      stock: 10,
      urlImg: "",
      price: 400,
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
    {
      name: "regla",
      info: "regla largo 30cm",
      stock: 10,
      urlImg: "",
      price: 400,
    },
    {
      name: "goma",
      info: "goma blanca de borrar",
      stock: 10,
      urlImg: "",
      price: 400,
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

  return result;
};

export default mock;
