function loadData() {
  showMenu();
  checkLogin();
}

var menuList = [
  "ALL",
  "GUNDAM",
  "MÔ HÌNH TĨNH",
  "FIGURE-RISE",
  "DỤNG CỤ",
  "DRAGON BALL",
  "FIGURE",
];
function showMenu() {
  var ul = document.getElementById("product");
  var li = "";
  for (var i = 0; i < menuList.length; i++) {
    li +=
      '<li><a href="main.html?' +
      menuList[i].toLowerCase() +
      '">' +
      menuList[i] +
      "</a></li>";
  }
  ul.innerHTML = li;
}

function showListMobile() {
  var ul = document.getElementById("mobile__product");
  var li = "";
  for (var i = 0; i < menuList.length; i++) {
    li +=
      '<li><a href="main.html?' +
      menuList[i].toLowerCase() +
      '">' +
      menuList[i] +
      "</a></li>";
  }
  ul.innerHTML = li;
}

/* div search*/

function open_search() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("search_div").style.display = "block";
  document.getElementById("search__input").focus();
}

function close_search() {
  close__advanced_search();
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("search_div").style.display = "none";
}

/*advanced search*/

function advanced_search() {
  document.getElementById("advanced_search").style.display = "flex";
  document.getElementById("chevron-up").style.display = "block";
  document.getElementById("chevron-down").style.display = "none";
}

function close__advanced_search() {
  document.getElementById("advanced_search").style.display = "none";
  document.getElementById("chevron-up").style.display = "none";
  document.getElementById("chevron-down").style.display = "block";
}

function createFil() {
  var kq = `<select name="" id="type__option-search" onchange="filtersearch()">`;
      kq += '<option value=""></option>';
  for (let i = 0; i < menuList.length; i++) {
    kq += '<option value="' + menuList[i] + '">' + menuList[i] + "</option>";
  }
  kq += "</select>" + `<h3>Giá:</h3>`;

  kq += `<input id="min__search" placeholder="Từ" oninput="filtersearch()" type="number" />
  <h3> -</h3>
  <input id="max__search" placeholder="Đến" oninput="filtersearch()" type="number" />`;

  document.getElementById("advanced_search").innerHTML = kq;
}
createFil();

function filtersearch() {
  let s = document.getElementById("search__input").value.toLowerCase();
  let array = [];
  let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
  for (let i = 0; i < DanhSachSanPham.length; i++) {
    if (DanhSachSanPham[i].introduce.toLowerCase().includes(s)) {
      array.push(DanhSachSanPham[i]);
    }
  }
  let fil = document.getElementById("type__option-search").value.toLowerCase();
  if (fil == "all") {

  } else {
    for (let i = 0; i <array.length; i++) {
      if (!array[i].name.toLowerCase().includes(fil)) {
        array.splice(i, 1);
        i--;
      }
    }
  }
``
  let min = document.getElementById("min__search").value;
  min = min === "" ? 0 : parseFloat(min);

  let max = document.getElementById("max__search").value;
  max = max === "" ? 100000 : parseFloat(max);

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].price < min || array[i].price > max) {
      array.splice(i, 1);
    }
  }

  if (s == "" && fil == "") array = [];
  convertSearch(array);
  thisPage2 = 1;
  listItem2 = document.querySelectorAll("#card__item--two");
  loadItem2();
}

function convertSearch(array) {
  let item = document.querySelector(".list__search");
  let kq = '<div class="card__items" id="card__items--two">';
  for (let i = 0; i < array.length; i++) {
    kq += ConvertHTMLSearch(array[i]);
  }
  item.innerHTML = kq + "</div>";
}

function ConvertHTMLSearch(sanpham) {
  let html = "";
  html +=
    `<div class="card__item" id="card__item--two" onclick="showProductInfor(` +
    sanpham.id +
    `)">    
    <div class="card__img">    
    <img src="` +
    sanpham.image1 +
    `" alt="">    
    <img src="` +
    sanpham.image2 +
    `" alt="" id="img__after">    
    </div>    
    <h3>` +
    sanpham.name +
    `</h3>        
    <h4>` +
    sanpham.introduce +
    `</h4>        
    <h4>` +
    (sanpham.price * 1000).toLocaleString() +
    `<sup>VNĐ</sup></h4>
    <span class="card__view"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>`;
  return html;
}

let thisPage2 = 1;
let limit2 = 8;
let listItem2 = document.querySelectorAll("#card__item--two");
function loadItem2() {
  let starT2 = (thisPage2 - 1) * limit2;
  let enD2 = limit2 * thisPage2 - 1;
  listItem2.forEach(function (item, index) {
    if (index >= starT2 && index <= enD2) item.style.display = "block";
    else item.style.display = "none";
  });
  listPage2();
}
function listPage2() {
  let totalPage2 = Math.ceil(listItem2.length / limit2);
  document.querySelector("#number__pages--two").innerHTML = " ";
  for (let i = 1; i <= totalPage2; i++) {
    let newPage2 = document.createElement("li");
    let tempLi2 = `<li id="number__page--two"><a href="#">` + i + `</a></li>`;
    newPage2.innerHTML = tempLi2;
    if (i == thisPage2) newPage2.classList.add("active");
    newPage2.addEventListener("click", function () {
      changePage2(i);
    });
    let addINUL2 = document.querySelector("#number__pages--two");
    addINUL2.appendChild(newPage2);
  }
}
function changePage2(i) {
  thisPage2 = i;
  loadItem2();
}

function openlogin() {
  document.querySelector(".overlay").classList.add("show");
}
function opensignup() {
  let FormContainer = document.querySelector(".form-container");
  FormContainer.classList.add("active");
}
function closeLogin() {
  document.querySelector(".form-container").classList.remove("active");
  document.querySelector(".overlay").classList.remove("show");
}
function closeSignup() {
  document.querySelector(".form-container").classList.remove("active");
}
function ShowHidePassword() {
  const PasswordShowHide = document.querySelectorAll(".pw-hide");

  PasswordShowHide.forEach(function (icon) {
    icon.onclick = function () {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      }
    };
  });
}
ShowHidePassword();

function checkLogin() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) ;
  if (userLogin) {
    if (userLogin.username == "admin") {
      document.getElementById("checkLogin").innerHTML =
        `<span id="userlogin">
          <span>`+userLogin.username+`</span>
          <button id="logout" onclick="logout()">Đăng Xuất</button>
        </span>
        <a href="./admin.html" class="nav__item">
            <i class="fa-solid fa-gear"></i>
          </a>`;
    } else {
      document.getElementById("checkLogin").innerHTML = 
      `<span id="userlogin">
          <span><i class="fa-regular fa-user"></i>`+userLogin.username+`</span>
          <button id="logout" onclick="logout()">Đăng Xuất</button>
        </span>`;
    }
  } 
}

function logout() {
  localStorage.removeItem("userLogin");
  localStorage.removeItem("gioHang");
  checkLogin();
  document.getElementById("checkLogin").innerHTML = 
    `<button onclick="openlogin()" id="user-icon" class="nav__item">
      <i class="fa-regular fa-user"></i>
    </button>`;
}

function createAdmin() {
  var admin = {
    username: "admin",
    password: "admin",
    phone: "09090000x",
    email: "mecha19@email.com",
    address: "273 An Dương Vương, P3, Quận 5, TPHCM",
  };
  var userstring = localStorage.getItem("users");
  let userArray = userstring ? JSON.parse(userstring) : [];
  let flagAdmin = true;
  for (let i = 0; i < userArray.length; i++) {
    if (admin.username == userArray[i].username) {
      flagAdmin = false;
    }
  }
  if (flagAdmin) {
    userArray.push(admin);
    localStorage.setItem("users", JSON.stringify(userArray));
  }
}
createAdmin();

document.getElementById("signup-form").onsubmit = function (e) {
  e.preventDefault();
  var username = document.getElementById("sigus").value;
  var password = document.getElementById("sigpas").value;
  var repassword = document.getElementById("resigpas").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  let signupFlag = true;
  var userstring = localStorage.getItem("users");
  let userArray = userstring ? JSON.parse(userstring) : [];
  const addressRegex = /([0-9]+.*(đường|duong|phố|pho|phường|phuong|xã|xa).*(quận|quan|huyện|huyen|thành phố|thanh pho|tỉnh|tinh)).*(việt nam|viet nam)?/i;


  for (let i = 0; i < userArray.length; i++) {
    if (username == userArray[i].username) {
      document.getElementById("psigus").innerHTML = "Tài khoản đã tồn tại";
      signupFlag = false;
      break;
    }else document.getElementById("psigus").innerHTML = "";
  }

  if (repassword != password) {
    document.getElementById("presigpas").innerHTML =
      "Mật khẩu khoong chính xác";
    signupFlag = false;
  } else document.getElementById("presigpas").innerHTML = "";
  
  if(!addressRegex.test(address)){
    document.getElementById("paddress").innerHTML =
    '"số nhà "+ "đường", "phố", "phường" hoặc "xã" + "quận", "huyện", "thành phố" hoặc "tỉnh"';
  signupFlag = false;
} else document.getElementById("paddress").innerHTML = "";
  
  if (phone.length != 10) {
    document.getElementById("pphone").innerHTML = "Sdt không hợp lệ";
    signupFlag = false;
  } else document.getElementById("pphone").innerHTML = "";

  if (!signupFlag) {
    return false;
  }

  var newUser = {
    username: username,
    password: password,
    phone: phone,
    email: email,
    address: address,
  };

  userArray.push(newUser);
  localStorage.setItem("users", JSON.stringify(userArray));
  noti("Dăng ký thành công",0)
  closeSignup();
};

document.getElementById("login-form").onsubmit = function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      var userLogin = users[i];
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      checkLogin();
      closeLogin();
      noti("Đăng Nhập thành công",0)
      return false;
    }
  }
  noti("Đăng nhập thất bại",1);
};

/*sideNavbar*/

function open_sideNav() {
  document.getElementById("modal__overlay").style.display = "block";
  document.getElementById("sideNav").style.width = "400px";
}

function close_sideNav() {
  document.getElementById("modal__overlay").style.display = "none";
  document.getElementById("sideNav").style.width = "0px";
}

/*sideNav__productSide*/

function open_productSide() {
  document.getElementById("sideNav__productSide").style.width = "400px";
}

function close_productSide() {
  document.getElementById("sideNav__productSide").style.width = "0";
}

function showProductInfor(id) {
  let p = document.getElementById("infor__Product");
  p.style.display = "block";
  let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
  for (let i = 0; i < DanhSachSanPham.length; i++) {
    if (DanhSachSanPham[i].id == id) {
      p.innerHTML =
        `
      <div class="Infor__Child"> 
      <div class="close__infor" onclick="closeInfor()">X</div>
      <div class="view__item--left">
      <img src="` +
        DanhSachSanPham[i].image1 +
        `" alt="" />
      </div>
      <div class="view__item--right">
      <h3>` +
        DanhSachSanPham[i].name +
        `</h3>
      <h4>` +
        DanhSachSanPham[i].introduce +
        `</h4>
      <h4>` +
        (DanhSachSanPham[i].price*1000).toLocaleString() +
        `VND</h4>
      <h4>` +
        "Mô Tả:" +
        `</h4>
      <ul>
        <li>` +
        DanhSachSanPham[i].detail1 +
        `</li>
        <li>` +
        DanhSachSanPham[i].detail2 +
        `</li>
        <li>` +
        DanhSachSanPham[i].detail3 +
        `</li>
        <li>` +
        DanhSachSanPham[i].detail4 +
        `</li>
      </ul>
      <div class="view__input">
        <button onclick="quantityDownn()" class="view__sub">-</button>
        <input type="text" name="" id="input__number" value="1" min="1" />
        <button onclick="quantityUpp()" class="view__add">+</button>
      </div>
      <button onclick="addcart(` +
        id +
        `)" class="view__addcart">Thêm vào giỏ hàng</button>
      </div> </div>`;
      break;
    }
  }
}

function closeInfor() {
  document.getElementById("infor__Product").style.display = "none";
}

//ham thong bao success, warning ,0 la success, 1 la warning , 2 la error

function noti(s, n) {
  let check= document.getElementById("noti");
  if(check) check.outerHTML=""
  let noti = ["success", "warning","error"];
  let footer = document.getElementById("footer");
  footer.innerHTML += `<div id="noti"><strong>` + noti[n] + `! </strong>` + s + ` <span onclick="closeNoti()">+</span></div>`;
  document.getElementById("noti").classList.add(noti[n]);
}

function closeNoti() {
  let notiElement = document.getElementById("noti").outerHTML="";
}

function quantityDownn() {
  if (document.getElementById("input__number").value > 1) {
    document.getElementById("input__number").value--;
  }
}

function quantityUpp() {
  document.getElementById("input__number").value++;
}


function capNhatSLGioHang(vitri) {
  for (let i = 0; i < gioHang.length; i++) {
    if (i == vitri) {
      gioHang[i][4] += parseInt(document.getElementById("input__number").value);
      break;
    }
  }
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
}

//check sản phẩm đã có trong giỏ hàng chưa
function checkGioHang(cardNAME, cardINTRODUCE) {
  let vitri = -1;
  for (let i = 0; i < gioHang.length; i++) {
    if (gioHang[i][1] == cardNAME && gioHang[i][2] == cardINTRODUCE) vitri = i;
  }
  return vitri;
}

let gioHang = [];
if (localStorage.getItem("gioHang"))
  gioHang = JSON.parse(localStorage.getItem("gioHang"));
function addcart(id) {
  let quantity = document.getElementById("input__number").value;
  let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
  for (let i = 0; i < DanhSachSanPham.length; i++) {
    if (DanhSachSanPham[i].id == id) {
      let sp = new Array(
        DanhSachSanPham[i].image1,
        DanhSachSanPham[i].name,
        DanhSachSanPham[i].introduce,
        DanhSachSanPham[i].price,
        parseInt(quantity)
      );
      if (
        checkGioHang(DanhSachSanPham[i].name, DanhSachSanPham[i].introduce) !=
        -1
      ) {
        capNhatSLGioHang(
          checkGioHang(DanhSachSanPham[i].name, DanhSachSanPham[i].introduce)
        );
      } else {
        gioHang.push(sp);
      }
      localStorage.setItem("gioHang", JSON.stringify(gioHang));
      noti("thêm sản phầm thành công",0)
      document.getElementById("infor__Product").style.display = "none";
      break;
    }
  }
}
