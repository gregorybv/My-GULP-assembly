// //=== FOR ONE BUTTON ===//
// // Get the modal
// const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

/* ========================================== */
//=== FOR MORE BUTTON ===//

// const buttons = document.querySelectorAll(".myBtn");
// const modal = document.getElementById("myModal");
// const span = document.querySelector(".close");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     modal.style.display = "block";
//   });
// });

// span.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });
/* ================================== */

const modalData = [
  {
    imgSrc: "../../assets/image/img1.png",
    text: "General project structure. All required swap files and dependencies are already installed. All you need to do to get started is to type npm i at the command line to install Node. The node modules folder will appear in your project and you can start developing.",
  },
  {
    imgSrc: "../../assets/image/img2.png",
    text: "The app folder is needed to build the application. All the data we create is compressed and converted into more accessible formats for the browser. It is this data that is then used to deplocate the application to the server.",
  },
  {
    imgSrc: "../../assets/image/img3.png",
    text: "The src folder contains the main folders and files to work with. It is not recommended to place project files outside the src folder, because you may have problems building the application. On the other hand, you can customize the build to your liking and change the paths and file locations.",
  },
  {
    imgSrc: "../../assets/image/img4.png",
    text: "The assets folder is designed to store and further use pictures and photos. The build is configured to store only svg files in the svd folder. Files of other formats can be stored both in the image folder and in the root of the assets folder.You can change the paths and locations of the files, modifying the assembly for your own convenience, if necessary.",
  },
  {
    imgSrc: "../../assets/image/img5.png",
    text: "The js folder is used to store and use files like file.js. You can also change some of the data in this folder, but not all. You can learn about unchangeable files and folders in the following slides.",
  },
  {
    imgSrc: "../../assets/image/img6.png",
    text: "Text for image 6",
  },
  {
    imgSrc: "../../assets/image/img7.png",
    text: "Text for image 7",
  },
  {
    imgSrc: "../../assets/image/img8.png",
    text: "Text for image 8",
  },
  {
    imgSrc: "../../assets/image/img9.png",
    text: "Text for image 9",
  },
  {
    imgSrc: "../../assets/image/img10.png",
    text: "Text for image 10",
  },
  {
    imgSrc: "../../assets/image/img11.png",
    text: "Text for image 11",
  },
  {
    imgSrc: "../../assets/image/img12.png",
    text: "Text for image 12",
  },
  {
    imgSrc: "../../assets/image/img13.png",
    text: "Text for image 13",
  },
];
// получаем элементы, на которые будем кликать, и модальное окно
const buttons = document.querySelectorAll(".myBtn");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");

// прикрепляем обработчик клика на каждую кнопку
buttons.forEach((button) => {
  button.addEventListener("click", showModal);
});

// отображаем модальное окно и подставляем нужную информацию внутрь
function showModal() {
  const index = Array.from(buttons).indexOf(this); // получаем индекс кнопки, на которую кликнули
  modal.style.display = "block"; // показываем модальное окно
  modalContent.innerHTML = `<span class="close">&times;</span>
  <div class="modal__block">
  <p class="modal__text subtitle">${modalData[index].text}</p>
  <img src="${modalData[index].imgSrc}" class="modal__img" alt="modal img">
  </div>`; // вставляем нужную информацию внутрь
  const closeBtn = document.getElementsByClassName("close")[0]; // получаем кнопку закрытия модального окна
  closeBtn.onclick = function () {
    modal.style.display = "none"; // закрываем модальное окно
  };
}
