let statuss = ["chưa xử lý", "đã xác nhận", "đã giao thành công", "đã hủy"];
let MenuCart = ["Giỏ Hàng", "Hóa Đơn", "Lịch sử"];

function loadDataCart(){
  showMenu(); 
  showMenuCart();
  loadMenuCart();
  checkLogin(); 
}

function showMenuCart() {
  var ul = document.getElementById("MenuCart");
  var li = "";
  for (var i = 0; i < MenuCart.length; i++) {
    li +=
      '<li><a href="cart.html?' +
      MenuCart[i].toLowerCase() +
      '">' +
      MenuCart[i] +
      "</a></li>";
  }
  ul.innerHTML = li;
}

function loadMenuCart(){
  var url = document.location.href;
  var tmp = url.split("?");
  var type;
  if (tmp[1]) {
    type = tmp[1].split("#")[0];
  }
  type= decodeURIComponent(type);
  if(!tmp[1] || type == MenuCart[0].toLowerCase())  showCart();
  else if(type == MenuCart[1].toLowerCase()) showHoaDon();
  else showHistoryCart();
}


function pay() {
  let cart = JSON.parse(localStorage.getItem("gioHang")) || [];
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
  if (localStorage.getItem("un")) {
    if (!cart || cart.length === 0) {
      // Kiểm tra giỏ hàng có sản phẩm hay không
      noti("Không có sản phẩm trong giỏ hàng",1);
      return;
    }
    let Bill = {
      username: localStorage.getItem("un"),
      status: statuss[0],
      date: new Date().toDateString(),
      cart: cart,
    };
    ArrayBill.push(Bill);
    localStorage.setItem("ArrayBill", JSON.stringify(ArrayBill));
    localStorage.removeItem("gioHang");
    noti("dat hang thanh cong",0);
    showCart();
  } else {
    noti("ban phai dang nhap moi mua duoc hang",1);
  }
}

//Tăng số lượng và tính lại cột Total
function quantityUp(x) {
  let vitriItem = x.parentNode.children[0].value;
  let soluongNew = 0,
    sumP = 0;
  for (let i = 0; i < gioHang.length; i++) {
    if (parseInt(vitriItem) == i) {
      soluongNew = parseInt(gioHang[i][4]) + 1;
      gioHang[i][4] = parseInt(gioHang[i][4]) + 1;
      sumP += parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
      break;
    }
  }
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  x.parentNode.children[2].value = soluongNew;
  x.parentNode.parentNode.children[4].innerText = sumP.toLocaleString();
  totalPrice();
}

//Giảm số lượng và tính lại cột Total
function quantityDown(x) {
  let vitriItem = x.parentNode.children[0].value;
  let soluongNew = 0,
    sumP = 0;
  for (let i = 0; i < gioHang.length; i++) {
    if (parseInt(vitriItem) == i) {
      if (parseInt(gioHang[i][4]) > 1) {
        soluongNew = parseInt(gioHang[i][4]) - 1;
        gioHang[i][4] = gioHang[i][4] - 1;
        sumP = parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
      } else {
        soluongNew = 1;
        sumP = parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
      }
      break;
    }
  }
  x.parentNode.children[2].value = soluongNew;
  x.parentNode.parentNode.children[4].innerText = sumP.toLocaleString();
  totalPrice();
}

//thay đổi số lượng bằng thao tác onchange và cập nhật lại cột total và dòng thành tiền
function totalItem(x) {
  let vitriItem = x.parentNode.children[0].value;
  for (let i = 0; i < gioHang.length; i++) {
    if (parseInt(vitriItem) == i) {
      if (x.value > 1) {
        gioHang[i][4] = x.value;
        sum = parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
      } else {
        x.value = 1;
        gioHang[i][4] = x.value;
        sum = parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
      }
    }
  }
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  x.parentNode.parentNode.children[4].innerText = sum.toLocaleString();
  totalPrice();
}

//Hàm chỉnh lại dòng thành tiền
function totalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < gioHang.length; i++) {
    totalPrice += parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
  }
  document.querySelector(".totalPrice").innerText = totalPrice.toLocaleString();
}

//Xóa 1 sản phẩm trong giỏ hàng
function deleteItemCart(x) {
  let vitriItem = x.parentNode.parentNode.children[3].children[0].value;
  for (let i = 0; i < gioHang.length; i++) {
    if (parseInt(vitriItem) == i) {
      x.parentNode.remove();
      gioHang.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
  totalPrice();
  showCart();
}

//tạo ra giỏ hàng và show ra màn hình
function showCart() {
  document.getElementById("MenuCart").children[0].classList.add("activem");
  let gioHang = [];
  if (localStorage.getItem("gioHang"))
    gioHang = JSON.parse(localStorage.getItem("gioHang"));
  let html = " ";
  if (
    localStorage.getItem("gioHang") == null ||
    localStorage.getItem("gioHang") == "[]"
  ) {
    html += `<tr><td colspan="6" style="height:60px;">Không có sản phẩm nào trong giỏ hàng</td></tr>`;
  }
  else {
    let sum = 0;
    for (let i = 0; i < gioHang.length; i++) {
      sum += gioHang[i][3] * gioHang[i][4];
      html +=
        `<tr>
            <td style="display: flex;align-items: center;"><img src="` +
        gioHang[i][0] +
        `" alt="">` +
        gioHang[i][1] +
        `</td>
            <td><p><span class="introduce_product">` +
        gioHang[i][2] +
        `</span></p></td>
            <td><p><span>` +
        gioHang[i][3] +
        ".000" +
        `</span><sup>VNĐ</sup></p></td>
            <td>
            <input id="inputHidden" type="hidden" value="` +
        i +
        `">
            <button onclick="quantityDown(this)" class="upQuantity"><i class="fa fa-minus"></i></button>
            <input onchange="totalItem(this)" type="text" id="inputCart" value="` +
        gioHang[i][4] +
        `" min="0">
            <button onclick="quantityUp(this)" class="downQuantity"><i class="fa fa-plus"></i></button>
            </td>
            <td class="totalTr">` +
        (gioHang[i][3] * gioHang[i][4] *1000).toLocaleString() +
        `</td>
            <td><span onclick="deleteItemCart(this)">Xóa</span></td>
            </tr>`;
      if (i == gioHang.length - 1)
        html +=
          `<tr style="height:40px;font-size:14px;"><td colspan="6">THÀNH TIỀN:<span class="totalPrice">` +
          (sum*1000).toLocaleString() +
          `</span></td></tr>`;
    }
    document.getElementById("pay").innerHTML= `<div class="agree__order">
        <button onclick="pay()">Mua Ngay ->></button>
      </div>`;
  }
  
  document.getElementById("myCart").innerHTML = html;
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
}

function showHoaDon() {
  let un= localStorage.getItem("un") || '';
  document.getElementById("nav__table").innerHTML="Xem Lại Hóa Đơn";
  document.getElementById("MenuCart").children[1].classList.add("activem");
  let kq = "";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
  document.getElementById("myhead").innerHTML = `<tr>
          <th>Stt</th>
          <th>ngay</th>
          <th>nguoi mua</th>
          <th>trang thai</th>
          <th>xem chi tiet</th>
        </tr>`;

  for (let i = ArrayBill.length-1; i >=0; i--) {
    if(ArrayBill[i].username == un){
      kq +=
        `<tr>
            <td>` +
        i +
        `</td>
            <td>` +
         ArrayBill[i].date +
        `</td>
            <td>` +
        ArrayBill[i].username +
        `</td>
            <td>` +
        ArrayBill[i].status +
        `</td>
            <td><button onclick="detail(`+i+`)">...</button></td>
          </tr>`;
    }
  }
  document.getElementById("myCart").innerHTML = kq;
}

function detail(id) {
  document.getElementById("modal__detail").style.display = "block";
  // document.getElementById("detailBill").style.display = "block";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill"));
  var kq = ``;
  kq +=
    `
          <div class="close__infor" onclick="closeDatail()">X</div>
          <table>
          <thead id="myhead">
            <tr>
              <th>Product</th>
              <th>Introduce</th>
              <th>Price</th>
              <th class="number__quantity">Number</th>
              <th class="number__total">Total</th>
            </tr>
            </thead>
            <tbody id="myCart">`
  for (let i = 0; i < ArrayBill[id].cart.length; i++) {
    kq+= `
    
            <tr>
              <td style="display: flex;align-items: center;"><img src="` +
    ArrayBill[id].cart[i][0] +
    `" alt="">` +
    ArrayBill[id].cart[i][1] +
    `</td >
            <td>` +
    ArrayBill[id].cart[i][2] +
    `</td >
            <td><p><span>` +
    ArrayBill[id].cart[i][3] +
    ".000" +
    `</span><sup>VNĐ</sup></p></td>
      <td>`+ArrayBill[id].cart[i][4]+`</td>
      <td class="totalTr">` +
    (ArrayBill[id].cart[i][3] * ArrayBill[id].cart[i][4]*1000).toLocaleString() +
    `</td>
            </tr>`;
  }
  kq+= `</tbody>
        </table>`;
            
  document.getElementById("detailBill").innerHTML = kq;
}
function closeDatail() {
  document.getElementById("modal__detail").style.display = "none";
}

function showHistoryCart() {
  let un= localStorage.getItem("un") || '';
  document.getElementById("nav__table").innerHTML="Lịch Sử Mua Hàng";
  document.getElementById("MenuCart").children[2].classList.add("activem");
  let kq = "";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
  document.getElementById("myhead").innerHTML = `<tr>
          <th>ngay</th>
          <th>Sản phẩm</th>
          <th>Tên</th>
          <th>so luong</th>
          <th>gia</th>
          <th>Tong gia</th>
          <th>trang thai</th>
         
        </tr>`;

  for (let i = ArrayBill.length-1; i >=0; i--) {
    if(ArrayBill[i].username == un){
      for (let j = 0; j < ArrayBill[i].cart.length; j++) {
        kq +=
        `<tr>
          <td>` +
          ArrayBill[i].date +
          `</td>
          <td style="display: flex;align-items: center;"><img src="` +
    ArrayBill[i].cart[j][0] +
    `" alt="">` +
    ArrayBill[i].cart[j][1] +
    `</td>
          <td>` +
          ArrayBill[i].cart[j][2] +
          `</td>
          <td>` +
          ArrayBill[i].cart[j][4] +
          `</td>
          <td>` +
          (parseInt(ArrayBill[i].cart[j][3])*1000).toLocaleString() +
          ` VND</td>
          <td>` +
          (ArrayBill[i].cart[j][3]*ArrayBill[i].cart[j][4]*1000).toLocaleString() +
          `</td>
          <td>` +
          ArrayBill[i].status +
          `</td>
        </tr>`;
      }
    }
  }
  document.getElementById("myCart").innerHTML = kq;
}



