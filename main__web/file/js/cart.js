//-------------------------onload trang cart.html-------------------------------------//
let MenuCart = ["Giỏ Hàng", "Hóa Đơn", "Lịch sử"];

function loadDataCart() {
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

function loadMenuCart() {
    var url = document.location.href;
    var tmp = url.split("?");
    var type;
    if (tmp[1]) {
        type = tmp[1].split("#")[0];
    }
    type = decodeURIComponent(type);
    if (!tmp[1] || type == MenuCart[0].toLowerCase()) showCart();
    else if (type == MenuCart[1].toLowerCase()) showHoaDon();
    else showHistoryCart();
}
//-------------------------------------------trang giỏ hàng------------------------------------//
// hàm mua ngay
function pay() {
    if (localStorage.getItem("userLogin")) {
        const case__payment = document.getElementById("case__payment");
        case__payment.style.display = "block";
        if (localStorage.getItem("gioHang"))
            Transaction__payment();
        showCart();
    } else {
        noti("ban phai dang nhap moi mua duoc hang", 1);
    }
}

// Tăng số lượng và tính lại cột Total
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

// Giảm số lượng và tính lại cột Total
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
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    x.parentNode.children[2].value = soluongNew;
    x.parentNode.parentNode.children[4].innerText = sumP.toLocaleString();
    totalPrice();
}

// Thay đổi số lượng bằng thao tác onchange và cập nhật lại cột total và dòng thành tiền
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

// Hàm chỉnh lại dòng thành tiền
function totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < gioHang.length; i++) {
        totalPrice += parseInt(gioHang[i][3]) * parseInt(gioHang[i][4]) * 1000;
    }
    document.querySelector(".totalPrice").innerText = totalPrice.toLocaleString();
}

// Xóa 1 sản phẩm trong giỏ hàng
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
        (gioHang[i][3] * gioHang[i][4] * 1000).toLocaleString() +
        `</td>
            <td><span onclick="deleteItemCart(this)">Xóa</span></td>
            </tr>`;
      if (i == gioHang.length - 1)
        html +=
          `<tr style="height:40px;font-size:14px;"><td colspan="6">THÀNH TIỀN:<span class="totalPrice">` +
          (sum * 1000).toLocaleString() +
          `</span></td></tr>`;
    }
    document.getElementById("pay").innerHTML = `<div class="agree__order">
        <button onclick="pay()">Mua Ngay ->></button>
      </div>`;
  }

  document.getElementById("myCart").innerHTML = html;
  localStorage.setItem("gioHang", JSON.stringify(gioHang));
}

//---------------------------------------trang hóa đơn------------------------------------------//
// hàm show hóa đơn
function showHoaDon() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) || '';
  document.getElementById("nav__table").innerHTML = "Xem Lại Hóa Đơn";
  document.getElementById("MenuCart").children[1].classList.add("activem");
  let kq = "";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
  document.getElementById("myhead").innerHTML = `<tr>
          <th>Mã hóa đơn</th>
          <th>ngày</th>
          <th>Tên người nhận</th>
          <th>Tên tài khoản</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Ghi chú</th>
          <th>Tổng giá</th>
          <th>trạng thái</th>
          <th>xem chi tiết</th>
        </tr>`;

  for (let i = ArrayBill.length - 1; i >= 0; i--) {
    if (ArrayBill[i].username == userLogin.username) {
      let diaChi= ArrayBill[i].location[0];
      if(diaChi){
          diaChi= ArrayBill[i].location[0].street + " " + ArrayBill[i].location[0].ward +" "+ ArrayBill[i].location[0].district +" " + ArrayBill[i].location[0].city;
      }
      else diaChi="";
      let note= ArrayBill[i].note;
      if(!note) note= "Không có ghi chú";
      kq +=
        `<tr>
            <td>M` +
        ArrayBill[i].index +
        `</td>
            <td>` +
        ArrayBill[i].date +
        `</td>
            <td>` +
        ArrayBill[i].name +
        `</td>
        <td>` +
        ArrayBill[i].username +
        `</td>
        <td>` +
        diaChi +
        `</td>
        <td>` +
        ArrayBill[i].phone +
        `</td>
        <td>` +
        note +
        `</td>
         <td>` +
        (ArrayBill[i].sum*1000).toLocaleString() +
        ` VND</td>
         <td>` +
        ArrayBill[i].status +
        `</td>
            <td><button style="width: unset" onclick="detail(`+ i + `)">Chi tiết</button></td>
          </tr>`;
    }
  }
  if(kq == ""){
    kq = `<tr><td style="height:60px" colspan="10"> Không có hóa đơn nào </td></tr>`;
  }
  document.getElementById("myCart").innerHTML = kq;
}
// xem chi tiết từng hóa đơn
function detail(id) {
  document.getElementById("modal__detail").style.display = "block";
  // document.getElementById("detailBill").style.display = "block";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill"));
  var kq = ``;
  kq +=
    `
          <div class="close__infor" onclick="closeDatail()">+</div>
          <table>
          <thead id="myhead">
            <tr>
              <th>Sản phẩm</th>
              <th>Tên</th>
              <th>Giá</th>
              <th class="number__quantity">Số lượng</th>
              <th class="number__total">Tổng giá</th>
            </tr>
            </thead>
            <tbody id="myCart">`
  for (let i = 0; i < ArrayBill[id].cart.length; i++) {
    kq += `
    
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
      <td>`+ ArrayBill[id].cart[i][4] + `</td>
      <td class="totalTr">` +
      (ArrayBill[id].cart[i][3] * ArrayBill[id].cart[i][4] * 1000).toLocaleString() +
      ` VNĐ</td>
            </tr>`;
  }
  kq += `</tbody>
        </table>`;

  document.getElementById("detailBill").innerHTML = kq;
}
// đóng xem chi tiết
function closeDatail() {
  document.getElementById("modal__detail").style.display = "none";
}

//---------------------------------------------------trang lịch sử mua hàng--------------------------------------------//
// xem lại lịch sử mua hàng
function showHistoryCart() {
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) || '';
  document.getElementById("nav__table").innerHTML = "Lịch Sử Mua Hàng";
  document.getElementById("MenuCart").children[2].classList.add("activem");
  let kq = "";
  let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
  document.getElementById("myhead").innerHTML = `<tr>
          <th>Ngày</th>
          <th>Sản phẩm</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Tổng Giá</th>
          <th>Trạng thái</th>
        </tr>`;

  for (let i = ArrayBill.length - 1; i >= 0; i--) {
    if (ArrayBill[i].username == userLogin.username) {
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
          (parseInt(ArrayBill[i].cart[j][3]) * 1000).toLocaleString() +
          ` VND</td>
          <td>` +
          ArrayBill[i].cart[j][4] +
          `</td>
          <td>` +
          (ArrayBill[i].cart[j][3] * ArrayBill[i].cart[j][4] * 1000).toLocaleString() +
          ` VNĐ</td>
          <td>` +
          ArrayBill[i].status +
          `</td>
        </tr>`;
      }
    }
  }
  if(kq == ""){
    kq = `<tr><td style="height:60px" colspan="7"> Không có sản phẩm nào </td></tr>`;
  }
  document.getElementById("myCart").innerHTML = kq;
}
