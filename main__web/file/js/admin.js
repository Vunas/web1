let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
function showArrayProduct() {
    let HTML = `<div class="card__items">
                <button id="addP" onclick="showInputAddProduct()">Thêm sản phẩm</button>`;
    let nodeContainerRightCard = document.querySelector(".container__right--card");
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        let htmlSanPham = showProduct(DanhSachSanPham[i]);
        HTML = HTML + htmlSanPham;
    }
    HTML = HTML + '</div>'
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
    document.querySelector("#soluongProduct").innerText = DanhSachSanPham.length;
}
function soluongUser() {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    document.querySelector("#soluongUser").innerText = DanhSachKhachHang.length;
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
    document.querySelector(".container__right--card").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector(".container__right--main").style.display = "block";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    onloadAdmin();
}

//show trang sản phẩm
function showPageProduct() {
    document.querySelector(".container__right--card").style.display = "block";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    showArrayProduct();
}

//-----------------------------------------------THÊM SẢN PHẨM----------------------------------------------

//Load file ảnh 1 thêm sản phẩm
let recentImg1;
function chooseFileimg1(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgPreview1__addP').attr('src', e.target.result);
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
            $('#imgPreview2__addP').attr('src', e.target.result);
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
        customAlert("Không có hình ảnh", "warning");
        return false;
    }
    if (textName.value == "" || textIntroduce.value == "" || textDetail1.value == "" || textDetail2.value == "" || textDetail3.value == "" || textDetail4.value == "") {
        customAlert("Bạn chưa nhập nội dụng", "warning");
        return false;
    }
    if (isNaN(Number(textPrice.value))) {
        customAlert("Giá không hợp lệ", "warning");
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
            $('#imgPreview1__changeP').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//load file ảnh 2 sửa sản phẩm
function chooseFile2(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgPreview2__changeP').attr('src', e.target.result);
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
                noti("lưu thành công",0);
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
    showArrayProduct();
    document.querySelector(".container__changeP--products").style.display = "none";
}

//click vào đơn hàng mở ra trang đơn hàng
function showPageBill() {
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector(".container__right--card").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector("#formBill").style.display = "block";
    document.querySelector("#formRevenue").style.display = "none";
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
    showArrayBill(DanhSachBill);
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
                <th>STT</th>
                <th>Tên khách hàng</th>
                <th>Địa chỉ</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Chi tiết đơn hàng</th>
            </thead>
            <tbody id="tbodyBill">`;
        for (let i = 0; i < arr.length; i++) {
            let HTMLbill = showBill(arr[i], i);
            html = html + HTMLbill;
        }
        html = html + `</tbody>`;
    }
    document.querySelector("#tableBill").innerHTML = html;
}

//Show ra tất cả đơn hàng
function showBill(bill, soThuTu) {
    let diaChi= bill.location[0];
    if(diaChi){
        diaChi= bill.location[0].street + " " + bill.location[0].ward +" "+ bill.location[0].district +" " + bill.location[0].city;
    }
    else diaChi="";
    let html = '';
    html += `<tr>
        <td>`+ soThuTu + `</td>
        <td>`+ bill.username + `</td>
        <td>`+ diaChi + `</td>
        <td>`+ bill.date + `</td>   
        <td>`+ bill.status + `</td>
        <td style="text-align:center;"><button class="button__viewBill" type="button" style="cursor:pointer;height:30px;" onclick="showDonHang(`+ soThuTu + `)">Xem chi tiết đơn hàng</button></td>
            </tr>`
    return html;
}

//Show lại chi tiết đơn hàng mà khách đã đặt
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
                <td id="info" style="display: flex;align-items: center;"><img style="width:80px;height:80px;" src="`+ DanhSachBill[i].cart[j][0] + `" alt="">` + DanhSachBill[i].cart[j][1] + `</td>
                <td id="info">`+ DanhSachBill[i].cart[j][2] + `</td>
                <td id="info">`+ DanhSachBill[i].cart[j][4] + `</td>
                <td id="info">`+ ((DanhSachBill[i].cart[j][3] * DanhSachBill[i].cart[j][4]) * 1000).toLocaleString() + `</td>
                </tr>`; j++;
                if (j == DanhSachBill[i].cart.length)
                    html += `<tr id="twoChoose">
                           <input type="hidden" value="`+ i + `">
                            <td id="close" onclick="closeViewDonHang()" colspan="1">CLOSE</td>
                            <td id="savestt" onclick="saveStatus(this)" colspan="1">LƯU TRẠNG THÁI</td>
                            <td id="sumbill" colspan="2">TỔNG TIỀN : <span>` + sum.toLocaleString() + `</span><sup>VNĐ</sup></td>
                        </tr>`
            }
        }
    }
    document.querySelector("#tbody__viewDonHang").innerHTML = html;
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
let statuss = ["chưa xử lý", "đã xác nhận", "all", "giao hàng thành công", "đã hủy"];
let day = ["all", "một ngày", "một tuần", "nửa tháng", "một tháng"];
let valueDay = ["all", "1", "7", "15", "30"];
let districts = ["all",
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Tân Bình",
    "Tân Phú",
    "Bình Thạnh",
    "Gò Vấp",
    "Phú Nhuận",
    "Thủ Đức"
];
function createFilterBill() {
    let html = `<div id="filter__status--B"><p id="title__ftstt" style="display:inline;padding:0px 20px;">Filter Status</p>
    <select style="height:40px;width:100px" id="filter__status--bill"  name="" onchange="filterStatusTimeDistrict()">`
    for (let i = 0; i < statuss.length; i++) {
        html += `<option value="` + statuss[i] + `">` + statuss[i] + `</option>`
    }
    html += `</select></div>`
    html += `<div id="filter__time--B"><p id="title__fttime" style="display:inline;padding:0px 20px">Filter Day</p>
            <select style="height:40px;width:100px;" name="" id="filter__time--bill" onchange="filterStatusTimeDistrict()">`
    for (let i = 0; i < day.length; i++) {
        html += `<option value="` + valueDay[i] + `">` + day[i] + `</option>`
    }
    html += `</select></div>`
    html += `<div id="filter__district--B"><p id="title__ftdistrict" style="display:inline;padding:0px 20px">Filter District</p>
    <select style="height:40px;width:100px;" name="" id="filter__district--bill" onchange="filterStatusTimeDistrict()">`
    for (let i = 0; i < districts.length; i++) {
        html += `<option value="` + districts[i] + `">` + districts[i] + `</option>`
    }
    html += `</select></div>`
    document.querySelector("#filterBill").innerHTML = html;
}
createFilterBill();


//lọc đơn hàng theo trạng thái bill và theo thời gian
function filterStatusTimeDistrict() {
    let filterStt = document.querySelector("#filter__status--bill").value;
    let DanhSachBill = JSON.parse(localStorage.getItem("ArrayBill"));
    let filterDis = document.querySelector("#filter__district--bill").value;
    let arrayBillOfSTTANDDIS = [];

    for (let i = 0; i < DanhSachBill.length; i++) {
        let bill = DanhSachBill[i];
        let matchStatus = (filterStt === "all" || bill.status === filterStt);
        let matchDistrict = (filterDis === "all" || bill.location.some(district => district.district === filterDis));
        if (matchStatus && matchDistrict)
            arrayBillOfSTTANDDIS.push(bill);
    }

    let filterD = document.querySelector("#filter__time--bill").value;
    if(filterD != "all"){
        let now = new Date();
        let past = new Date();
        past.setDate(past.getDate() - parseInt(filterD));
        for (let i = 0; i < arrayBillOfSTTANDDIS.length; i++) {
            let timeB = new Date(arrayBillOfSTTANDDIS[i].date);
            if (timeB <= past && timeB >= now){
                arrayBillOfSTTANDDIS.splice(i, 1);
                i--;
            }
        }
    }
    if (arrayBillOfSTTANDDIS.length == 0) {
        document.querySelector("#tableBill").innerHTML = `
        <thead id="theadBill">
                <th>STT</th>
                <th>Tên khách hàng</th>
                <th>Địa chỉ</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Chi tiết giỏ hàng</th>
        </thead>
        <tbody><tr><td style="text-align:center;font-size:20px;" colspan="6">Không có đơn hàng nào</td></tr></tbody>`;
    }
    else {
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
    document.querySelector(".container__right--card").style.display = "none";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formRevenue").style.display = "none";
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    showArrayCustomer(DanhSachKhachHang);
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
                    <th>Tên</th>
                    <th>Mật khẩu</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Địa chỉ</th>
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
    let diaChi= customer.location;
    if(diaChi){
        diaChi= customer.location.street + " " + customer.location.ward +" "+ customer.location.district +" " + customer.location.city;
    }
    else diaChi="";
    let html = '';
    html += `<tr>
      <td>`+ customer.username + `</td>
      <td>`+ customer.password + `</td>
      <td>`+ customer.email + `</td>
      <td>`+ customer.phone + `</td>
      <td>`+ diaChi + `</td>
      <td style="display:flex;justify-content: center;">
      <input type="hidden" value="`+ index + `">
      <button onclick="showInputEditCustomer(`+ index + `)" type="button" class="button__edit--customer" ><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
      <button onclick="deleteCustomer(`+ index + `)" type="button" class="button__delete--customer" ><i class="fa fa-trash" aria-hidden="true"></i></button>
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


//Mở khung thêm người dùng
function showInputAddCustomer() {
    document.querySelector(".container__add--customer").style.display = "block";
}

// Thêm người dùng mới
function addCustomer() {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    let nameCustomer = document.querySelector("#usernameAdd");
    let pswCustomer = document.querySelector("#passwordAdd");
    let emailCustomer = document.querySelector("#emailAdd");
    let phoneCustomer = document.querySelector("#phoneAdd");
    let addressCustomer = document.querySelector("#addressAdd");
    if (Number(nameCustomer.value) || nameCustomer.value == "") {
        customAlert("Tên không hợp lệ!", "warning");
        return false;
    }
    if ((pswCustomer.value).length < 8) {
        customAlert("Mật khẩu không đủ điều kiện!", "warning");
        return false;
    }
    if (!(emailCustomer.value).includes("@") || emailCustomer.value == "") {
        customAlert("Email không hợp lệ!", "warning");
        return false;
    }
    if (!Number(phoneCustomer.value) || (phoneCustomer.value).length < 10 || (phoneCustomer.value).length > 11) {
        customAlert("Số điện thoại không hợp lệ", "warning");
        return false;
    }
    if (addressCustomer.value == "" || /^[0-9]+$/.test(addressCustomer.value) || /^[a-zA-Z]+$/.test(addressCustomer.value)) {
        customAlert("Địa chỉ không hợp lệ", "warning");
        return false;
    }
    let usertemp = {
        username: nameCustomer.value,
        password: pswCustomer.value,
        email: emailCustomer.value,
        phone: phoneCustomer.value,
        address: addressCustomer.value
    }
    DanhSachKhachHang.unshift(usertemp);
    localStorage.setItem("users", JSON.stringify(DanhSachKhachHang));
    showArrayCustomer(DanhSachKhachHang);
    customAlert("Thêm khách hàng thành công!", "success")
    closeInputAddCustomer();
}


//Đóng khung thêm người dùng
function closeInputAddCustomer() {
    document.querySelector(".container__add--customer").style.display = "none";
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
            document.querySelector("#addressEdit").value = DanhSachKhachHang[i].address;
            document.querySelector("#save__edit").replaceWith(document.querySelector("#save__edit").cloneNode(true));
            document.querySelector("#save__edit").addEventListener("click", function () {
                updateCustomer(index);
                noti("lưu thành công",0);
            })
            return;
        }
    }
}

function updateCustomer(index) {
    let DanhSachKhachHang = JSON.parse(localStorage.getItem("users"));
    DanhSachKhachHang[index].username = document.querySelector("#usernameEdit").value;
    DanhSachKhachHang[index].password = document.querySelector("#passwordEdit").value;
    DanhSachKhachHang[index].email = document.querySelector("#emailEdit").value;
    DanhSachKhachHang[index].phone = document.querySelector("#phoneEdit").value;
    DanhSachKhachHang[index].address = document.querySelector("#addressEdit").value;
    localStorage.setItem("users", JSON.stringify(DanhSachKhachHang));
    showArrayCustomer(DanhSachKhachHang);
    closeInputEditCustomer();
}

//Đóng khung chỉnh sửa người dùng
function closeInputEditCustomer() {
    document.querySelector(".container__edit--customer").style.display = "none";
}

function showPageRevenue() {
    document.querySelector("#formBill").style.display = "none";
    document.querySelector("#formCustomer").style.display = "none";
    document.querySelector(".container__right--card").style.display = "none";
    document.querySelector(".container__right--main").style.display = "none";
    document.querySelector("#formRevenue").style.display = "block";
    createFilterSta();
    loadStatistics();

}

//load trang thống kê
function loadStatistics(){
    let sta= document.getElementById("sta__sta-option").value;
    if(sta == 1){
        if(!document.getElementById("sta__sell")) createFilterSta();  
        loadMatHang();
    }
    else customer_statistics();
}

//  thống kê mặt hàng theo doanh thu
function loadMatHang(){
    let array= filStatisticsTime();
    let sortPro= [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].cart.length; j++) {
            let k=0;
            while(k < sortPro.length){

                if(sortPro[k][2] == array[i].cart[j][2]){
                    sortPro[k][4]+= array[i].cart[j][4];
                    break;
                }
                k++;
            }
            if( k >= sortPro.length){
                sortPro.push(array[i].cart[j]);
            }
        }
    }
    showMatHang_statistics(sortPro); 
}

// show thống ke mặt hàng
function showMatHang_statistics(array){
    let sell= document.getElementById("sta__sell-option").value;
    if( sell == 1){
        array.sort(function(a, b){
            return b[4] - a[4];
       });
    }else{
        array.sort(function(a, b){
            return a[4] - b[4];
       });
    }
    let html="";
    if (!localStorage.getItem("ArrayBill")||localStorage.getItem("ArrayBill")=="[]"){
        html = `<thead><th>STT</th><th>Tên khách hàng</th><th>Địa chỉ</th><th>Thời gian</th><th>Trạng thái</th><th>Chi tiết giỏ hàng</th></thead>
            <tbody><tr><td style="text-align:center;font-size:20px;" colspan="6">Không có khách hàng nào !</td></tr></tbody>`;
    }
    else {
        html = `<thead><th>Ảnh</th>
                <th>Mặt hàng</th>
                <th>Giá</th>
                <th>số lượng</th>
                <th>Tổng giá</th>
                <th>Xem chi tiet </th></thead><tbody>`

        for (let i = 0; i < array.length; i++) {
            html+=
                `<tr>
                    <td><img style="height:80px;width:80px"src="`+array[i][0]+`" alt=""></img></td>
                    <td>`+array[i][2]+`</td>
                    <td>`+(array[i][3]*1000).toLocaleString()+` VND</td>
                    <td>`+array[i][4]+`</td>
                    <td>`+(array[i][3]*array[i][4]*1000).toLocaleString()+` VND</td>
                    <td><button onclick="showProductBills('` +array[i][2]+`')">`+"Chi tiết"+`</button></td>
                </tr>` 
        }
        html+=`</tbody>`
    }
    document.getElementById("tableRevenue").innerHTML = html;
}
// show từng hóa đơn của từng măt hàng
function showProductBills(name){
    let array= filStatisticsTime();
    let arrayDetail= [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].cart.length; j++) {
            if(array[i].cart[j][2] == name){
                arrayDetail.push(array[i]);
                break;
            }
        }

    }
    let html= `<div id="table__viewbills">
                <div id="closetb__vbls"><button onclick="closeDetailStatistic()">+</button></div>
                <table>
                    <thead>
                        <th>Địa chỉ</th>
                        <th>Thời Gian</th>
                        <th>Tổng</th>
                        <th>Chỉ tiết đơn hàng</th>
                    </thead>
                    <tbody>`;
    for (let i = 0; i < arrayDetail.length; i++) {
        let diaChi= arrayDetail[i].location[0];
        if(diaChi){
            diaChi= arrayDetail[i].location[0].street + " " + arrayDetail[i].location[0].ward +" "+ arrayDetail[i].location[0].district +" " + arrayDetail[i].location[0].city;
        }
        else diaChi="";
        html+= `<tr>
                        <td>`+diaChi+`</td>
                        <td>`+arrayDetail[i].date+`</td>
                        <td>`+(arrayDetail[i].sum*1000).toLocaleString()+` VND</td>
                        <td><button onclick="showDonHang(`+arrayDetail[i].index+`)">Xem chi tiết đơn hàng</button></td>
                </tr>`;
    }
    html+= `</tbody>
                </table>
            </div>`;
    document.getElementById("modal__StatisticsBill").style.display="block";
    document.getElementById("modal__StatisticsBill").innerHTML= html;
}

// show từng hóa đơn của từng khách hàng
function showDetailStatistic(name){
    let array= filStatisticsTime();
    let arrayDetail= [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].username == name){
            arrayDetail.push(array[i]);
        }
    }
    let html= `<div id="table__viewbills">
                <div id="closetb__vbls"><button onclick="closeDetailStatistic()">+</button></div>
                <table>
                    <thead>
                        <th>Địa chỉ</th>
                        <th>Thời Gian</th>
                        <th>Tổng</th>
                        <th>Chỉ tiết đơn hàng</th>
                    </thead>
                    <tbody>`;
    for (let i = 0; i < arrayDetail.length; i++) {
        let diaChi= arrayDetail[i].location[0];
        if(diaChi){
            diaChi= arrayDetail[i].location[0].street + " " + arrayDetail[i].location[0].ward +" "+ arrayDetail[i].location[0].district +" " + arrayDetail[i].location[0].city;
        }
        else diaChi="";
        html+= `<tr>
                        <td>`+diaChi+`</td>
                        <td>`+arrayDetail[i].date+`</td>
                        <td>`+(arrayDetail[i].sum *1000).toLocaleString()+` VND</td>
                        <td><button onclick="showDonHang(`+arrayDetail[i].index+`)">Xem chi tiết đơn hàng</button></td>
                </tr>`;
    }
    html+= `</tbody>
                </table>
            </div>`;
    document.getElementById("modal__StatisticsBill").style.display="block";
    document.getElementById("modal__StatisticsBill").innerHTML= html;
}

function closeDetailStatistic(){
    document.getElementById("modal__StatisticsBill").style.display="none";
}

// hàm show thống kê khác hàng 
function showcustomer_statistics(arr) {
    let html="";
    if (!localStorage.getItem("ArrayBill")||localStorage.getItem("ArrayBill")=="[]"){
        html = `<thead><th>STT</th><th>Tên khách hàng</th><th>Địa chỉ</th><th>Thời gian</th><th>Trạng thái</th><th>Chi tiết giỏ hàng</th></thead>
            <tbody><tr><td style="text-align:center;font-size:20px;" colspan="6">Không có khách hàng nào !</td></tr></tbody>`;
    }
    else {
        html = `<thead><th>STT</th>
                <th>Tên khách hàng</th>
                <th>Tổng</th>
                <th>Xem chi tiet </th></thead><tbody>`

        for (let i = 0; i < arr.length; i++) {
            html+=
                `<tr>
                    <td>`+i+`</td>
                    <td>`+arr[i][0]+`</td>
                    <td>`+(arr[i][1]*1000).toLocaleString()+` VND</td>
                    <td><button onclick="showDetailStatistic('` +arr[i][0]+`')">`+"Chi tiết"+`</button></td>
                </tr>` 
        }
        html+=`</tbody>`
    }
    document.getElementById("tableRevenue").innerHTML = html;
}
// hàm lọc khách hàng có doanh thu nhiều nhất để show ra
function customer_statistics(){
    let array= filStatisticsTime();
    if(document.getElementById("sta__sell"))
        document.getElementById("sta__sell").outerHTML= "";
    let sortCus= [];
    let ArrayBill= array;
    for (let i = 0; i < ArrayBill.length; i++) {
        let j=0;
        while(j < sortCus.length){
            if(sortCus[j][0] == ArrayBill[i].username){
                sortCus[j][1]+= ArrayBill[i].sum;
                break;
            }
            j++;
        }
        if( j >= sortCus.length){
            let f= [
                ArrayBill[i].username,
                ArrayBill[i].sum,
            ];
            sortCus.push(f);
        }
    }
    sortCus.sort(function(a, b){
         return b[1] - a[1];
    });
    showcustomer_statistics(sortCus);  
}
// tạo lọc thống kê 
function createFilterSta() {
    let html='';
    html += `<span id="sta__sta">
            <select style="height:40px;width:100px;" name="" id="sta__sta-option" onchange="loadStatistics()">
            <option value="1">Mặt Hàng</option>
            <option value="2">Khách Hàng</option>
            </select></span>`;

    html += `<span id="sta__sell">
    <select style="height:40px;width:100px;" name="" id="sta__sell-option" onchange="loadMatHang()">
    <option value="1">Bán Chạy Nhất</option>
    <option value="2">Bán ế nhất</option>  
    </select></span>`;

    html += `<span id="sta__time">
            <select style="height:40px;width:100px;" name="" id="sta__time-option" onchange="loadStatistics()">`
    for (let i = 0; i < day.length; i++) {
        html += `<option value="` + valueDay[i] + `">` + day[i] + `</option>`
    }
    html += `</select></span>`;
    html += `<div id="totalStatistics"></div>`;
    document.getElementById("filterStatistics").innerHTML = html;
}

// lọc thống kê theo thời gian
function filStatisticsTime(){
    let filter = document.getElementById("sta__time-option").value;
    let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill"));
    let array = [];
    if(filter == "all") array= ArrayBill;
    else{
        let now = new Date();
        let past = new Date();
        past.setDate(past.getDate() - parseInt(filter));
        for (let i = 0; i < ArrayBill.length; i++) {
            let timeB = new Date(ArrayBill[i].date);
            if (timeB >= past && timeB <= now){
                array.push(ArrayBill[i]);
            }
        }
    }
    let sum= 0;
    for (let i = 0; i < array.length; i++) {
        sum+= array[i].sum;
    }
    document.getElementById("totalStatistics").innerHTML=`<span>Tong gia `+(sum*1000).toLocaleString()+ ` VND</span>`;
    return array;
}

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
