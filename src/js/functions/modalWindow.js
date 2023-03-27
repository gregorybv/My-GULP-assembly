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
    text: "General project structure. All required swap files and dependencies <span class='hero__subtext_item'>are already installed</span>. All you need to do to get started is to type <span class='hero__subtext_item'>npm i</span> at the command line to install <span class='hero__subtext_item'>Node</span>. The <span class='hero__subtext_item'>node modules</span> folder will appear in your project and you can <span class='hero__subtext_item'>start developing</span>.",
  },
  {
    imgSrc: "../../assets/image/img2.png",
    text: "The <span class='hero__subtext_item'>app</span> folder is needed to <span class='hero__subtext_item'>build the application</span>. All the data we create is <span class='hero__subtext_item'>compressed</span> and <span class='hero__subtext_item'>converted</span> into more accessible formats for <span class='hero__subtext_item'>the browser</span>. It is <span class='hero__subtext_item'>this data</span> that is then used <span class='hero__subtext_item'>to deplocate the application to the server</span>.",
  },
  {
    imgSrc: "../../assets/image/img3.png",
    text: "The <span class='hero__subtext_item'>src</span> folder contains the main folders and files to work with. It is <span class='hero__subtext_item'>not recommended</span> to place project files <span class='hero__subtext_item'>outside the src folder</span>, because you may have <span class='hero__subtext_item'>problems</span> building the application. On the other hand, you can <span class='hero__subtext_item'>customize</span> the build <span class='hero__subtext_item'>to your liking</span> and <span class='hero__subtext_item'>change the paths and file locations</span>.",
  },
  {
    imgSrc: "../../assets/image/img4.png",
    text: "The <span class='hero__subtext_item'>assets</span> folder is designed to <span class='hero__subtext_item'>store and further</span> use pictures and photos. The build is configured to store only <span class='hero__subtext_item'>svg files</span> in the <span class='hero__subtext_item'>svd folder</span>. Files of <span class='hero__subtext_item'>other formats</span> can be stored both in the image folder and in <span class='hero__subtext_item'>the root of the assets folder</span>.You can change the paths and locations of the files, <span class='hero__subtext_item'>modifying</span> the assembly <span class='hero__subtext_item'>for your own convenience</span>, if necessary.",
  },
  {
    imgSrc: "../../assets/image/img5.png",
    text: "The <span class='hero__subtext_item'>js</span> folder is used to store and use files like <span class='hero__subtext_item'>file.js</span>. You <span class='hero__subtext_item'>can also</span> change some of the data in this folder, <span class='hero__subtext_item'>but not all</span>. You <span class='hero__subtext_item'>can learn</span> about unchangeable files and folders in <span class='hero__subtext_item'>the following slides</span>.",
  },
  {
    imgSrc: "../../assets/image/img6.png",
    text: "The <span class='hero__subtext_item'>_functions.js</span> file is needed to <span class='hero__subtext_item'>import</span> all the created js files of <span class='hero__subtext_item'>the project</span>. It contains <span class='hero__subtext_item'>function connections</span> for various <span class='hero__subtext_item'>project operations</span>. Also through this file the work of various libraries, for example <span class='hero__subtext_item'>AOS</span> is connected. You can find <span class='hero__subtext_item'>more details</span> in the <span class='hero__subtext_item'>file itself</span>. To connect a <span class='hero__subtext_item'>specific js-file</span> to the project, you need to <span class='hero__subtext_item'>uncomment</span> the import of the function you want.",
  },
  {
    imgSrc: "../../assets/image/img7.png",
    text: "The <span class='hero__subtext_item'>functions</span> folder stores a collection of individual codes for the <span class='hero__subtext_item'>specific</span> operation of your application. You can learn about the functions of a particular code from the file name that <span class='hero__subtext_item'>characterizes it</span>. It is also <span class='hero__subtext_item'>recommended</span> that you use the <span class='hero__subtext_item'>components</span> folder for a <span class='hero__subtext_item'>similar place</span> to store individual functions.",
  },
  {
    imgSrc: "../../assets/image/img8.png",
    text: "The <span class='hero__subtext_item'>index.html</span> file is a <span class='hero__subtext_item'>summary file</span> for all the html elements in the project. The <span class='hero__subtext_item'>@include('folder/text.html')</span> method is used to <span class='hero__subtext_item'>connect</span> the individual <span class='hero__subtext_item'>html components</span>. ",
  },
  {
    imgSrc: "../../assets/image/img9.png",
    text: "The folder <span class='hero__subtext_item'>partials</span> is designed to store the <span class='hero__subtext_item'>individual</span> html elements of the project, which <span class='hero__subtext_item'>are later imported</span> into the <span class='hero__subtext_item'>main</span> html file.",
  },
  {
    imgSrc: "../../assets/image/img10.png",
    text: "The <span class='hero__subtext_item'>finished</span> folder contains html files with <span class='hero__subtext_item'>ready-made pieces</span> of code. This code can then <span class='hero__subtext_item'>be copied</span> into a file you created in the root of the partials folder and <span class='hero__subtext_item'>used in the project</span>.",
  },
  {
    imgSrc: "../../assets/image/img11.png",
    text: "The <span class='hero__subtext_item'>resources</span> folder is mainly used for <span class='hero__subtext_item'>storing and using fonts</span>. <span class='hero__subtext_item'>Only woff2</span> fonts are used in the assembly. But you can always <span class='hero__subtext_item'>plug in</span> fonts of other formats by <span class='hero__subtext_item'>importing them</span>.",
  },
  {
    imgSrc: "../../assets/image/img12.png",
    text: "The <span class='hero__subtext_item'>scss</span> folder contains all of the project's <span class='hero__subtext_item'>style files</span>. Note that <span class='hero__subtext_item'>the style classes</span> have the same name as the classes in <span class='hero__subtext_item'>the html files</span> of the assembly.",
  },
  {
    imgSrc: "../../assets/image/img13.png",
    text: "The main.scss file is used as a summary file of all styles. It already has a lot of connections to different blocks. To use them, just find the appropriate file in the project, examine it, and comment out the appropriate line of code in main.scss.",
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
  </div>`;
  const closeBtn = document.getElementsByClassName("close")[0]; // получаем кнопку закрытия модального окна
  closeBtn.onclick = function () {
    modal.style.display = "none"; // закрываем модальное окно
  };
}
