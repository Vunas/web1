let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
chuyenHTMLthanhDanhSachProduct();
function chuyenHTMLthanhDanhSachProduct() {
    let HTML = '<div class="card__items">'
    HTML += '<div class="addP">'
    HTML += '<button onclick="showInputAddProduct()">Thêm sản phẩm</button>'
    HTML += '</div>';
    let nodeContainerRightCard = document.querySelector(".container__right--card");
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        let htmlSanPham = chuyenHTMLthanhProduct(DanhSachSanPham[i]);
        HTML = HTML + htmlSanPham;
    }
    HTML = HTML + '</div>'
    nodeContainerRightCard.innerHTML = HTML;
}
function chuyenHTMLthanhProduct(sanPham) {
    let id = sanPham.id;
    html = ''
    html += `<div class="card__item">`
    html += `<div class="card__item--left">`
    html += `<img src="` + sanPham.image1 + `" alt="">`
    html += `</div>`
    html += `<div class="card__item--middle">`
    html += `<div class="card__name--middle">`
    html += `` + sanPham.name + ``
    html += `</div>`
    html += `<div class="card__introduce--middle">`
    html += `` + sanPham.introduce + ``
    html += `</div>`
    html += `</div>`
    html += `<div class="card__item--right">`
    html += ` <div class="card__price--right">`
    html += `<span>` + (sanPham.price * 1000).toLocaleString() + ` <sup>VNĐ</sup></span>`
    html += `</div>`
    html += `<div class="card__edit__delete--right">`
    html += `<button onclick="showInputChangeProduct(` + id + `)"><i class="fa fa-pencil-square" aria-hidden="true"></i></button>`
    html += ` <button onclick="deleteP(` + id + `)"><i class="fa fa-trash" aria-hidden="true"></i></button>`
    html += ` </div>`
    html += `</div>`
    html += ` </div>`
    return html;
}
//show trang chủ
function showpageMain() {
    document.querySelector(".container__right--card").style.display = "none";
    document.querySelector(".container__right--main").style.display = "block";
}

//show trang sản phẩm
function showlistProduct() {
    document.querySelector(".container__right--card").style.display = "block";
    document.querySelector(".container__right--main").style.display = "none";
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
    console.log(document.querySelector("#imgPreview1__addP").src);
    let idtemp = DanhSachSanPham[0].id + 1;
    let textDetail1 = document.querySelector("#detail1__addP");
    let textDetail2 = document.querySelector("#detail2__addP");
    let textDetail3 = document.querySelector("#detail3__addP");
    let textDetail4 = document.querySelector("#detail4__addP");
    let textName = document.querySelector("#name__addP");
    let textIntroduce = document.querySelector("#introduce__addP");
    let textPrice = document.querySelector("#price__addP");
    if ((document.querySelector("#imgPreview1__addP").src).includes("html")||(document.querySelector("#imgPreview2__addP").src).includes("html"))
    {
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
    chuyenHTMLthanhDanhSachProduct();
    customAlert("Thêm sản phẩm thành công ", "success")
}

//Hiện khung thông báo thêm sản phẩm thành công hay thất bại
function customAlert(message, type) {
    if (type == "success")
        document.querySelector(".containAlert").style.backgroundColor = '#D2B48C';
    if (type == "warning")
        document.querySelector(".containAlert").style.backgroundColor = '#D2B48C';
    document.querySelector(".containAlert").innerHTML = message;
    document.querySelector(".customAlert").style.display = "block";
    setTimeout(function () {
        document.querySelector(".customAlert").style.display = "none";
    }, 2500)
}

//khi click vào button sẽ đóng khung thông báo Alert 
function closeContainAlert() {
    document.querySelector(".customAlert").style.display = "none";
}






//--------------------------------------------------------------XÓA SẢN PHẨM--------------------------------------------------------------------
//Xóa sản phẩm
function deleteP(id) {
    for (var i = 0; i < DanhSachSanPham.length; i++) {
        if (DanhSachSanPham[i].id == id) {
            if (confirm('Bạn có muốn xóa sản phẩm này?')) {
                DanhSachSanPham.splice(i, 1);
                break;
            }
        }
    }
    localStorage.setItem("product", JSON.stringify(DanhSachSanPham));
    chuyenHTMLthanhDanhSachProduct();
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
                saveChangeProduct(DanhSachSanPham[i]);
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
function saveChangeProduct(sanPham) {
    sanPham.image1 = document.querySelector("#imgPreview1__changeP").src;
    sanPham.name = document.querySelector(".input__changeP--name input").value;
    sanPham.introduce = document.querySelector(".input__changeP--introduce input").value;
    sanPham.price = document.querySelector(".input__changeP--price input").value;
    sanPham.detail1 = document.querySelector("#detail1__changeP").value;
    sanPham.detail2 = document.querySelector("#detail2__changeP").value;
    sanPham.detail3 = document.querySelector("#detail3__changeP").value;
    sanPham.detail4 = document.querySelector("#detail4__changeP").value;
    localStorage.setItem("product", JSON.stringify(DanhSachSanPham));
    chuyenHTMLthanhDanhSachProduct();
    document.querySelector(".container__changeP--products").style.display="none";
}
