//Tạo sản phẩm và lưu vào localStorage
var menuList = [
  "ALL",
  "GUNDAM",
  "Mô hình tĩnh",
  "FIGURE-RISE",
  "Dụng Cụ",
  "Dragon Ball",
  "FIGURE",
];

createProduct();
function createProduct() {
  if (localStorage.getItem("product") === null) {
    let products = [
      {
        id: 1040,
        image1: "./file/image/img_gundam/img1.jpg",
        image2: "./file/image/img_gundam2/img1.jpg",
        detail1: "Thương hiệu: Motor Nuclear",
        detail2: "Chất liệu: Nhựa + Kim loại",
        detail3: "Tỷ lệ : 1/72",
        detail4: "Cao : 23cm",
        name: "GUNDAM",
        introduce: "MNP-XH04 1/72 Metal Frame Nezha Na Tra",
        price: 190,
      },
      {
        id: 1039,
        image1: "./file/image/img_gundam/img2.jpg",
        image2: "./file/image/img_gundam2/img2.jpg",
        detail1: "Thương hiệu : Banpresto",
        detail2: "Chất liệu : + vải + cao su + Kim loại",
        detail3: "Tỷ lệ : 1/12",
        detail4:"Trọn bộ gồm 5 nhân vật: Tôn Ngộ Không, Đường Tam Tạng, Trư Bát Giới, Sa Ngộ Tĩnh, Bạch Long Mã + 1 phông nền trưng bày",
        name: "FIGURE",
        introduce: "303 Toys 1/12 Ngũ Hổ Tướng Tam Quốc Chí",
        price: 550,
      },
      {
        id: 1038,
        image1: "./file/image/img_gundam/img3.jpg",
        image2: "./file/image/img_gundam2/img3.jpg",
        detail1: "Thương hiệu: Haoyu Toys",
        detail2: "Chất liệu : PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Cao : ~15cm",
        name: "FIGURE",
        introduce: "Banpresto Blue Eyes White Dragon",
        price: 200,
      },
      {
        id: 1037,
        image1: "./file/image/img_gundam/img4.jpg",
        image2: "./file/image/img_gundam2/img4.jpg",
        detail1: "Thương hiệu : Motor Nuclear",
        detail2: "Chất liệu : Nhựa + Kim loại",
        detail3: "Tỷ lệ : 1/72",
        detail4: "Cao : 23cm",
        name: "GUNDAM",
        introduce: "MNP-XH05 1/72 Metal Frame Triệu Vân + Bạch Long Mã",
        price: 175,
      },
      {
        id: 1036,
        image1: "./file/image/img_gundam/img5.jpg",
        image2: "./file/image/img_gundam2/img5.jpg",
        detail1: "Thương hiệu : JMS",
        detail2: "Xuất xứ : Trung Quốc",
        detail3: "Chất liệu : Nhựa abs",
        detail4: "Chiều cao : 15cm",
        name: "GUNDAM",
        introduce: "Mô hình HG 1/144 JMS Hyaku Shiki",
        price: 250,
      },
      {
        id: 1035,
        image1: "./file/image/img_gundam/img6.jpg",
        image2: "./file/image/img_gundam2/img6.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa ABS",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Chiều cao : 15cm",
        name: "GUNDAM",
        introduce: "HG Gyan-Gundam Chính hãng Bandai",
        price: 195,
      },
      {
        id: 1034,
        image1: "./file/image/img_gundam/img7.jpg",
        image2: "./file/image/img_gundam2/img7.jpg",
        detail1: "Thương hiệu : Haoyu Toys",
        detail2: "Chất liệu : Nhựa + vải + cao su + Kim loại",
        detail3: "Tỷ lệ  :1/12",
        detail4: "Kích thước : ~22cm",
        name: "FIGURE",
        introduce: "Haoyu Toys 1/12 Tây Du Ký 5 Thầy trò Đường Tăng",
        price: 430,
      },
      {
        id: 1033,
        image1: "./file/image/img_gundam/img8.jpg",
        image2: "./file/image/img_gundam2/img8.jpg",
        detail1: "Thương hiệu : Haoyu Toys",
        detail2: "Chất liệu : Nhựa + vải + cao su + Kim loại",
        detail3: "Tỷ lệ  :1/12",
        detail4: "Kích thước : ~22cm",
        name: "GUNDAM",
        introduce: "HG Forbidden Gundam -Gundam Chính hãng Bandai",
        price: 350,
      },
      {
        id: 1032,
        image1: "./file/image/img_gundam/img9.jpg",
        image2: "./file/image/img_gundam2/img9.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Chiều cao : 17CM",
        name: "FIGURE-RISE",
        introduce: "Mô hình lắp ráp Figure-rise Standard Kamen Rider Build",
        price: 595,
      },
      {
        id: 1031,
        image1: "./file/image/img_gundam/img10.jpg",
        image2: "./file/image/img_gundam2/img10.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa abs",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Chiều cao : 17cm",
        name: "FIGURE-RISE",
        introduce: "Mô hình lắp ráp Figure-rise Standard Kamen Rider Zi-O",
        price: 750,
      },
      {
        id: 1030,
        image1: "./file/image/img_gundam/img11.jpg",
        image2: "./file/image/img_gundam2/img11.jpg",
        detail1: "Thương hiệu : Motor Nuclear",
        detail2: "Chất liệu : Nhựa + Kim loại",
        detail3: "Tỷ lệ : 1/72",
        detail4: "Cao : 23cm",
        name: "FIGURE",
        introduce: "Mô hình figure: Luffy – King Of Artist The Bound Man",
        price: 195,
      },
      {
        id: 1029,
        image1: "./file/image/img_gundam/img12.jpg",
        image2: "./file/image/img_gundam2/img12.jpg",
        detail1: "Thương hiệu : Motor Nuclear",
        detail2: "Chất liệu : Nhựa PVC",
        detail3: "Tỷ lệ : 1/72",
        detail4: "Cao khoảng 14cm",
        name: "GUNDAM",
        introduce: "HG Shin Burning – Series Gundam Build Metaverse",
        price: 570,
      },
      {
        id: 1028,
        image1: "./file/image/img_gundam/img13.jpg",
        image2: "./file/image/img_gundam2/img13.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa ABS",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "",
        name: "GUNDAM",
        introduce: "HG UC 241 MS-06 Zaku II – Mô hình lắp ráp Gundam Bandai",
        price: 570,
      },
      {
        id: 1027,
        image1: "./file/image/img_gundam/img14.jpg",
        image2: "./file/image/img_gundam2/img14.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa ABS",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Chiều cao : ~ 18cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "Bleach – Kenpachi Zaraki Anime Solid and Souls",
        price: 820,
      },
      {
        id: 1026,
        image1: "./file/image/img_gundam/img15.jpg",
        image2: "./file/image/img_gundam2/img15.jpg",
        detail1: "Thương hiệu:  RP Studio",
        detail2:"Chất liệu: Nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Kích thước : Kid Buu 25x14x13cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One Piece Film Red – King Of Artist The Shanks",
        price: 399,
      },
      {
        id: 1025,
        image1: "./file/image/img_gundam/img35.jpg",
        image2: "./file/image/img_gundam2/img35.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu:  Nhựa cao cấp với độ sắc nét cao",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Kích thước : 17cm",
        name: "DRAGON BALL",
        introduce: "Mô hình lắp ráp Dragon Ball Kid Buu",
        price: 672,
      },
      {
        id: 1024,
        image1: "./file/image/img_gundam/img36.jpg",
        image2: "./file/image/img_gundam2/img36.jpg",
        detail1: "Thương hiệu: VT",
        detail2: "Chất liệu: Sắt",
        detail3: "Xuất xứ: Trung Quốc",
        detail4: "",
        name: "DỤNG CỤ",
        introduce: "Kềm Cắt Mô Hình Bandai Spirits High Build Up Nippers",
        price: 450,
      },
      {
        id: 1023,
        image1: "./file/image/img_gundam/img37.jpg",
        image2: "./file/image/img_gundam2/img37.jpg",
        detail1: "Thương hiệu: Mr.Hobby",
        detail2: "Chất liệu: Nhựa",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Màu mực: đen (mã GM301)",
        name: "DỤNG CỤ",
        introduce: "Bút kẻ chảy Gundam Marker – GM301",
        price: 70,
      },
      {
        id: 1022,
        image1: "./file/image/img_gundam/img38.jpg",
        image2: "./file/image/img_gundam2/img38.jpg",
        detail1: "Thương hiệu: MANWHA",
        detail2: "Chất liệu: Sắt",
        detail3: "Xuất xứ: Trung Quốc",
        detail4: "",
        name: "DỤNG CỤ",
        introduce: "Kềm cắt mô hình 1 lưỡi MANWAH",
        price: 180,
      },
      {
        id: 1021,
        image1: "./file/image/img_gundam/img39.jpg",
        image2: "./file/image/img_gundam2/img39.jpg",
        detail1: "Thương hiệu: Bandai Namco",
        detail2: "Chất liệu: Nhựa",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Chiều cao: 12cm",
        name: "DRAGON BALL",
        introduce: "Mô hình lắp ráp Dragon Ball Super Saiyan Broly Full Powers",
        price: 879,
      },
      {
        id: 1020,
        image1: "./file/image/img_gundam/img16.jpg",
        image2: "./file/image/img_gundam2/img16.jpg",
        detail1: "Thương hiệu: Banpresto – Bandai Namco",
        detail2: "Chất liệu :  Nhựa cao cấp",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: " Chiều cao : ~ 9cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One Piece – Senkouzekkei – Portgas.D.Ace",
        price: 600,
      },
      {
        id: 1019,
        image1: "./file/image/img_gundam/img17.jpg",
        image2: "./file/image/img_gundam2/img17.jpg",
        detail1: "Thương hiệu : Bandai Spirits",
        detail2: "Chất liệu :   PVC, ABS",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : ~ 17cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One Piece – Battle Record Collection – Rorona Zoro",
        price: 429,
      },
      {
        id: 1018,
        image1: "./file/image/img_gundam/img18.jpg",
        image2: "./file/image/img_gundam2/img18.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu: Nhựa ABS",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Kích thước : ~ 16cm",
        name: "GUNDAM",
        introduce: "MG Strike Freedom Gundam",
        price: 429,
      },
      {
        id: 1017,
        image1: "./file/image/img_gundam/img40.jpg",
        image2: "./file/image/img_gundam2/img40.jpg",
        detail1: "Thương hiệu : Solarain",
        detail2: "Chất liệu : ABS, PVC",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Kích thước : 1/7 - H280mm",
        name: "FIGURE",
        introduce:
          "Youmu Konpaku Half-Human Half-Phantom Gardener Ver 1/7 - Touhou",
        price: 900,
      },
      {
        id: 1016,
        image1: "./file/image/img_gundam/img20.jpg",
        image2: "./file/image/img_gundam2/img20.jpg",
        detail1: "Thương hiệu : Bandai Namco",
        detail2: "Chất liệu : Nhựa cao cấp",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Kích thước : 44 x 33,5 x 12 cm",
        name: "GUNDAM",
        introduce: "Mô hình lắp ráp Gundam MG EX Strike Freedom Gundam",
        price: 200,
      },
      {
        id: 1015,
        image1: "./file/image/img_gundam/img21.jpg",
        image2: "./file/image/img_gundam2/img21.jpg",
        detail1: "Thương hiệu : Banpresto – Bandai Namco",
        detail2: "Chất liệu : Nhựa cao cấp",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Chiều cao : ~ 16cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One Piece Film Red DXF – Brook Vol.9",
        price: 429,
      },
      {
        id: 1014,
        image1: "./file/image/img_gundam/img22.jpg",
        image2: "./file/image/img_gundam2/img22.jpg",
        detail1: "Thương hiệu: Nuke Matrix",
        detail2: "Chất liệu : ABS, PVC",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "Chiều cao : Tỷ lệ 1/12 , 17cm",
        name: "GUNDAM",
        introduce:
          "Mô hình lắp ráp CF-06 Cyber Forest Fantasy Girls Mad Wolf Caroline Rolphe",
        price: 150,
      },
      {
        id: 1013,
        image1: "./file/image/img_gundam/img23.jpg",
        image2: "./file/image/img_gundam2/img23.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu: Nhựa ABS",
        detail3: "Xuất xứ: Nhật Bản",
        detail4: "",
        name: "GUNDAM",
        introduce: "MG 1/100 GUNDAM EXIA",
        price: 429,
      },
      {
        id: 1012,
        image1: "./file/image/img_gundam/img24.jpg",
        image2: "./file/image/img_gundam2/img24.jpg",
        detail1: "Thương hiệu : TT Hongli",
        detail2: "Chất liệu : Nhựa ABS",
        detail3: "Xuất xứ : Trung Quốc",
        detail4: "Chiều cao : 18cm",
        name: "FIGURE-RISE",
        introduce:
          "Figure-rise Standard Avatar Fumina – Mô hình lắp ráp Bandai",
        price: 100,
      },
      {
        id: 1011,
        image1: "./file/image/img_gundam/img25.jpg",
        image2: "./file/image/img_gundam2/img25.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu : Nhựa cao cấp",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Tỉ lệ : 1/144",
        name: "FIGURE-RISE",
        introduce: "HG CE Black Knight Squad Rud-Ro.A (Tentative Ver)",
        price: 125,
      },
      {
        id: 1010,
        image1: "./file/image/img_gundam/img26.jpg",
        image2: "./file/image/img_gundam2/img26.jpg",
        detail1: "Thương hiệu : Bandai",
        detail2: "Chất liệu :  Nhựa cao cấp",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Tỉ lệ : 1/144",
        name: "FIGURE-RISE",
        introduce: "30mm eEXM-S03H Forestieri 03 – 30 Minutes Missions",
        price: 122,
      },
      {
        id: 1009,
        image1: "./file/image/img_gundam/img27.jpg",
        image2: "./file/image/img_gundam2/img27.jpg",
        detail1: "Thương hiệu: Banpresto - Bandai",
        detail2: "Chất liệu : Nhựa ABS & PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Cao khoảng 16cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "Demon Slayer – Kimetsu no Yaiba – Tanjiro Kamado Vol.19",
        price: 429,
      },
      {
        id: 1008,
        image1: "./file/image/img_gundam/img28.jpg",
        image2: "./file/image/img_gundam2/img28.jpg",
        detail1: "Thương hiệu: Banpresto - Bandai",
        detail2: "Chất liệu : PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Cao 36cm",
        name: "DRAGON BALL",
        introduce: "Mô hình lắp ráp Dragon Ball Z Piccolo",
        price: 429,
      },
      {
        id: 1007,
        image1: "./file/image/img_gundam/img29.jpg",
        image2: "./file/image/img_gundam2/img29.jpg",
        detail1: "Thương hiệu: BANPRESTO",
        detail2: "Chất liệu : PVC cao cấp ",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : ~ 18cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One Piece DXF – The Grandline Men – Gol D. Roger ",
        price: 828,
      },
      {
        id: 1006,
        image1: "./file/image/img_gundam/img30.jpg",
        image2: "./file/image/img_gundam2/img30.jpg",
        detail1: "Thương hiệu: Banpresto – Bandai Namco",
        detail2: "Chất liệu : PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Chiều cao ~ 13cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "Dragon Ball Super – Super Saiyan Gogeta Vol.7",
        price: 124,
      },
      {
        id: 1005,
        image1: "./file/image/img_gundam/img31.jpg",
        image2: "./file/image/img_gundam2/img31.jpg",
        detail1: "Thương hiệu: Banpresto - Bandai",
        detail2: "Chất liệu : Nhựa ABS & PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Kích thước: cao khoảng 10cm",
        name: "MÔ HÌNH TĨNH",
        introduce: "One piece – Manhood Special Ver",
        price: 120,
      },
      {
        id: 1004,
        image1: "./file/image/img_gundam/img32.jpg",
        image2: "./file/image/img_gundam2/img32.jpg",
        detail1: "Thương hiệu: MOSHI",
        detail2: "Chất liệu : Sắt",
        detail3: "Xuất xứ : Trung Quốc",
        detail4:
          "Bộ khoan tay bao gồm 5 mũi khoan : 0.8, 1.0, 1.5, 2.0, 2.5 (mm)",
        name: "DỤNG CỤ",
        introduce: "Khoan tay 5 mũi khoan MS-060 Hãng MOSHI",
        price: 149,
      },
      {
        id: 1003,
        image1: "./file/image/img_gundam/img33.jpg",
        image2: "./file/image/img_gundam2/img33.jpg",
        detail1: "Thương hiệu:  Mr Hobby (Mr Color)",
        detail2: "Chất liệu : Nhựa",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : 20 x 4 x 1.2 cm",
        name: "DỤNG CỤ",
        introduce: "Bút kẻ lằn chìm Gundam Marker – GM01 GM02 GM03",
        price: 149,
      },
      {
        id: 1002,
        image1: "./file/image/img_gundam/img34.jpg",
        image2: "./file/image/img_gundam2/img34.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu : PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Cao khoảng 18cm",
        name: "DRAGON BALL",
        introduce: "Mô hình lắp ráp Dragon Ball Z – Son Goku New Spec Ver",
        price: 674,
      },
      {
        id: 1001,
        image1: "./file/image/img_gundam/img19.jpg",
        image2: "./file/image/img_gundam2/img19.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu : Nhựa PVC",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Cao khoảng 21.5cm",
        name: "FIGURE",
        introduce: "Mô hình figure: Luffy Tay Lửa",
        price: 210,
      },
      {
        id: 1000,
        image1: "./file/image/img_gundam/img41.jpg",
        image2: "./file/image/img_gundam2/img41.jpg",
        detail1: "Thương hiệu: Bandai",
        detail2: "Chất liệu : PVC cao cấp ",
        detail3: "Xuất xứ : Nhật Bản",
        detail4: "Kích thước : Cao khoảng 20.5cm",
        name: "DRAGON BALL",
        introduce: "Mô hình lắp ráp Dragon Ball Final Form Frieza",
        price: 870,
      },
    ];
    localStorage.setItem("product", JSON.stringify(products));
  }
}

function showProduct() {
  var url = document.location.href;
  var tmp = url.split("?");
  var name;
  if (tmp[1]) {
    name = tmp[1].split("#")[0];
  }
  var array = [];
  let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
  if (!tmp[1] || name == "all") {
    array = DanhSachSanPham;
  } else {
    name = decodeURIComponent(name);
    for (let i = 0; i < DanhSachSanPham.length; i++) {
      if (DanhSachSanPham[i].name.toLowerCase() == name) {
        array.push(DanhSachSanPham[i]);
      }
    }
  }
  convertArrayHTML(array);
}

function convertArrayHTML(array) {
  let item = document.querySelector(".list__product");
  let kq = `<div class="card__items" id="card__items--one">`;
  for (let i = 0; i < array.length; i++) {
    kq += ConvertHTML(array[i]);
  }
  item.innerHTML = kq + "</div>";
}

function ConvertHTML(sanpham) {
  let html = "";
  html +=
    `<div class="card__item" id="card__item--one" onclick="showProductInfor(` +sanpham.id +`)">    
    <div class="card__img">    
    <img src="` +sanpham.image1 +`" alt="">    
    <img src="` +sanpham.image2 +`" alt="" id="img__after">    
    </div>    
    <h3>` +sanpham.name +`</h3>        
    <h4>` +sanpham.introduce +`</h4>        
    <h4>`+(sanpham.price * 1000).toLocaleString() +`<sup>VNĐ</sup></h4>
    <span class="card__view"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>`;
  return html;
}

function createTypeFil() {
  var kq = `
            <select name="" id="type__option" onchange="filter()">`;
  for (let i = 0; i < menuList.length; i++) {
    kq += '<option value="' + menuList[i] + '">' + menuList[i] + "</option>";
  }
  kq += "</select>" + `<h3>Giá: </h3>`;

  kq += `<input id="min__option" placeholder="Từ" oninput="filter()" type="number" />
  <h3> - </h3>
  <input id="max__option" placeholder="Đến" oninput="filter()" type="number" />`;

  document.getElementById("category").innerHTML = kq;
}
createTypeFil();

function filter() {
  let search = document.getElementById("type__option").value.toLowerCase();
  let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
  var array = [];
  if (search == "all") {
    array = DanhSachSanPham;
  } else {
    for (let i = 0; i < DanhSachSanPham.length; i++) {
      if (DanhSachSanPham[i].name.toLowerCase().includes(search)) {
        array.push(DanhSachSanPham[i]);
      }
    }
  }

  let min = document.getElementById("min__option").value;
  min = min === "" ? 0 : parseFloat(min);

  let max = document.getElementById("max__option").value;
  max = max === "" ? 1000 : parseFloat(max);

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].price < min || array[i].price > max) {
      array.splice(i, 1); 
    }
  }

  convertArrayHTML(array);
  thisPage1 = 1;
  listItem1 = document.querySelectorAll("#card__item--one");
  loadItem1();
}

showProduct();

//Phân trang
let thisPage1 = 1;
let limit1 = 16;
let listItem1 = document.querySelectorAll("#card__item--one");
function loadItem1() {
  let starT1 = (thisPage1 - 1) * limit1;
  let enD1 = limit1 * thisPage1 - 1;
  listItem1.forEach(function (item, index) {
    if (index >= starT1 && index <= enD1) item.style.display = "block";
    else item.style.display = "none";
  });
  listPage1();
}
loadItem1();
function listPage1() {
  let totalPage1 = Math.ceil(listItem1.length / limit1);
  document.querySelector("#number__pages--one").innerHTML = " ";
  for (let i = 1; i <= totalPage1; i++) {
    let newPage1 = document.createElement("li");
    tempLi1 = `<li id="number__page--one"><a href="#">` + i + `</a></li>`;
    newPage1.innerHTML = tempLi1;
    if (i == thisPage1) newPage1.classList.add("active");
    newPage1.addEventListener("click", function () {
      changePage1(i);
    });
    let addINUL1 = document.querySelector("#number__pages--one");
    addINUL1.appendChild(newPage1);
  }
}
function changePage1(i) {
  thisPage1 = i;
  loadItem1();
}


