let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

//G???i h??m display ????? hi???n th??? k??nh ra b??n tr??i m??n h??nh
display(dataGlasses);

//H??m display ????? hi???n th??? k??nh l??n khung b??n tr??i
function display(dataGlasses) {
  let html = dataGlasses.reduce((result, glass) => {
    return (
      result +
      `
        <div class="col-4">
            <img src="${glass.src}" width="150px" height="auto" data-id="${glass.id}"/>
        </div>
        `
    );
  }, "");

  dom("#vglassesList").innerHTML = html;
}

//H??m DOM
function dom(selector) {
  return document.querySelector(selector);
}

//==================================================================================

//L???ng nghe s??? ki???n click v??o k??nh b??n b???ng b??n tr??i
dom("#vglassesList").addEventListener("click", (evt) => {
  let id = evt.target.getAttribute("data-id");

  //T??m index trong m???ng dataGlasses c???a k??nh dc click th??ng qua id
  let index = dataGlasses.findIndex((glass) => {
    return glass.id === id;
  });

  //Hi???n th??? ra tr??n ng?????i m???u b??n ph???i
  displayModal(dataGlasses[index]);
});

//H??m hi???n th??? k??nh l??n ng?????i m???u ??? b??n ph???i v?? hi???n th??ng tin c???a k??nh
function displayModal(glass) {
  //hi???n th??? k??nh l??n ng?????i m???u
  let avatar = `
    <img src="${glass.virtualImg}" />
    `;

  //hi???n th??ng tin c???a k??nh
  let info = `
    <p>${glass.name} - ${glass.brand} (${glass.color})</p>
    <p>$${glass.price} - Stocking</p>
    <p>${glass.description}</p>
    `;

  dom("#avatar").innerHTML = avatar;
  dom("#glassesInfo").style.display = "block";
  dom("#glassesInfo").innerHTML = info;

}
