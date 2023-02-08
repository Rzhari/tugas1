const tombol = document.getElementById("object");
const input = document.getElementById("nilai");
const latar = document.getElementById("latar");

tombol.onclick = function () {
  const nilai = input.value;
  latar.style.background = nilai;
};
