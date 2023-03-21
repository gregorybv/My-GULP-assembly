let _a, _b, _c;
const refs = {
  overlay: document.getElementById("overlay"),
  modalWindow: document.getElementById("modalWindow"),
  closeBtn: document.getElementById("closeBtn"),
  openBtn: document.getElementById("openBtn"),
};
const classes = {
  openModal: "open-modal",
};
(a = refs.openBtn) === null || a === void 0
  ? void 0
  : a.addEventListener("click", handleModal);
(_b = refs.closeBtn) === null || _b === void 0
  ? void 0
  : _b.addEventListener("click", handleModal);
(_c = refs.overlay) === null || _c === void 0
  ? void 0
  : _c.addEventListener("click", handleModal);
document.addEventListener("keydown", handleModalClose);
function handleModal() {
  document.body.classList.toggle(classes.openModal);
}
function handleModalClose(a) {
  const code = a.code;
  if (code === "Escape") {
    document.body.classList.remove(classes.openModal);
  }
}
