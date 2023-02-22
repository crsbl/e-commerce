import imgItem from './img/goma-de-borrar.jpg'

const mock = (SearchOptions, filterCombobox) => {
  const products = [
    {
      name: "Regla",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 500,
    },
    {
      name: "Goma",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 4200,
    },
    {
      name: "Lapizes de colores",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 4400,
    },
    {
      name: "Tijeras",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 6400,
    },
    {
      name: "Abrecartas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 8400,
    },
    {
      name: "Agenda (de despacho de mesa)",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 200,
    },
    {
      name: "Agenda de bolsillo",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg:imgItem,
      price: 800,
    },
    {
      name: "Agenda de trabajo",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 1000,
    },
    {
      name: "Archivador",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 11100,
    },
    {
      name: "Block de dibujo",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 8400,
    },
    {
      name: "Calculadora",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 4400,
    },
    {
      name: "Carpeta (papeles, documentos)",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta de anillas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta de información",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carta",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Cinta adhesiva",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Corrector (líquido)",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Diario",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Libro de contabilidad",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Tizas para tablero",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Papel carta para impresora",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Bitacoras",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Portaminas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Tinta china",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Diccionario",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Cartulina por pliegos",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Sacapuntas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Pincel",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Escuadras",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Pega stick",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Resmas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Notas adhesivas",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Marcador Sharpie",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Tempera blister 5 unidades",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Bolígrafo Simball",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Block Dibujo Artel Medium",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Block Dibujo Artel Liceo",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Block Pre-Picado",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta Arte",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Calculadora Cientifica",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta Arte E.L.",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta Artecolor",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta Plastificada Colores",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Carpeta Plastificada con Archivador",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Cinta Masking Tape",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Compas Escolar Metalico",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
    {
      name: "Compas Maped Graphic",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      stock: 10,
      urlImg: imgItem,
      price: 400,
    },
  ];

  const result = products.filter(
    (number) =>
      number.name.toLowerCase().slice(0, SearchOptions.inputSearch.length) ==
      SearchOptions.inputSearch.toLowerCase()
  );

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
