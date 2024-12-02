//-------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------Trang ADMIN-----------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//



//-------------------------------Trang sản phẩm---------------------------------------------------------------------------//
let DanhSachSanPham = JSON.parse(localStorage.getItem("product")) || [];
var menuList = ["tất cả","GUNDAM","MÔ HÌNH TĨNH","FIGURE-RISE","DỤNG CỤ","DRAGON BALL","FIGURE",];
// tạo lọc sản phẩm
function createFilterProducts() {
    let html='';
    html=`<h2>TÌM KIẾM SẢN PHẨM</h2>`;
    html += `   <div id=searchP ><i class="fa-solid fa-magnifying-glass"></i><input id="searchInp" type="text" placeholder="Tìm kiếm sản phẩm"></div>
                <div id="locSanPham"><span id="sta__sta">Loại sản phẩm
                <select style="height:40px" name="" id="type__product-option">`
    for (let i = 0; i < menuList.length; i++) {
        html += `<option>`+menuList[i]+`</option>`  
    }
    html += `</select></span></div>
            <div class="Price__Products">
            <h3>Giá </h3>
            <input id="min__search" placeholder="Từ" type="number" />
            <h3> -</h3>
            <input id="max__search" placeholder="Đến" type="number" />
            <h3>nghìn</h3>
            </div>`;
    html+=`<button type="button" onclick="filterProducts()" id="button__filterBill">TÌM</button>`;
    html+=`<button type="button" onclick="showPageProduct()" id="button__filterBill">Tải lại</button>`;
    document.getElementById("filter__Products").innerHTML = html;
}

// lọc sản phẩm
function filterProducts(){
    let s = document.getElementById("searchInp").value.toLowerCase();
    let type = document.getElementById("type__product-option").value.toLowerCase();
    let min = document.getElementById("min__search").value;
    min = min === "" ? 0 : parseFloat(min);
    let max = document.getElementById("max__search").value;
    max = max === "" ? 100000 : parseFloat(max);
    let array = [];
    let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        if (DanhSachSanPham[i].introduce.toLowerCase().includes(s) &&   DanhSachSanPham[i].price >= min && DanhSachSanPham[i].price <= max) {
          array.push(DanhSachSanPham[i]);
        }
    }
    if (type != "tất cả") {
      for (let i = 0; i < array.length; i++) {
        if (!array[i].name.toLowerCase().includes(type)) {
          array.splice(i, 1);
          i--;
        }
      }
    }
    showArrayProductFil(array);
}

// show sản phẩm vừa lọc
function showArrayProductFil(array) {
    let HTML = `<button id="addP" onclick="showInputAddProduct()">Thêm sản phẩm</button>`
                
    let nodeContainerRightCard = document.querySelector(".card__items");
    for (let i = 0; i < array.length; i++) {
        let htmlSanPham = showProduct(array[i]);
        HTML = HTML + htmlSanPham;
    }
    if(array.length == 0) HTML=`<img src="./file/image/img__home/img5.jpg" alt="" style="width:400px; margin:150px">`;
    nodeContainerRightCard.innerHTML = HTML;
}
 // show trang sản phẩm
function showArrayProduct() {
    createFilterProducts()
    let HTML = `<button id="addP" onclick="showInputAddProduct()">Thêm sản phẩm</button>`
                
    let nodeContainerRightCard = document.querySelector(".card__items");
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        let htmlSanPham = showProduct(DanhSachSanPham[i]);
        HTML = HTML + htmlSanPham;
    }
    if(DanhSachSanPham.length == 0) HTML=`<img src="./file/image/img__home/img5.jpg" alt="" style="width:400px; margin:150px">`;
    nodeContainerRightCard.innerHTML = HTML;
}
function showProduct(sanPham) {
    let id = sanPham.id;
    html = ''
    html += `<div class="card__item">
     <div class="card__item--left">
     <img src="` + sanPham.image1 + `" alt="">
     </div>
     <div class="card__item--middle">
     <p class="card__name">` + sanPham.name + `</p>
     <p class="card__introduce">`+ sanPham.introduce + `</p>
     </div>
     <div class="card__item--right">
     <p><span>` + (sanPham.price * 1000).toLocaleString() + ` <sup>VNĐ</sup></span></p>
     <button onclick="showInputChangeProduct(` + id + `)"><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
     <button onclick="deleteP(` + id + `)"><i class="fa fa-trash" aria-hidden="true"></i></button>
     </div>
     </div>`
    return html;
}

function soluongProduct() {
    if(!localStorage.getItem("product")||localStorage.getItem("product")=="[]"){
        document.querySelector("#soluongProduct").innerText = `0`;
    }
    else{
        let DanhSachSanPham=JSON.parse(localStorage.getItem("product"));
        document.querySelector("#soluongProduct").innerText=DanhSachSanPham.length;
    }
}
function soluongUser() {
    if(!localStorage.getItem("users")||localStorage.getItem("users")=="[]"){
        document.querySelector("#soluongUser").innerText = `0`;
    }
    else{
        let DanhSachKhachHang=JSON.parse(localStorage.getItem("users"));
        document.querySelector("#soluongUser").innerText = DanhSachKhachHang.length;
    }
}
function soluongDoanhthu() {
    if (localStorage.getItem("ArrayBill")) {
        let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
        sum = 0;
        for (let i = 0; i < DanhSachBill.length; i++) {
            let j = 0;
            while (j < DanhSachBill[i].cart.length) {
                sum += DanhSachBill[i].cart[j][3] * DanhSachBill[i].cart[j][4]*1000;
                j++;
            }
        }
        document.querySelector("#soluongDoanhthu").innerText = sum.toLocaleString();
    }
    else {
        document.querySelector("#soluongDoanhthu").innerText = `0`;
    }
}
function onloadAdmin() {
    soluongProduct();
    soluongUser();
    soluongDoanhthu();
}
//show trang chủ
function showpageMain() {
    document.querySelector("#formProducts").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector(".container__right--main").style.display = "block";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    onloadAdmin();
    toMau();
}

//show trang sản phẩm
function showPageProduct() {
    document.querySelector("#formProducts").style.display = "flex";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    showArrayProduct();
    toMau();
}

//-----------------------------------------------THÊM SẢN PHẨM----------------------------------------------

//Load file ảnh 1 thêm sản phẩm
let recentImg1;
function chooseFileimg1(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgPreview1__addP').src = e.target.result;
            recentImg1 = reader.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}
//Load file ảnh 2 thêm sản phẩm 
let recentImg2;
function chooseFileimg2(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgPreview2__addP').src = e.target.result;
            recentImg2 = reader.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//Đóng khung input THÊM SẢN PHẨM
let nodeTemp = document.querySelector(".contain__addP--products");
let nodeClose = nodeTemp.querySelector(".fa-window-close");
nodeClose.addEventListener("click", function () {
    document.querySelector(".container__addP--products").style.display = "none";
})

//Mở khung input THÊM SẢN PHẨM
function showInputAddProduct() {
    document.querySelector(".container__addP--products").style.display = "block";
}

//đẩy sản phẩm vào localStorage và thêm vào trang bán hàng, trang admin
function addProduct() {
    let idtemp = DanhSachSanPham[0].id + 1;
    let textDetail1 = document.querySelector("#detail1__addP");
    let textDetail2 = document.querySelector("#detail2__addP");
    let textDetail3 = document.querySelector("#detail3__addP");
    let textDetail4 = document.querySelector("#detail4__addP");
    let textName = document.querySelector("#name__addP");
    let textIntroduce = document.querySelector("#introduce__addP");
    let textPrice = document.querySelector("#price__addP");
    if ((document.querySelector("#imgPreview1__addP").src).includes("html") || (document.querySelector("#imgPreview2__addP").src).includes("html")) {
        customAlert("Không có hình ảnh !", "warning");
        return false;
    }
    if(textName.value==""||!isNaN(Number(textName.value))){
        customAlert("Hãy nhập lại tên sản phẩm !","warning");
        return false;
    }
    if (isNaN(Number(textPrice.value))||textPrice.value=="") {
        customAlert("Giá không hợp lệ !", "warning");
        return false;
    }
    if (textIntroduce.value == "" || textDetail1.value == "" || textDetail2.value == "" || textDetail3.value == "" || textDetail4.value == "") {
        customAlert("Bạn chưa nhập đủ nội dung !", "warning");
        return false;
    }
    let productTemp = {
        id: idtemp,
        image1: recentImg1,
        image2: recentImg2,
        detail1: textDetail1.value,
        detail2: textDetail2.value,
        detail3: textDetail3.value,
        detail4: textDetail4.value,
        name: textName.value,
        introduce: textIntroduce.value,
        price: textPrice.value,
    }
    DanhSachSanPham.unshift(productTemp);
    localStorage.setItem("product", JSON.stringify(DanhSachSanPham));
    showArrayProduct();
    customAlert("Thêm sản phẩm thành công ", "success")
}

//Hiện khung thông báo thêm sản phẩm thành công hay thất bại
function customAlert(message, type) {
    if (type == "success")
        document.querySelector(".containAlert").style.backgroundColor = '#D2B48C';
    if (type == "warning")
        document.querySelector(".containAlert").style.backgroundColor = '#D2B48C';
    document.querySelector(".containAlert").innerHTML = message + `<button id="button__Alert" onclick="closeAlert()">OK</button>`;
    document.querySelector(".customAlert").style.display = "block";
    setTimeout(function () {
        document.querySelector(".customAlert").style.display = "none";
    }, 2500)
}

//khi click vào button OK sẽ đóng khung thông báo Alert 
function closeAlert() {
    document.querySelector(".customAlert").style.display = "none";
}



//--------------------------------------------------------------XÓA SẢN PHẨM--------------------------------------------------------------------
//Xóa sản phẩm
function deleteP(id) {
    for (var i = 0; i < DanhSachSanPham.length; i++) {
        if (DanhSachSanPham[i].id == id) {
            if (confirm('Bạn có muốn xóa sản phẩm này?')) {
                DanhSachSanPham.splice(i, 1);
                noti("Đã xóa thành công",0);
                break;
            }
        }
    }
    localStorage.setItem("product", JSON.stringify(DanhSachSanPham));
    showArrayProduct();
}


//-----------------------------------------------------------------SỬA THÔNG TIN SẢN PHẨM ----------------------------------------------------

//load file ảnh 1 sửa sản phẩm
function chooseFile1(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgPreview1__changeP').src = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//load file ảnh 2 sửa sản phẩm
function chooseFile2(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgPreview2__changeP').src = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//Đóng khung input sửa sản phẩm
function closeshowInputChangeProduct() {
    document.querySelector(".container__changeP--products").style.display = "none";
}

//Mở khung input sửa sản phẩm có chứa thông tin cũ sản phẩm
function showInputChangeProduct(id) {
    document.querySelector(".container__changeP--products").style.display = "block";
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        if (DanhSachSanPham[i].id == id) {
            document.querySelector("#imgPreview1__changeP").src = DanhSachSanPham[i].image1;
            document.querySelector("#imgPreview2__changeP").src = DanhSachSanPham[i].image2;
            document.querySelector(".input__changeP--name input").value = DanhSachSanPham[i].name;
            document.querySelector(".input__changeP--introduce input").value = DanhSachSanPham[i].introduce;
            document.querySelector(".input__changeP--price input").value = DanhSachSanPham[i].price;
            document.querySelector("#detail1__changeP").value = DanhSachSanPham[i].detail1;
            document.querySelector("#detail2__changeP").value = DanhSachSanPham[i].detail2;
            document.querySelector("#detail3__changeP").value = DanhSachSanPham[i].detail3;
            document.querySelector("#detail4__changeP").value = DanhSachSanPham[i].detail4;
            //nếu click vào button BỎ ẢNH sẽ loại bỏ ảnh 1 cũ
            document.querySelector(".button__changeIMG1").addEventListener("click", function () {
                setIMG1();
            })
            //nếu click vào sẽ loại bỏ ảnh 2 cũ
            document.querySelector(".button__changeIMG2").addEventListener("click", function () {
                setIMG2();
            })
            //xóa sự kiện click cũ trước khi thực hiện sự kiện click mới
            document.querySelector(".button__changeP").replaceWith(document.querySelector(".button__changeP").cloneNode(true));
            //thêm sự kiện click vào button LƯU sẽ cập nhật lại thông tin sản phẩm
            document.querySelector(".button__changeP").addEventListener("click", function () {
                saveChangeProduct(i);
            })
            return;
        }
    }
}

//Loại bỏ ảnh 1
function setIMG1() {
    document.querySelector("#imgPreview1__changeP").src = " ";
}

//loại bỏ ảnh 2
function setIMG2() {
    document.querySelector("#imgPreview2__changeP").src = " ";
}

//Lưu thông tin sau khi sửa
function saveChangeProduct(i) {
    if(document.querySelector("#imgPreview2__changeP").src.includes("html")||document.querySelector("#imgPreview1__changeP").src.includes("html")){
        customAlert("Không có hình ảnh !", "warning");
        return false;
    }
    if(document.querySelector(".input__changeP--name input").value==""||!isNaN(Number(document.querySelector(".input__changeP--name input").value))){
        customAlert("Tên không hợp lệ !","warning");
        return false;
    }
    if(isNaN(Number(document.querySelector(".input__changeP--price input").value))||document.querySelector(".input__changeP--price input").value==""){
        customAlert("Giá không hợp lệ ! ","warning");
        return false;
    }
    if(document.querySelector("#detail1__changeP").value==""||document.querySelector("#detail2__changeP").value==""
       ||document.querySelector("#detail3__changeP").value==""||document.querySelector("#detail4__changeP").value==""
       ||document.querySelector(".input__changeP--introduce input").value==""){
        customAlert("Bạn chưa nhập đủ nội dung !","warning");
        return false;
    }
    DanhSachSanPham[i].image1 = document.querySelector("#imgPreview1__changeP").src;
    DanhSachSanPham[i].image2 = document.querySelector("#imgPreview2__changeP").src;
    DanhSachSanPham[i].name = document.querySelector(".input__changeP--name input").value;
    DanhSachSanPham[i].introduce = document.querySelector(".input__changeP--introduce input").value;
    DanhSachSanPham[i].price = document.querySelector(".input__changeP--price input").value;
    DanhSachSanPham[i].detail1 = document.querySelector("#detail1__changeP").value;
    DanhSachSanPham[i].detail2 = document.querySelector("#detail2__changeP").value;
    DanhSachSanPham[i].detail3 = document.querySelector("#detail3__changeP").value;
    DanhSachSanPham[i].detail4 = document.querySelector("#detail4__changeP").value;
    localStorage.setItem("product", JSON.stringify(DanhSachSanPham));
    noti("lưu thành công",0);
    showArrayProduct();
    document.querySelector(".container__changeP--products").style.display = "none";
}
//click vào đơn hàng mở ra trang đơn hàng
function showPageBill() {
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formProducts").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formBill").style.display = "flex";
    document.querySelector("#formRevenue").style.display = "none";
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
    createFilterBill();
    showArrayBill(DanhSachBill);
    toMau();
}

//Đóng phần xem chi tiết đơn hàng
function closeViewDonHang() {
    document.querySelector(".modal__viewDonHang").style.display = "none";
}

function showArrayBill(arr) {
    let html = "";
    if (!localStorage.getItem("ArrayBill") || localStorage.getItem("ArrayBill") == "[]") {
        html = `<thead id="theadBill"><th>STT</th><th>Tên khách hàng</th><th>Địa chỉ</th><th>Thời gian</th><th>Trạng thái</th><th>Chi tiết giỏ hàng</th></thead>
            <tbody id="tbodyBill"><tr><td colspan="6">Không có đơn hàng nào !</td></tr></tbody>`;
    }
    else {
        html = `<thead id="theadBill">
                <th>Mã đơn hàng</th>
                <th>Tên người nhận</th>
                <th>Tên tài khoản</th>
                <th>Địa chỉ</th>
                <th>Phương thức</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Chi tiết đơn hàng</th>
            </thead>
            <tbody id="tbodyBill">`;
        for (let i = arr.length-1; i >= 0; i--) {
            let HTMLbill = showBill(arr[i], i);
            html = html + HTMLbill;
        }
        html = html + `</tbody>`;
    }
    document.querySelector("#tableBill").innerHTML = html;
}

//Show ra tất cả đơn hàng
function showBill(bill, soThuTu) {
    let diaChi= bill.location;
    if(diaChi){
        diaChi= bill.location.street + " " + bill.location.ward +" "+ bill.location.district +" " + bill.location.city;
    }
    else diaChi="";
    let html = '';
    html += `<tr>
        <td>`+ "M"+ bill.index + `</td>
        <td>`+ bill.name + `</td>
        <td>`+ bill.username + `</td>
        <td>`+ diaChi + `</td>
        <td>`+ bill.method + `</td>  
        <td>`+ bill.date + `</td>  
        <td>`+ bill.status + `</td>
        <td style="text-align:center;"><button class="button__viewBill" type="button" style="cursor:pointer;height:30px;" onclick="showDonHang(`+ soThuTu + `)">Chi tiết đơn hàng</button></td>
            </tr>`
    return html;
}

//Show lại chi tiết đơn hàng mà khách đã đặt
let statusa=["chưa xử lý","đã xác nhận","giao hàng thành công","đã hủy"];
function showDonHang(vitri) {
    document.querySelector(".modal__viewDonHang").style.display = "block";
    let html = '';
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
    for (let i = 0; i < DanhSachBill.length; i++) {
        if (vitri == i) {
            let j = 0, sum = 0;
            while (j < DanhSachBill[i].cart.length) {
                sum += (parseInt(DanhSachBill[i].cart[j][3])) * (parseInt(DanhSachBill[i].cart[j][4])) * 1000;
                html += `<tr>
                <td id="info" style="display: flex;align-items: center;"><img style="width:80px;height:80px;" src="`+DanhSachBill[i].cart[j][0]+`" alt=""> `+DanhSachBill[i].cart[j][1] + `</td>
                <td id="info">`+ DanhSachBill[i].cart[j][2] + `</td>
                <td id="info">`+ DanhSachBill[i].cart[j][4] + `</td>
                <td id="info">`+ ((DanhSachBill[i].cart[j][3] * DanhSachBill[i].cart[j][4]) * 1000).toLocaleString() + `</td>
                </tr>`; j++;
                if (j == DanhSachBill[i].cart.length)
                    html += `<tr id="twoChoose">
                           <input type="hidden" value="`+ i + `">
                            <td id="close" onclick="closeViewDonHang()" >CLOSE</td>
                            <td id="savestt" onclick="saveStatus(this)" >LƯU TRẠNG THÁI</td>
                            <td id="sumbill" colspan="2">TỔNG TIỀN : <span>` + sum.toLocaleString() + `</span><sup>VNĐ</sup></td>
                        </tr>`
                    let currentStatus = DanhSachBill[i].status || "chưa xử lý"; 
                    let htmlStatus = `<tr><td colspan="4"><select style="border-radius:50px;" name="" id="changeStt" onchange="changeStatus()">`;
                    for (let k = 0; k < statusa.length; k++) {
                        htmlStatus += `<option value="`+statusa[k]+`"  ${currentStatus === statusa[k] ? "selected" : ""}> `+statusa[k]+` </option>`;
                    }
                    htmlStatus += `</select></td></tr>`;
                    document.getElementById("tfoot__viewDonHang").innerHTML = htmlStatus;
            }
        }
    }
    document.querySelector("#tbody__viewDonHang").innerHTML = html;
    checkStatus();
}

function checkStatus(){
    let changeSTT = document.getElementById("changeStt");
    let saveSTT= document.getElementById("savestt");
    if(document.getElementById("formBill").style.display == "none"){
        changeSTT.style.display= "none";
        saveSTT.onclick=null;
        saveSTT.style.background="white";
        document.getElementById("close").setAttribute("colspan","2");
        saveSTT.innerHTML="";
    }else {
        changeSTT.style.display= "unset";
        saveSTT.innerHTML="LƯU TRẠNG THÁI";
    }
}

//Lấy giá trị thay đổi trạng thái
function changeStatus() {
    let changestt = document.querySelector("#changeStt").value;
    return changestt;
}



//Thay đổi trạng thái đơn hàng
function saveStatus(x) {
    let vitriItem = x.parentNode.children[0].value;
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
    for (let i = 0; i < DanhSachBill.length; i++) {
        if (parseInt(vitriItem) == i) {
            DanhSachBill[i].status = changeStatus();
            alert("Lưu trạng thái thành công ! ");
            break;
        }
    }
    localStorage.setItem("ArrayBill", JSON.stringify(DanhSachBill));
    showArrayBill(DanhSachBill);
}


//tạo ra filter lọc đơn hàng
let statuss = ["tất cả", "chưa xử lý", "đã xác nhận", "giao hàng thành công", "đã hủy"];
function createFilterBill() {
    let html=`<h2 style="text-align:center;">LỌC ĐƠN HÀNG</h2>`
    html += `<div id="locBill"><span id="title__filterStatus" >Trạng thái</span>
    <select style="height:40px;width:160px" id="filter__status--bill"  name="" >`
    for (let i = 0; i < statuss.length; i++) {
        html += `<option value="` + statuss[i] + `">` + statuss[i] + `</option>`
    }
    html+=`</select></div>`
    html+=`<div id=locBill>
             <span>Thời gian</span>
             <input type="date" id="dStart" placeholder="dd/mm/yy" style="width:80px;height:40px;" ">
             <input type="date" id="dEnd" placeholder="dd/mm/yy" style="width:80px;height:40px;" ">
          </div>`
    html += `<div id="locBill"><span id="title__filterAddress">Tỉnh/ Thành</span>
    <select onchange="createDistricts()" style="height:40px;width:140px;" name="" id="filter__city--bill">
        <option value="tất cả"> tất cả </option>`
    for (let i = 0; i < locations.length; i++) {
        html += `<option value="` + locations[i].city + `">` + locations[i].city + `</option>`
    }
    html += `</select></div>`
    html += `<div id="locBill"><span id="title__filterAddress">Quận</span>
    <select style="height:40px;width:200px;" name="" id="filter__district--bill">
        <option value="tất cả"> tất cả </option>`;
    html += `</select></div>`;
    html+=`<button type="button" onclick="filterStatusTimeDistrict()" id="button__filterBill">TÌM</button>`;
    html+=`<button type="button" onclick="showPageBill()" id="button__filterBill">Tải lại</button>`;

    document.querySelector("#filterBill").innerHTML = html;
}



function createDistricts(){
    let city= document.getElementById("filter__city--bill").value || "";
    let html = `<option value="tất cả">tất cả</option>`
    for (let i = 0; i < locations.length; i++) {
        if(locations[i].city == city){
            for (let j = 0; j < locations[i].districts.length; j++) {
                html += `<option value="` + locations[i].districts[j].district + `">` + locations[i].districts[j].district + `</option>`;
            }
            break;
        }
        
    }
    document.getElementById("filter__district--bill").innerHTML = html;
}




//lọc đơn hàng theo trạng thái bill và theo thời gian
function filterStatusTimeDistrict() {
    let filterStt = document.querySelector("#filter__status--bill").value;
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
    let filterCity = document.querySelector("#filter__city--bill").value;
    let filterDis = document.querySelector("#filter__district--bill").value;
    let startD = document.querySelector("#dStart").value;
    let endD = document.querySelector("#dEnd").value;
    let arrayBillOfSTTANDDIS = DanhSachBill.filter(bill => {
        let matchStatus = (filterStt === "tất cả" || bill.status === filterStt);
        let matchDay = true;
        if (startD && endD) {
            matchDay = bill.date >= startD && bill.date <= endD;
        } else if (startD) {
            matchDay = bill.date >= startD;
        } else if (endD) {
            matchDay = bill.date <= endD;
        }
        let matchCity = (filterCity === "tất cả" || (bill.location && bill.location.city === filterCity));
        let matchDistrict = (filterDis === "tất cả" || (bill.location && bill.location.district === filterDis));
        return matchStatus && matchDay && matchCity && matchDistrict;
    });
    if (arrayBillOfSTTANDDIS.length === 0) {
        document.querySelector("#tableBill").innerHTML = `
        <thead id="theadBill">
                <th>STT</th>
                <th>Tên khách hàng</th>
                <th>Địa chỉ</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Chi tiết giỏ hàng</th>
        </thead>
        <tbody>
            <tr><td colspan="6"><img src="./file/image/img_admin/img5.jpg" alt="" style="max-width:100%"></td></tr>
            <tr><td style="text-align:center;font-size:20px;" colspan="6">Không có đơn hàng nào</td></tr>
        </tbody>`;
    } else {
        showArrayBill(arrayBillOfSTTANDDIS);
    }
}


function logOutAdmin() {
    localStorage.removeItem("userLogin");
}














// ----------------------------------------------DANH SACH KHACH HANG--------------------------------------------------------

//Mở trang Khách hàng
function showPageCustomer() {
    document.querySelector("#formCustomer").style.display = "block";
    document.querySelector("#formProducts").style.display = "none";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    showArrayCustomer(DanhSachKhachHang);
    toMau();
}

// Hiển thị danh sách khách hàng
function showArrayCustomer(arr) {
    let html = '';
    if (!localStorage.getItem("users") || localStorage.getItem("users") == "[]") {
        html = `<thead id="theadCustomer"><tr><th>Tên</th><th>Mật khẩu</th><th>Email</th><th>SĐT</th><th>Địa chỉ</th><th>Chức năng</th></tr></thead>
        <tbody><tr><td colspan="6">Không có khách hàng nào !</td></tr></tbody>`
    }
    else {
        document.querySelector("#filterCustomer").innerHTML = `<button type="button" id="button__add--customer" onclick="showInputAddCustomer()">Thêm người dùng</button>`;
        html = ` <thead id="theadCustomer">
                <tr>
                    <th>Mã khách hàng</th>
                    <th>Tên</th>
                    <th>Mật khẩu</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
        <tbody>`;
        for (let i = 0; i < arr.length; i++) {
            let HTML = showCustomer(arr[i], i);
            html = html + HTML;
        }
        html = html + `</tbody>`;
    }
    document.querySelector("#tableCustomer").innerHTML = html;
}


//tạo 1 khách hàng
function showCustomer(customer, index) {
    let html = '';
    html += `<tr>
        <td>KH`+ index + `</td>
        <td>`+ customer.username + `</td>
        <td>`+ customer.password + `</td>
        <td>`+ customer.email + `</td>
        <td>`+ customer.phone + `</td>
        <td style="display:flex;justify-content: center;">
        <input type="hidden" value="`+ index + `">
        <button onclick="showInputEditCustomer(`+ index + `)" type="button" class="button__edit--customer" ><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
        <button onclick="deleteCustomer(`+ index + `)" type="button" class="button__delete--customer" ><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button onclick="${customer.isLocked ? 'unlockUser' : 'lockUser'}(${index})" type="button" class="button__lock--customer">${customer.isLocked ? '<i class="fa-solid fa-user-large-slash" ></i>' : '<i class="fa-solid fa-user-large" aria-hidden="true"></i>'}</button>
        </td>
    </tr>`
    return html;
}

//xóa khách hàng
function deleteCustomer(index) {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    if (confirm("Bạn có chắc chắn xóa không ?")){
        DanhSachKhachHang.splice(index, 1);
        noti("Xóa khách hàng thành công",0);
    }
    localStorage.setItem("users", JSON.stringify(DanhSachKhachHang));
    showArrayCustomer(DanhSachKhachHang);
}

//Khóa người dùng
function lockUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].isLocked = true; // Khóa người dùng
    localStorage.setItem("users", JSON.stringify(users));
    showArrayCustomer(users); // Cập nhật danh sách hiển thị
}

function unlockUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].isLocked = false; // Mở khóa người dùng
    localStorage.setItem("users", JSON.stringify(users));
    showArrayCustomer(users); // Cập nhật danh sách hiển thị
}

//Mở khung thêm người dùng
function showInputAddCustomer() {
    document.querySelector(".container__add--customer").style.display = "block";
}

// Thêm người dùng mới
function addCustomer() {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    let fullnameCustomer = document.querySelector("#fullnameAdd");
    let nameCustomer = document.querySelector("#usernameAdd");
    let pswCustomer = document.querySelector("#passwordAdd");
    let emailCustomer = document.querySelector("#emailAdd");
    let phoneCustomer = document.querySelector("#phoneAdd");
    alert(fullnameCustomer)
    for (let i=0;i< DanhSachKhachHang.length; i++) {
        if (nameCustomer.value === DanhSachKhachHang[i].username) {
            customAlert("Tên đã được sử dụng!", "warning");
            return false; // Tên người dùng trùng lặp
        }
    }
    if (Number(nameCustomer.value) || nameCustomer.value == "") {
        customAlert("Tên không hợp lệ!", "warning");
        return false;
    }
    if ((pswCustomer.value).length < 5) {
        customAlert("Mật khẩu không đủ điều kiện!", "warning");
        return false;
    }
    if (!(emailCustomer.value).includes("@") || emailCustomer.value == "") {
        customAlert("Email không hợp lệ!", "warning");
        return false;
    }
    if (!Number(phoneCustomer.value) || (phoneCustomer.value).length != 10 || phoneCustomer.value[0] != 0) {
        customAlert("Số điện thoại không hợp lệ", "warning");
        return false;
    }
    let usertemp = {
        fullname: fullnameCustomer.value,
        username: nameCustomer.value,
        password: pswCustomer.value,
        email: emailCustomer.value,
        phone: phoneCustomer.value,
        isLocked: false,
    }
    DanhSachKhachHang.push(usertemp);
    localStorage.setItem("users", JSON.stringify(DanhSachKhachHang));
    showArrayCustomer(DanhSachKhachHang);
    customAlert("Thêm khách hàng thành công!", "success")
    closeInputAddCustomer();
}


//Đóng khung thêm người dùng
function closeInputAddCustomer() {
    document.querySelector(".container__add--customer").style.display = "none";
}

//Ktra trùng lặp
function checkDuplicateUsername(newUsername, currentUsername) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let user of users) {
        if (user.username === newUsername && user.username !== currentUsername) {
            return true; // Tên người dùng trùng lặp
        }
    }
    return false; // Không trùng lặp
}

//Mở khung chỉnh sửa người dùng
function showInputEditCustomer(index) {
    document.querySelector(".container__edit--customer").style.display = "block";
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < DanhSachKhachHang.length; i++) {
        if (index == i) {
            let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
            
            document.querySelector("#usernameEdit").value = DanhSachKhachHang[i].username;
            document.querySelector("#passwordEdit").value = DanhSachKhachHang[i].password;
            document.querySelector("#emailEdit").value = DanhSachKhachHang[i].email;
            document.querySelector("#phoneEdit").value = DanhSachKhachHang[i].phone;
            document.querySelector("#save__edit").replaceWith(document.querySelector("#save__edit").cloneNode(true));
            document.querySelector("#save__edit").addEventListener("click", function () {
                let newUsername = document.querySelector("#usernameEdit").value;
                let isDuplicate = DanhSachKhachHang.some((customer, idx) => customer.username === newUsername && idx !== index);

                if (isDuplicate) {
                    customAlert("Tên người dùng đã tồn tại. Vui lòng chọn tên khác","warning");
                    return false;
                } else {
                updateCustomer(index);
            }
        })
            return;
        }
    }
}

function updateCustomer(index) {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    DanhSachKhachHang[index].fullname = document.querySelector("#fullnameEdit").value;
    DanhSachKhachHang[index].username = document.querySelector("#usernameEdit").value;
    DanhSachKhachHang[index].password = document.querySelector("#passwordEdit").value;
    DanhSachKhachHang[index].email = document.querySelector("#emailEdit").value;
    DanhSachKhachHang[index].phone = document.querySelector("#phoneEdit").value;
    if (Number(DanhSachKhachHang[index].username) ) {
        customAlert("Tên không hợp lệ!", "warning");
        return false;
    }
    if(DanhSachKhachHang[index].username == ""){
        customAlert("Bạn chưa nhập tên !", "warning");
        return false;
    }
    if ((DanhSachKhachHang[index].password).length < 5) {
        customAlert("Mật khẩu yếu!", "warning");
        return false;
    }
    if(DanhSachKhachHang[index].password==" "){
        customAlert("Bạn chưa nhập mật khẩu","warning");
        return false;
    }
    if (!DanhSachKhachHang[index].email.includes("@")) {
        customAlert("Email không hợp lệ!", "warning");
        return false;
    }
    if(DanhSachKhachHang[index].email==" "){
        customAlert("Bạn chưa nhập email!", "warning");
        return false;
    }
    if (!Number(DanhSachKhachHang[index].phone) || (DanhSachKhachHang[index].phone).length != 10 || DanhSachKhachHang[index].phone[0] != 0) {
        customAlert("Số điện thoại không hợp lệ", "warning");
        return false;
    }
    localStorage.setItem("users", JSON.stringify(DanhSachKhachHang));
    showArrayCustomer(DanhSachKhachHang);
    noti("lưu thành công",0);
    closeInputEditCustomer();
}


//Đóng khung chỉnh sửa người dùng
function closeInputEditCustomer() {
    document.querySelector(".container__edit--customer").style.display = "none";
}

// -----------------------------Thống kê khách hàng và sản phẩm ---------------------------------------------------------
// mở trang thống kê
function showPageRevenue() {
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formProducts").style.display = "none";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formRevenue").style.display = "flex";
    createFilterRevenue();
    loadStatistics();
    toMau();
}

//tạo lọc thống kê
function createFilterRevenue() {
    let html='';
    html=`<h2>LỌC THỐNG KÊ</h2>`;
    html += `<div id="locThongKe"><span id="sta__sta">Loại thống kê
            <select style="height:40px" name="" id="sta__sta-option">
            <option value="1">Mặt Hàng</option>
            <option value="2">Khách Hàng</option>
            </select></span></div>`
    html += `<div id="locThongKe"><span id="sta__sell">Xếp hạng bán
    <select style="height:40px" name="" id="sta__sell-option" >
    <option value="1">Tất Cả</option>
    <option value="2">Chạy Nhất</option>
    <option value="3">Ế nhất</option>  
    </select></span></div>`;
    html+=`<div id=locThongKe>
             <span>Thời gian</span>
             <input type="date" id="dStartT" style="width:100px;height:40px;" ">
             <input type="date" id="dEndT" style="width:100px;height:40px;" ">
          </div>`
    html+=`<button onclick="loadStatistics()" type="button" id="button__filterRevenue">Tìm</button>`
    html+=`<button onclick="resetLoadStatistics()" type="button" id="button__filterRevenue">Tải lại</button>`
    document.getElementById("filterRevenue").innerHTML = html;
}



function resetLoadStatistics(){
    createFilterRevenue();
    loadStatistics();
}

// lọc thống kê theo thời gian
function filStatisticsTime() {
    let startD = document.getElementById("dStartT").value;
    let endD = document.getElementById("dEndT").value ;
    let ArrayBill=JSON.parse(localStorage.getItem("ArrayBill")) || [];
    let arrayTime = ArrayBill.filter(bill => {
        let matchDay = true;
        if (startD && endD)
            matchDay = bill.date >= startD && bill.date <= endD;
        else if (startD)
            matchDay = bill.date >= startD;
        else if (endD)
            matchDay = bill.date <= endD;
        return matchDay;
    });
    createTotalRvenue(arrayTime);
    return arrayTime;
}

function createTotalRvenue(array){
    let dStartT=document.getElementById("dStartT").value || "tất cả";
    let dEndT= document.getElementById("dEndT").value || "hiện tại";
    let sum= [0,0,0];
    for (let i = 0; i < array.length; i++) {
        sum[0]+= array[i].sum;
        for (let j = 0; j < array[i].cart.length; j++) {
            sum[2]+= array[i].cart[j][4];
            
        }
    }
    let html= `<h2>THỐNG KÊ</h2>
        <h3>Từ: `+dStartT+`</h3>
        <h3>Đến: `+dEndT+`</h3>
        <h3 id="sum__Revenue">Tổng doanh thu: `+(sum[0]* 1000).toLocaleString()+` VND </h3>
        <h3 id="sum__Revenue">Tổng đơn hàng : `+array.length+` </h3>
        <h3 id="sum__Products"></h3>
        <h3 id="sum__numbers">Tổng số lượng sản phẩm đã bán: `+sum[2]+` </h3>
        <img src="./file/image/img_admin/img4.jpg" alt="" style="height:140px; width:100%">`
    document.getElementById("total__Revenue").innerHTML= html;
}

//load trang thống kê
function loadStatistics(){
    let sta= document.getElementById("sta__sta-option").value;
    if(sta == 1){ 
        loadMatHang();
    }
    else{
        loadKhachHang();
    }
}

// load thống kê theo sản phẩm (mặt hàng)
function loadMatHang(){
    let array= filStatisticsTime();
    let arrayMatHang=[];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].cart.length; j++) {
            let k=0;
            while(k < arrayMatHang.length){
                if(arrayMatHang[k][2] == array[i].cart[j][2]){
                    arrayMatHang[k][4]+= array[i].cart[j][4];
                    break;
                }
                k++;
            }
            if( k >= arrayMatHang.length){
                arrayMatHang.push(array[i].cart[j]);
            }
        }
    }
    let staMH = document.getElementById("sta__sell-option").value;
    if (staMH == 2) {
        arrayMatHang = arrayMatHang.sort((a, b) => b[4] - a[4]); 
    } else if(staMH == 3){
        arrayMatHang = arrayMatHang.sort((a, b) => a[4] - b[4]); // Sắp xếp tăng dần
    }
    document.getElementById("sum__Products").innerHTML= `Tổng mặt hàng đã bán: `+arrayMatHang.length+` `; 
    showArrayMatHang(arrayMatHang);
}            

//show danh sách mặt hàng
function showArrayMatHang(arr){
    let html;
    if(arr.length == 0)
        html=`<thead>
              <th>Ảnh</th>
              <th>Mặt Hàng</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng giá</th>
              </thead>
              <tbody>
                <tr><td colspan=5><img src="./file/image/img_admin/img5.jpg" alt="" style="width:auto; height: 400px"></td></tr>
                <tr><td colspan=5><h1>Không có mặt hàng nào<h1></td></tr>
              </tbody>` 
    else{
        html=`<thead>
              <th>Ảnh</th>
              <th>Mặt Hàng</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng giá</th>
              <th> Chi tiết </th>
              </thead><tbody>`;
        let endD= document.getElementById("sta__sell-option").value;
        endD= endD==1? arr.length: 1;
        if(endD == 1) while(arr[endD] && arr[endD-1][4] == arr[endD][4]) endD ++;
        for(let i=0;i<endD;i++){
            let HTML=showMatHang(arr[i]);
            html=html+HTML;
         }     
    }
    document.getElementById("tableRevenue").innerHTML=`</tbody>`+html;
}

//show mặt hàng
function showMatHang(matHang){
    let html=" ";
    html=`<tr>
    <td><img src="`+matHang[0]+`" alt=""></td>
    <td>`+matHang[2]+`(`+matHang[1]+`)`+`</td>
    <td>`+matHang[3]+`.000 VNĐ`+`</td>
    <td>`+matHang[4]+`</td>
    <td>`+(matHang[3]*matHang[4]*1000).toLocaleString()+`</td>
    <td><button onclick="showBillMH('`+matHang[2]+`')"--> CHi tiết </button></td>
        </tr>`
    return html;
}
// show từng hóa đơn của từng măt hàng
function showBillMH(name){
    let array = filStatisticsTime();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].cart.length; j++) {
            if(array[i].cart[j][2] != name){
                array.splice(i,1);
                break;
            }
        }
    }
    showBillStatistics(array);
}

// show từng hóa đơn trong thống kê
function showBillStatistics(array){
    let html= `<div id="table__viewbills">
                <div id="closetb__vbls"><button onclick="closeDetailStatistic()">+</button></div>
                <table>
                    <thead>
                        <th>Mã đơn hàng</th>
                        <th>Tên tài khoản</th>
                        <th>Tên người nhận</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Phương thức</th>
                        <th>Thời Gian</th>
                        <th>Tổng</th>
                        <th>Chỉ tiết đơn hàng</th>
                    </thead>
                    <tbody>`;
    for (let i = 0; i < array.length; i++) {
        let diaChi= array[i].location;
        if(diaChi){
            diaChi= array[i].location.street + " " + array[i].location.ward +" "+ array[i].location.district +" " + array[i].location.city;
        }
        else diaChi="";
        html+= `<tr>
                        <td>`+"M"+array[i].index+`</td>
                        <td>`+array[i].username+`</td>
                        <td>`+array[i].name+`</td>
                        <td>`+diaChi+`</td>
                        <td>`+array[i].phone+`</td>
                        <td>`+array[i].method+`</td>
                        <td>`+array[i].date+`</td>
                        <td>`+(array[i].sum *1000).toLocaleString()+` VND</td>
                        <td><button onclick="showDonHang(`+array[i].index+`)">Chi tiết đơn hàng</button></td>
                </tr>`;
    }
    html+= `</tbody>
                </table>
            </div>`;
    document.getElementById("modal__StatisticsBill").style.display="block";
    document.getElementById("modal__StatisticsBill").innerHTML= html;
}

// đóng xem chi tiết đơn hàng
function closeDetailStatistic(){
    document.getElementById("modal__StatisticsBill").style.display="none";
}

// hàm lọc khách hàng 
function loadKhachHang(){
    let array= filStatisticsTime();
    let arrayKhachHang= [];
    let ArrayBill= array;
    for (let i = 0; i < ArrayBill.length; i++) {
        let j=0;
        while(j < arrayKhachHang.length){
            if(arrayKhachHang[j][0] == ArrayBill[i].username){
                arrayKhachHang[j][1]+= ArrayBill[i].sum;
                break;
            }
            j++;
        }
        if( j >= arrayKhachHang.length){
            let f= [
                ArrayBill[i].username,
                ArrayBill[i].sum,
            ];
            arrayKhachHang.push(f);
        }
    }
    let staMH = document.getElementById("sta__sell-option").value ;
    if (staMH == 2) {
        arrayKhachHang   = arrayKhachHang .sort((a, b) => b[1] - a[1]); // Sắp xếp giảm dần
    } else if(staMH == 3){
        arrayKhachHang   = arrayKhachHang .sort((a, b) => a[1] - b[1]); // Sắp xếp tăng dần
    };
    document.getElementById("sum__Products").innerHTML= `Tổng khách hàng đã mua : `+arrayKhachHang.length+` `; 
    showArrayKhachHang(arrayKhachHang);  
}

// hàm show thống kê khách hàng 
function showArrayKhachHang(arr) {
    let html="";
    if (!localStorage.getItem("ArrayBill")||localStorage.getItem("ArrayBill")=="[]" || arr.length == 0){
        html = `<thead><th>STT</th><th>Tên khách hàng</th><th>Địa chỉ</th><th>Thời gian</th><th>Trạng thái</th><th>Chi tiết giỏ hàng</th></thead>
            <tbody>
                <tr><td style="text-align:center;font-size:20px;" colspan="6"><img src="./file/image/img_admin/img6.jpg" alt="" style="max-width:100%; height:600px"></img></td></tr>
                <tr><td style="text-align:center;font-size:20px;" colspan="6"><h1>Không có khách hàng nào !</h1></td></tr>
            </tbody>`;
    }
    else {
        html = `<thead><th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Tên tài khoản</th>
                <th>email</th>
                <th>Số điện thoại</th>
                <th>Tổng</th>
                <th>Xem chi tiet </th></thead><tbody>`
        for (let i = 0; i < arr.length; i++) {
            let users= JSON.parse(localStorage.getItem("users"));
            let user;
            for(let j=0; j< users.length; j++){
                if(users[j].username == arr[i][0]){
                    user= users[j];
                    break;
                }
            }
            html+=
                `<tr>
                    <td>`+"KH"+i+`</td>
                    <td>`+user.fullname+`</td>
                    <td>`+arr[i][0]+`</td>
                    <td>`+user.email+`</td>
                    <td>`+user.phone+`</td>
                    <td>`+(arr[i][1]*1000).toLocaleString()+` VND</td>
                    <td><button onclick="showBillKH('` +arr[i][0]+`')">`+"Chi tiết"+`</button></td>
                </tr>` 
        }
        html+=`</tbody>`
    }
    document.getElementById("tableRevenue").innerHTML = html;
}

//show hóa đơn của khách hàng
function showBillKH(name){
    let array= filStatisticsTime();
    for (let i = 0; i < array.length; i++) {
        if(array[i].username != name){
            array.splice(i,1);
            i--;
        }
    }
    showBillStatistics(array);
}

// hàm thông báo
function noti(s, n) {
    let check = document.getElementById("noti");
    if (check) check.outerHTML = "";
    let noti = ["success", "warning", "error"];
    let footer = document.getElementById("footer");
    footer.innerHTML +=
      `<div id="noti"><strong>` +
      noti[n] +
      `! </strong>` +
      s +
      ` <span onclick="closeNoti()">+</span></div>`;
    document.getElementById("noti").classList.add(noti[n]);
  }
  
  function closeNoti() {
    document.getElementById("noti").outerHTML = "";
  }

  function toMau() {
    let toMau = ["formProducts", "formCustomer", "formBill", "formRevenue"];
    let page = ["PageProducts", "PageCustomer", "PageBill", "PageRevenue", "PageMain"];
    let i = 0;

    // Vòng lặp kiểm tra từ đầu đến cuối danh sách toMau
    while (i < toMau.length) {
        if (document.getElementById(toMau[i]).style.display != "none") {
            document.getElementById(page[i]).style.backgroundColor = "#D2B48C"; 
            break;
        }
        i++;
    }

    // Nếu không có phần tử nào hiển thị "block", đặt màu nền cho PageMain
    if (i >= toMau.length) {
        document.getElementById(page[4]).style.backgroundColor = "#D2B48C"; 
    } else {
        document.getElementById(page[4]).style.backgroundColor = "unset"; 
    }
    
    // Vòng lặp kiểm tra từ cuối đến đầu danh sách toMau
    i = 3;
    while (i >= 0) {
        if (document.getElementById(toMau[i]).style.display == "none") {
            document.getElementById(page[i]).style.backgroundColor = "unset"; 
        }
        i--;
    }
}
