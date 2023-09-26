document.addEventListener("DOMContentLoaded", function () {
  const openSidebarButton = document.getElementById("openSidebar");
  const sidebar = document.getElementById("sidebar");

  openSidebarButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar_open");
  });
});

const yeniGorevButon = document.getElementById("yeniGorevButon");
const popup = document.querySelector(".popup");
const popupIcerik = document.querySelector(".popup-content");
const gorevListesi = document.getElementById("task_list");

function yeniGorevEkle(gorevIsmi, gorevAciklamasi, gorevTarihi) {
  const yeniGorev = document.createElement("li");
  yeniGorev.className = "body_container yeni-gorev"; // Yeni sınıf ekleyin
  yeniGorev.draggable = true;
  yeniGorev.innerHTML = `
  <div class="card_item_container">
    <div class="card_items_left">
      <label class="container">
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <i class="fa-solid fa-grip-vertical fa-lg gripbutton" style="color: #464d589d; padding-left: 5px"></i>
    </div>
    <div class="card_items_center">
      <div class="gorev_ismi">${gorevIsmi}</div>
      <div class="gorev_aciklamasi">${gorevAciklamasi}</div>
      <div class="gorev_tarihi">${gorevTarihi}</div>
    </div>
    <div class="card_items_right">
      <i class="fa-solid fa-trash-can fa-lg" style="color: #464d589d"></i>
      <i class="fa-solid fa-pen fa-lg" style="color: #464d589d"></i>
    </div>
  </div>
`;

  const gorevListesi = document.getElementById("task_list");
  gorevListesi.appendChild(yeniGorev);
}

yeniGorevButon.addEventListener("click", () => {
  if (popup.style.display == "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
});

document.getElementById("addTask").addEventListener("click", () => {
  const gorevIsmi = document.getElementById("gorevIsmi").value;
  const gorevAciklamasi = document.getElementById("gorevAciklamasi").value;
  const gorevTarihi = document.getElementById("gorevTarihi").value;
  const valueControl =
    gorevIsmi === "" || gorevAciklamasi === "" || gorevTarihi === "";

  if (!valueControl) {
    yeniGorevEkle(gorevIsmi, gorevAciklamasi, gorevTarihi);
    popup.style.display = "none";
    document.getElementById("gorevIsmi").value = "";
    document.getElementById("gorevAciklamasi").value = "";
    document.getElementById("gorevTarihi").value = "";
  } else {
    alert("Lütfen tüm alanları doldurun!");
  }
});
