document.addEventListener("DOMContentLoaded", function () {
  const openSidebarButton = document.getElementById("openSidebar");
  const sidebar = document.getElementById("sidebar");
  const mainApp = document.querySelector(".main_app");

  openSidebarButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar_open");

    if (sidebar.classList.contains("sidebar_open")) {
      swipeRight();
    } else {
      resetSwipe();
    }
  });

  var swipeValue = 550;

  function swipeRight() {
    mainApp.style.transition = "margin-left 0.3s";
    mainApp.style.marginLeft = swipeValue + "px";
  }

  function resetSwipe() {
    mainApp.style.transition = "margin-left 0.3s";
    mainApp.style.marginLeft = "25%";
  }
});

const yeniGorevButon = document.getElementById("yeniGorevButon");
const popup = document.querySelector(".popup");
const popupIcerik = document.querySelector(".popup-content");
const gorevListesi = document.getElementById("task_list");

function yeniGorevEkle(gorevIsmi, gorevAciklamasi, gorevTarihi) {
  const yeniGorev = document.createElement("li");
  yeniGorev.className = "body_container yeni-gorev";
  yeniGorev.draggable = true;
  yeniGorev.innerHTML = `
  <div class="card_item_container">
    <div class="card_items_left">
      <label class="container">
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      
    </div>
    <div class="card_items_center">
      <div class="gorev_ismi"><p  class="cardContent">${gorevIsmi}</p></div>
      <div class="gorev_aciklamasi"><p  class="cardContent">${gorevAciklamasi}</p></div>
      <div class="gorev_tarihi"><p  class="cardContent">${gorevTarihi}</p></div>
    </div>
    <div class="card_items_right">
      <i class="fa-solid fa-trash-can fa-lg" style="color: #464d589d"></i>
      <i class="fa-solid fa-pen fa-lg" style="color: #464d589d"></i>
    </div>
  </div>
`;

  const gorevListesi = document.getElementById("task_list");
  gorevListesi.appendChild(yeniGorev);
  yeniGorevButon.innerText = "Yeni Görev Ekle";
}

yeniGorevButon.addEventListener("click", () => {
  popup.classList.toggle("active");
  if (popup.classList.contains("active")) {
    yeniGorevButon.innerText = "Görev eklemekten vazgeç";
    popup.style.display = "flex";
  } else {
    yeniGorevButon.innerText = "Yeni Görev Ekle";
    popup.style.display = "none";
  }
  popup.style.display = "flex";
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

const rotateIcon = document.getElementById("chevron_left_icon");
let rotation = 0;

rotateIcon.addEventListener("click", function () {
  if (rotation == 0) {
    rotation += -90;
  } else {
    rotation -= -90;
  }
  rotateIcon.style.transform = `rotate(${rotation}deg)`;
});
