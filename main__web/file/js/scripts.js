const locations = [
    {
        city: "Hà Nội",
        districts: [
            {
                district: "Quận Ba Đình",
                wards: ["Cống Vị", "Điện Biên", "Đội Cấn", "Giảng Võ", "Kim Mã", "Liễu Giai", "Ngọc Hà", "Ngọc Khánh", "Nguyễn Trung Trực", "Phúc Xá", "Quán Thánh", "Thành Công", "Trúc Bạch", "Vĩnh Phúc"]
            },
            {
                district: "Quận Hoàn Kiếm",
                wards: ["Chương Dương Độ", "Cửa Đông", "Cửa Nam", "Đồng Xuân", "Hàng Bạc", "Hàng Bài", "Hàng Bồ", "Hàng Bông", "Hàng Buồm", "Hàng Đào", "Hàng Gai", "Hàng Mã", "Hàng Trống", "Lý Thái Tổ", "Phan Chu Trinh", "Phúc Tân", "Tràng Tiền", "Trần Hưng Đạo"]
            },
            {
                district: "Quận Đống Đa",
                wards: ["Cát Linh", "Giảng Võ", "Hàng Bột", "Khâm Thiên", "Khương Thượng", "Kim Liên", "Láng Hạ", "Láng Thượng", "Nam Đồng", "Ngã Tư Sở", "Ô Chợ Dừa", "Phương Liên", "Phương Mai", "Quang Trung", "Quốc Tử Giám", "Thịnh Quang", "Thổ Quan", "Trung Liệt", "Trung Phụng", "Trung Tự", "Văn Chương", "Văn Miếu"]
            },
            {
                district: "Quận Hai Bà Trưng",
                wards: ["Bạch Đằng", "Bách Khoa", "Bạch Mai", "Cầu Dền", "Đống Mác", "Đồng Nhân", "Đồng Tâm", "Đồng Xuân", "Lê Đại Hành", "Minh Khai", "Nguyễn Du", "Phạm Đình Hổ", "Phố Huế", "Quỳnh Lôi", "Quỳnh Mai", "Thanh Lương", "Thanh Nhàn", "Trương Định", "Vĩnh Tuy"]
            },
            {
                district: "Quận Thanh Xuân",
                wards: ["Hạ Đình", "Khương Đình", "Khương Mai", "Khương Trung", "Nhân Chính", "Phương Liệt", "Thanh Xuân Bắc", "Thanh Xuân Nam", "Thanh Xuân Trung", "Thượng Đình"]
            },
            {
                district: "Quận Tây Hồ",
                wards: ["Bưởi", "Nhật Tân", "Phú Thượng", "Quảng An", "Thụy Khuê", "Tứ Liên", "Xuân La", "Yên Phụ"]
            },
            {
                district: "Quận Cầu Giấy",
                wards: ["Dịch Vọng", "Dịch Vọng Hậu", "Mai Dịch", "Nghĩa Đô", "Nghĩa Tân", "Quan Hoa", "Trung Hòa", "Yên Hòa"]
            },
            {
                district: "Quận Hoàng Mai",
                wards: ["Đại Kim", "Định Công", "Giáp Bát", "Hoàng Liệt", "Hoàng Văn Thụ", "Lĩnh Nam", "Mai Động", "Tân Mai", "Thanh Trì", "Thịnh Liệt", "Trần Phú", "Tương Mai", "Vĩnh Hưng", "Yên Sở"]
            },
            {
                district: "Quận Long Biên",
                wards: ["Bồ Đề", "Cự Khối", "Đức Giang", "Gia Thụy", "Giang Biên", "Long Biên", "Ngọc Lâm", "Ngọc Thụy", "Phúc Đồng", "Phúc Lợi", "Sài Đồng", "Thạch Bàn", "Thượng Thanh", "Việt Hưng"]
            },
            {
                district: "Quận Nam Từ Liêm",
                wards: ["Cầu Diễn", "Đại Mỗ", "Mễ Trì", "Mỹ Đình 1", "Mỹ Đình 2", "Phú Đô", "Phương Canh", "Tây Mỗ", "Trung Văn", "Xuân Phương"]
            },
            {
                district: "Quận Bắc Từ Liêm",
                wards: ["Cổ Nhuế 1", "Cổ Nhuế 2", "Đông Ngạc", "Đức Thắng", "Liên Mạc", "Minh Khai", "Phú Diễn", "Phúc Diễn", "Tây Tựu", "Thượng Cát", "Thụy Phương", "Xuân Đỉnh", "Xuân Tảo"]
            },
            {
                district: "Huyện Gia Lâm",
                wards: ["Cát Quế", "Đặng Xá", "Đa Tốn", "Đình Xuyên", "Dương Hà", "Dương Quang", "Dương Xá", "Kim Lan", "Kim Sơn", "Lệ Chi", "Ninh Hiệp", "Phù Đổng", "Phú Thị", "Trâu Quỳ", "Yên Thường", "Yên Viên"]
            },
            {
                district: "Huyện Đông Anh",
                wards: ["Bắc Hồng", "Cổ Loa", "Dục Tú", "Đại Mạch", "Đông Hội", "Hải Bối", "Kim Chung", "Kim Nỗ", "Liên Hà", "Mai Lâm", "Nguyên Khê", "Tàm Xá", "Thụy Lâm", "Tiên Dương", "Uy Nỗ", "Vân Hà", "Vân Nội", "Việt Hùng", "Vĩnh Ngọc", "Võng La", "Xuân Canh", "Xuân Nộn"]
            },
            {
                district: "Huyện Sóc Sơn",
                wards: ["Bắc Sơn", "Đông Xuân", "Hiền Ninh", "Hồng Kỳ", "Kim Lũ", "Mai Đình", "Minh Phú", "Minh Trí", "Nam Sơn", "Phù Linh", "Phú Cường", "Phú Minh", "Phủ Lỗ", "Quang Tiến", "Tân Dân", "Tân Hưng", "Thụy Hương", "Tiên Dược", "Trung Giã", "Việt Long", "Xuân Giang", "Xuân Thu"]
            },
            {
                district: "Huyện Thanh Trì",
                wards: ["Đại Áng", "Đông Mỹ", "Duyên Hà", "Hữu Hòa", "Liên Ninh", "Ngọc Hồi", "Tả Thanh Oai", "Tam Hiệp", "Tân Triều", "Thanh Liệt", "Tứ Hiệp", "Vạn Phúc", "Vĩnh Quỳnh", "Yên Mỹ"]
            },
            {
                district: "Huyện Thường Tín",
                wards: ["Dũng Tiến", "Hà Hồi", "Hiền Giang", "Hòa Bình", "Hồng Vân", "Khánh Hà", "Liên Phương", "Minh Cường", "Nghiêm Xuyên", "Nguyễn Trãi", "Nhị Khê", "Ninh Sở", "Quất Động", "Thắng Lợi", "Thống Nhất", "Thư Phú", "Tô Hiệu", "Tự Nhiên", "Vạn Điểm", "Vân Tảo", "Văn Bình", "Văn Phú", "Văn Tự", "Vân Tử", "Vũ Lăng", "Xà Cầu", "Duyên Thái"]
            },
        ]
    },

    {
        city: "Hồ Chí Minh",
        districts: [
            {
                district: "Quận 1",
                wards: ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Kho", "Phường Cầu Ông Lãnh", "Phường Đa Kao", "Phường Cô Giang", "Phường Nguyễn Cư Trinh", "Phường Nguyễn Thái Bình", "Phường Tân Định", "Phường Phạm Ngũ Lão"]
            },
            {
                district: "Quận 2",
                wards: ["Phường An Lợi Đông", "Phường Bình An", "Phường Thủ Thiêm", "Phường Thảo Điền", "Phường An Phú", "Phường An Khánh", "Phường Bình An", "Phường Bình Trưng Đông", "Phường Bình Trưng Tây", "Phường Cát Lái", "Phường Thạnh Mỹ Lợi"]
            },
            {
                district: "Quận 3",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12  "]
            },
            {
                district: "Quận 4",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 8", "Phường 9", "Phường 10", "Phường 12", "Phường 13", "Phường 14", "Phường 15"]
            },
            {
                district: "Quận 5",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"]
            },
            {
                district: "Quận 6",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"]
            },
            {
                district: "Quận 7",
                wards: ["Phường Hưng Gia", "Phường Tân Phú", "Phường Hưng Lợi", "Phường Tân Thuận Đông", "Phường Tân Thuận Tây", "Phường Tân Kiểng", "Phường Tân Hưng", "Phường Bình Thuận", "Phường Phú Mỹ", "Phường Tân Phong", "Phường Tân Quy"]
            },
            {
                district: "Quận 8",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"]
            },
            {
                district: "Quận 9",
                wards: ["Phường Tam Bình", "Phường Hiệp Phú", "Phường Phú Hữu", "Phường Long Bình", "Phường Long Phước", "Phường Long Thạnh Mỹ", "Phường Long Trường", "Phường Phước Bình", "Phường Phước Long A", "Phường Phước Long B", "Phường Tăng Nhơn Phú A"]
            },
            {
                district: "Quận 10",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"]
            },
            {
                district: "Quận 11",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"]
            },
            {
                district: "Quận 12",
                wards: ["Phường Trung Mỹ Tây", "Phường Hiệp Thành", "Phường Hòa Thạnh", "Phường Phú Hòa", "Phường Đông Hưng Thuận", "Phường Thạnh Xuân", "Phường Thạnh Lộc", "Phường Thới An", "Phường Tân Chánh Hiệp", "Phường An Phú Đông", "Phường Tân Thới Hiệp", "Phường Tân Hưng Thuận"]
            },
            {
                district: "Tân Bình",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"]
            },
            {
                district: "Bình Tân",
                wards: ["Phường An Lạc", "Phường An Lạc A", "Phường Bình Hưng Hòa", "Phường Bình Hưng Hòa A", "Phường Bình Hưng Hòa B", "Phường Bình Trị Đông", "Phường Bình Trị Đông A", "Phường Bình Trị Đông B", "Phường Tân Tạo", "Phường Tân Tạo A"]
            },
            {
                district: "Tân Phú",
                wards: ["Hiệp Tân", "Hòa Thạnh", "Phú Thọ Hòa", "Phú Thạnh", "Phú Trung", "Sơn Kỳ", "Tân Qúy", "Tân Sơn Nhì"]
            },
            {
                district: "Bình Thạnh",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 21"]
            },
            {
                district: "Gò Vấp",
                wards: ["Phường 1", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17"]
            },
            {
                district: "Phú Nhuận",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 13", "Phường 15", "Phường 17"]
            },
            {
                district: "Thủ Đức",
                wards: ["Bình Chiểu", "Bình Thọ", "Hiệp Bình Chánh", "Hiệp Bình Phước", "Linh Chiểu", "Linh Đông", "Linh Tây", "Linh Trung"]
            },
            {
                district: "Hóc Môn",
                wards: ["Xã Bà Điểm", "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn", "Xã Xuân Thới Thượng", "Xã Đông Thạnh", "Xã Tân Thới Nhì", "Xã Tân Hiệp", "Xã Tân Xuân", "Xã Thới Tam Thôn", "Xã Nhị Bình", "Xã Trung Chánh"]
            },
            {
                district: "Nhà Bè",
                wards: ["Xã An Phú", "Xã Nhơn Đức", "Xã Phước Kiển", "Xã Phước Lộc", "Xã Hiệp Phước", "Phường Hiệp Thành", "Phường Tân Thuận Đông"]
            },
            {
                district: "Cần Giờ",
                wards: ["Xã Bình Khánh", "Xã An Thới Đông", "Xã Tam Thôn Hiệp", "Xã Long Hòa", "Xã Cần Thạnh", "Phường Cần Giờ", "Phường Mỹ Khánh", "Phường Tân Thạnh"]
            },
            {
                district: "Củ Chi",
                wards: ["Xã An Phú", "Xã Bình Mỹ", "Xã Bình Chiểu", "Xã Hòa Phú", "Xã Hòa Minh", "Phường Nhuận Đức", "Xã Phú Mỹ Hưng", "Xã Phước Hiệp", "Xã Phước Lý", "Xã Tân An", "Xã Tân Đức", "Xã Tân Hiệp", "Xã Tân Thạnh Đông", "Xã Tân Thạnh Tây", "Phường Bình Chánh", "Phường Bình Tiến", "Phường Củ Chi", "Phường Đông Bình", "Phường Tân Đông", "Phường Tân Hiệp Đông", "Phường Tân Tạo"]
            }
        ]
    },

    {
        city: "Đà Nẵng",
        districts: [
            {
                district: "Quận Hải Châu",
                wards: ["Bình Hiên", "Bình Thuận", "Hải Châu 1", "Hải Châu 2", "Hòa Cường Bắc", "Hòa Cường Nam", "Hòa Thuận Đông", "Hòa Thuận Tây", "Nam Dương", "Phước Ninh", "Thạch Thang", "Thanh Bình", "Thuận Phước"]
            },
            {
                district: "Quận Thanh Khê",
                wards: ["An Khê", "Chính Gián", "Hòa Khê", "Tam Thuận", "Tân Chính", "Thạc Gián", "Thanh Khê Đông", "Thanh Khê Tây", "Vĩnh Trung", "Xuân Hà"]
            },
            {
                district: "Quận Sơn Trà",
                wards: ["An Hải Bắc", "An Hải Đông", "An Hải Tây", "Mân Thái", "Nại Hiên Đông", "Phước Mỹ", "Thọ Quang"]
            },
            {
                district: "Quận Ngũ Hành Sơn",
                wards: ["Hòa Hải", "Hòa Quý", "Khuê Mỹ", "Mỹ An"]
            },
            {
                district: "Quận Liên Chiểu",
                wards: ["Hòa Hiệp Bắc", "Hòa Hiệp Nam", "Hòa Khánh Bắc", "Hòa Khánh Nam", "Hòa Minh"]
            },
            {
                district: "Quận Cẩm Lệ",
                wards: ["Hòa An", "Hòa Phát", "Hòa Thọ Đông", "Hòa Thọ Tây", "Hòa Xuân", "Khuê Trung"]
            },
            {
                district: "Huyện Hòa Vang",
                wards: ["Hòa Bắc", "Hòa Châu", "Hòa Khương", "Hòa Liên", "Hòa Nhơn", "Hòa Ninh", "Hòa Phong", "Hòa Phú", "Hòa Phước", "Hòa Sơn", "Hòa Tiến"]
            }
        ]
    },
    {
        city: "Quảng Ninh",
        districts: [
            {
                district: "Thành phố Hạ Long",
                wards: ["Phường Bạch Đằng", "Phường Hồng Gai", "Phường Cao Thắng", "Phường Hà Khánh", "Phường Giếng Đáy", "Phường Yết Kiêu", "Phường Hoành Bồ"]
            },
            {
                district: "Thành phố Cẩm Phả",
                wards: ["Phường Cẩm Đông", "Phường Cẩm Sơn", "Phường Cẩm Thịnh", "Phường Quảng Hòa", "Phường Cẩm Bình"]
            },
            {
                district: "Thành phố Móng Cái",
                wards: ["Phường Hải Yên", "Phường Trà Cổ", "Phường Ninh Dương", "Phường Bình Ngọc", "Phường Hoàng Tân", "Phường Trần Phú"]
            },
            {
                district: "Thành phố Uông Bí",
                wards: ["Phường Quang Trung", "Phường Đức Chính", "Phường Bắc Sơn", "Phường Nam Sơn", "Phường Phương Đông"]
            },
            {
                district: "Huyện Vân Đồn",
                wards: ["Xã Hạ Long", "Xã Quan Lạn", "Xã Minh Châu", "Xã Thắng Lợi", "Xã Vạn Yên", "Xã Cái Rồng"]
            },
            {
                district: "Huyện Tiên Yên",
                wards: ["Xã Tiên Lãng", "Xã Đông Ngũ", "Xã Tiên Yên", "Xã Quảng An", "Xã Tiên Sơn"]
            },
            {
                district: "Huyện Ba Chẽ",
                wards: ["Xã Ba Chẽ", "Xã Đồn Đạc", "Xã Cao Thắng", "Xã Bình Khê"]
            },
            {
                district: "Huyện Bình Liêu",
                wards: ["Xã Bình Liêu", "Xã Đồng Tâm", "Xã Hoành Mô", "Xã Lục Hồn", "Xã Minh Hưng"]
            },
            {
                district: "Huyện Đông Triều",
                wards: ["Xã An Sinh", "Xã Đông Triều", "Xã Hoàng Quế", "Xã Yên Thọ", "Xã Việt Dân"]
            },
            {
                district: "Huyện Hải Hà",
                wards: ["Xã Quảng Đức", "Xã Hà Lầm", "Xã Cửa Ông", "Xã Đông Mai", "Xã Quảng Thành"]
            },
            {
                district: "Huyện Đầm Hà",
                wards: ["Xã Đầm Hà", "Xã Quảng Lâm", "Xã Quảng Long", "Xã Tân Bình", "Xã Minh Sơn"]
            },
            {
                district: "Huyện Hoành Bồ",
                wards: ["Xã Hoành Bồ", "Xã Tân Dân", "Xã Lộc Hà", "Xã Dương Kinh"]
            },
            {
                district: "Huyện Quảng Yên",
                wards: ["Xã Quảng Yên", "Xã Tiên Lãng", "Xã Đông Mai", "Xã Phượng Hoàng"]
            },
            {
                district: "Huyện Cô Tô",
                wards: ["Xã Cô Tô", "Xã Đồng Tiến", "Xã Thanh Sơn"]
            }
        ]
    },
    {
        city: "Bình Dương",
        districts: [
            {
                district: "Thành phố Thủ Dầu Một",
                wards: ["Phường Hiệp Thành", "Phường Chánh Nghĩa", "Phường Phú Lợi", "Phường Tương Bình Hiệp", "Phường Định Hòa", "Phường Hòa Phú", "Phường An Bình"]
            },
            {
                district: "Thị xã Dĩ An",
                wards: ["Phường Dĩ An", "Phường Tân Bình", "Phường Tân Đông Hiệp", "Phường Bình An", "Phường An Bình", "Phường Tân Phước Khánh"]
            },
            {
                district: "Thị xã Thuận An",
                wards: ["Phường Bình Chuẩn", "Phường An Phú", "Phường Thuận Giao", "Phường Vĩnh Phú", "Phường Lái Thiêu", "Phường Bình Nhâm"]
            },
            {
                district: "Huyện Bến Cát",
                wards: ["Thị trấn Mỹ Phước", "Xã An Điền", "Xã Lai Hưng", "Xã An Tây", "Xã Hưng Hòa", "Xã Phú An", "Xã Tân Định"]
            },
            {
                district: "Huyện Dầu Tiếng",
                wards: ["Thị trấn Dầu Tiếng", "Xã Định Hiệp", "Xã Định An", "Xã Minh Hòa", "Xã Long Tân", "Xã Tân Thành", "Xã An Lập"]
            },
            {
                district: "Huyện Phú Giáo",
                wards: ["Thị trấn Phước Vĩnh", "Xã Tân Hiệp", "Xã Vĩnh Hòa", "Xã An Linh", "Xã Tân Long", "Xã Phước Sang"]
            },
            {
                district: "Huyện Tân Uyên",
                wards: ["Thị trấn Tân Phước Khánh", "Xã Khánh Bình", "Xã Tân Bình", "Xã Uyên Hưng", "Xã Bạch Đằng", "Xã Vĩnh Tân"]
            },
            {
                district: "Huyện Bàu Bàng",
                wards: ["Thị trấn Bàu Bàng", "Xã Lai Uyên", "Xã Long Nguyên", "Xã Phú Chánh", "Xã Tân Mỹ"]
            }
        ]
    },
    {
        city: "Khánh Hòa",
        districts: [
            {
                district: "Thành phố Nha Trang",
                wards: ["Lộc Thọ", "Ngọc Hiệp", "Phước Long", "Phước Tân", "Phước Tiến", "Phương Sơn", "Tân Lập", "Vạn Thắng", "Vĩnh Hải", "Vĩnh Hòa", "Vĩnh Ngọc", "Vĩnh Phước", "Vĩnh Thọ", "Vĩnh Trường", "Vĩnh Trung"]
            },
            {
                district: "Thành phố Cam Ranh",
                wards: ["Ba Ngòi", "Cam Lộc", "Cam Lợi", "Cam Nghĩa", "Cam Phú", "Cam Phúc Bắc", "Cam Phúc Nam", "Cam Thuận"]
            },
            {
                district: "Thị xã Ninh Hòa",
                wards: ["Ninh Bình", "Ninh Diêm", "Ninh Giang", "Ninh Hà", "Ninh Hiệp", "Ninh Hải", "Ninh Hòa", "Ninh Lộc", "Ninh Phú", "Ninh Sim", "Ninh Thủy", "Ninh Tây", "Ninh Thọ", "Ninh Trung"]
            },
            {
                district: "Huyện Diên Khánh",
                wards: ["Diên An", "Diên Điền", "Diên Đồng", "Diên Hòa", "Diên Lạc", "Diên Phú", "Diên Sơn", "Diên Thạnh", "Diên Toàn", "Diên Xuân"]
            },
            {
                district: "Huyện Khánh Vĩnh",
                wards: ["Cầu Bà", "Diên Thọ", "Khánh Bình", "Khánh Đông", "Khánh Hiệp", "Khánh Nam", "Khánh Phú", "Khánh Thành", "Khánh Thượng", "Sông Cầu", "Sông Hiệp", "Sông Quang"]
            }
        ]
    },
    {
        city: "Đồng Nai",
        districts: [
            {
                district: "Thành phố Biên Hòa",
                wards: ["Phường An Bình", "Phường An Hòa", "Phường Bảo Vinh", "Phường Hố Nai", "Phường Long Bình", "Phường Quang Vinh", "Phường Tam Hòa", "Phường Tân Biên", "Phường Tân Hòa"]
            },
            {
                district: "Huyện Nhơn Trạch",
                wards: ["Xã An Hòa", "Xã Đại Phước", "Xã Hiệp Phước", "Xã Phú Thạnh", "Xã Tân An", "Xã Long Tân", "Xã Vĩnh Thanh", "Xã Nhơn Trạch"]
            },
            {
                district: "Huyện Long Thành",
                wards: ["Xã An Phước", "Xã Bình An", "Xã Cẩm Đường", "Xã Long Đức", "Xã Tam An", "Xã Tân Hiệp", "Xã Tân Thành"]
            },
            {
                district: "Huyện Trảng Bom",
                wards: ["Xã An Viễn", "Xã Bàu Hàm", "Xã Đồi 61", "Xã Hưng Thịnh", "Xã Kim Bình", "Xã Quảng Tiến", "Xã Sông Thao"]
            },
            {
                district: "Huyện Vĩnh Cửu",
                wards: ["Xã Bình Hòa", "Xã Bình Lợi", "Xã Cẩm Mỹ", "Xã Long An", "Xã Mã Đà", "Xã Tân Hạnh"]
            },
            {
                district: "Huyện Xuân Lộc",
                wards: ["Xã Xuân An", "Xã Xuân Bắc", "Xã Xuân Hiệp", "Xã Xuân Hòa", "Xã Xuân Lộc", "Xã Xuân Tân", "Xã Xuân Trung"]
            },
            {
                district: "Huyện Cẩm Mỹ",
                wards: ["Xã Long Giao", "Xã Mỹ Xuân", "Xã Tân An", "Xã Tân Hòa", "Xã Tân Phú", "Xã Tân Thành"]
            },
            {
                district: "Huyện Định Quán",
                wards: ["Xã Phú Vinh", "Xã Quảng Tiến", "Xã Tân Sơn", "Xã Tân Thái", "Xã Vĩnh Long", "Xã Định Quán"]
            },
            {
                district: "Huyện Thống Nhất",
                wards: ["Xã Bàu Hàm", "Xã Hưng Lộc", "Xã Tân Hòa", "Xã Long An", "Xã Long Bình"]
            },
            {
                district: "Huyện Long Thành",
                wards: ["Xã An Phước", "Xã Bình An", "Xã Long Đức", "Xã Tam An", "Xã Tân Hiệp", "Xã Tân Thành"]
            }
        ]
    },
    {
        city: "Bình Thuận",
        districts: [
            {
                district: "Thành phố Phan Thiết",
                wards: ["Phường Đức Nghĩa", "Phường Đức Thắng", "Phường Mũi Né", "Phường Phú Thủy", "Phường Phú Hài", "Phường Thanh Hải", "Phường Tân An", "Phường Tân Bình"]
            },
            {
                district: "Huyện Hàm Thuận Bắc",
                wards: ["Xã Hàm Chính", "Xã Hàm Liêm", "Xã Hàm Minh", "Xã Hàm Trí", "Xã Tân Lập", "Xã Tân Hải"]
            },
            {
                district: "Huyện Hàm Thuận Nam",
                wards: ["Xã Mương Mán", "Xã Hồng Sơn", "Xã Hòa Minh", "Xã Tân Thắng", "Xã Tân Hòa", "Xã Tân Đức"]
            },
            {
                district: "Huyện Tuy Phong",
                wards: ["Xã Bình Thạnh", "Xã Bình Tân", "Xã Phong Phú", "Xã Tuy Phong", "Xã Vĩnh Hảo", "Xã Vĩnh Tân"]
            },
            {
                district: "Huyện Bắc Bình",
                wards: ["Xã Bình An", "Xã Bình Phú", "Xã Bình Thạnh", "Xã Chợ Lầu", "Xã Hòa Phú", "Xã Hồng Sơn"]
            },
            {
                district: "Huyện Đức Linh",
                wards: ["Xã Đông Hà", "Xã Hương Phú", "Xã Lâm Chính", "Xã Vũ Hòa", "Xã Tân Hòa"]
            },
            {
                district: "Huyện Tánh Linh",
                wards: ["Xã Nghị Đức", "Xã Đức Hạnh", "Xã Đồng Kho", "Xã Măng Tách", "Xã Mỹ Thạnh", "Xã Vân Thanh"]
            },
            {
                district: "Huyện Phú Quý",
                wards: ["Xã Long Hải", "Xã Tam Thanh", "Xã Phú Hải", "Xã Phú Quý", "Xã Quang Trung"]
            }
        ]
    },
    {
        city: "Quảng Nam",
        districts: [
            {
                district: "Thành phố Tam Kỳ",
                wards: ["Phường Hòa Hương", "Phường An Mỹ", "Phường An Sơn", "Phường Tân Thạnh", "Phường Trường Xuân", "Phường Tân An"]
            },
            {
                district: "Thành phố Hội An",
                wards: ["Phường Cẩm Châu", "Phường Cẩm Nam", "Phường Minh An", "Phường Cẩm Phô", "Phường Sơn Phong", "Phường Tân An"]
            },
            {
                district: "Huyện Đại Lộc",
                wards: ["Thị trấn Ái Nghĩa", "Xã Đại Cường", "Xã Đại Hiệp", "Xã Đại Hưng", "Xã Đại Lãnh", "Xã Đại Quang", "Xã Đại Nghĩa"]
            },
            {
                district: "Huyện Duy Xuyên",
                wards: ["Thị trấn Nam Phước", "Xã Duy Hòa", "Xã Duy Châu", "Xã Duy Tân", "Xã Duy Trung", "Xã Duy Phú", "Xã Duy Nghĩa"]
            },
            {
                district: "Huyện Quế Sơn",
                wards: ["Thị trấn Đông Phú", "Xã Quế Long", "Xã Quế Châu", "Xã Quế Thuận", "Xã Quế Minh", "Xã Quế An"]
            },
            {
                district: "Huyện Hiệp Đức",
                wards: ["Thị trấn Tân An", "Xã Hiệp Thạnh", "Xã Quế Thọ", "Xã Quế Xuân 1", "Xã Quế Xuân 2", "Xã Hiệp Hòa"]
            },
            {
                district: "Huyện Tam Kỳ",
                wards: ["Phường An Xuân", "Phường Tân Thạnh", "Phường Tân An", "Phường Trường Xuân", "Phường Hòa Hương"]
            },
            {
                district: "Huyện Phước Sơn",
                wards: ["Thị trấn Khâm Đức", "Xã Phước Chánh", "Xã Phước Hiệp", "Xã Phước Công", "Xã Phước Ninh", "Xã Phước Mỹ"]
            },
            {
                district: "Huyện Nam Giang",
                wards: ["Thị trấn Thạnh Mỹ", "Xã Cà Dy", "Xã Tà Pơ", "Xã Chơ Chun", "Xã Dang", "Xã Vi Kỳ"]
            },
            {
                district: "Huyện Tây Giang",
                wards: ["Thị trấn Tây Giang", "Xã Bhalê", "Xã Rà Pờ", "Xã A Ting", "Xã Đắk Pơ"]
            },
            {
                district: "Huyện Đông Giang",
                wards: ["Thị trấn Đông Giang", "Xã Cà Đú", "Xã Đắk Pring", "Xã Đắk Kly", "Xã Bà Rén", "Xã Giang Nam"]
            },
            {
                district: "Huyện Núi Thành",
                wards: ["Thị trấn Núi Thành", "Xã Tam Hiệp", "Xã Tam Quang", "Xã Tam Thạnh", "Xã Tam Tiến", "Xã Tam Anh"]
            },
            {
                district: "Huyện Thăng Bình",
                wards: ["Thị trấn Hà Lam", "Xã Bình An", "Xã Bình Quý", "Xã Bình Nguyên", "Xã Bình Định", "Xã Bình Sơn"]
            },
            {
                district: "Huyện Phú Ninh",
                wards: ["Thị trấn Phú Thọ", "Xã Tam An", "Xã Tam Đại", "Xã Phú Thuận", "Xã Phú Ninh", "Xã Tân Lập"]
            },
            {
                district: "Huyện Tiên Phước",
                wards: ["Thị trấn Tiên Kỳ", "Xã Tiên Lãnh", "Xã Tiên Châu", "Xã Tiên Hà", "Xã Tiên Mỹ"]
            },
            {
                district: "Huyện Quảng Nam",
                wards: ["Thị trấn Quảng Nam", "Xã Quảng Tiên", "Xã Quảng Hòa", "Xã Quảng Thành", "Xã Quảng Lộc"]
            }
        ]
    },
    {
        city: "Bà Rịa - Vũng Tàu",
        districts: [
            {
                district: "Thành phố Bà Rịa",
                wards: ["Phường Phước Hiệp", "Phường Phước Nguyên", "Phường Long Toàn", "Phường Long Hương", "Phường Mỹ Xuân", "Phường Phước Thắng"]
            },
            {
                district: "Thành phố Vũng Tàu",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường Thắng Tam", "Phường Rạch Dừa"]
            },
            {
                district: "Huyện Châu Đức",
                wards: ["Xã Bàu Chinh", "Xã Bình Ba", "Xã Cẩm Mỹ", "Xã Đá Bạc", "Xã Láng Dài", "Xã Quảng Thành", "Xã Sơn Bình"]
            },
            {
                district: "Huyện Đất Đỏ",
                wards: ["Xã Bình An", "Xã Long Tân", "Xã Phước Long", "Xã Sơn Tây", "Xã Vĩnh Hòa"]
            },
            {
                district: "Huyện Xuyên Mộc",
                wards: ["Xã Bưng Biền", "Xã Đá Bạc", "Xã Long Sơn", "Xã Phước Thuận", "Xã Sơn Tây", "Xã Thái Bình"]
            },
            {
                district: "Huyện Tân Thành",
                wards: ["Xã An Ngãi", "Xã Bình Châu", "Xã Hòa Bình", "Xã Lộc An", "Xã Phước Hòa", "Xã Tân Hòa"]
            },
            {
                district: "Huyện Vạn Ninh",
                wards: ["Xã Bình Ba", "Xã Bình Thuận", "Xã Minh Sơn", "Xã Quảng Thành", "Xã Sơn Bình"]
            },
            {
                district: "Huyện Côn Đảo",
                wards: ["Thị trấn Côn Đảo", "Xã An Hòa", "Xã An Phước", "Xã An Thới", "Xã Bình Hòa"]
            }
        ]
    },
    {
        "city": "Bình Phước",
        "districts": [
            {
                "district": "Thành phố Đồng Xoài",
                "wards": ["Phường Tân Bình", "Phường Tân Đồng", "Phường Tân Phú", "Phường Tân Xuân", "Xã Tân Thành", "Xã Tiến Hưng", "Xã Tiến Thành"]
            },
            {
                "district": "Thị xã Bình Long",
                "wards": ["Phường An Lộc", "Phường Hưng Chiến", "Phường Phú Đức", "Xã Thanh Bình", "Xã Thanh Lương", "Xã Thanh Phú"]
            },
            {
                "district": "Thị xã Phước Long",
                "wards": ["Phường Long Phước", "Phường Phước Bình", "Phường Sơn Giang", "Xã Long Giang", "Xã Phước Tín"]
            },
            {
                "district": "Huyện Bù Đăng",
                "wards": ["Xã Bình Minh", "Xã Bom Bo", "Xã Đắk Nhau", "Xã Đức Liễu", "Xã Đường 10", "Xã Minh Hưng", "Xã Nghĩa Bình", "Xã Thống Nhất"]
            },
            {
                "district": "Huyện Bù Đốp",
                "wards": ["Xã Hưng Phước", "Xã Phước Thiện", "Xã Tân Thành", "Xã Thanh Hòa", "Xã Thiện Hưng", "Thị trấn Thanh Bình"]
            },
            {
                "district": "Huyện Bù Gia Mập",
                "wards": ["Xã Bình Thắng", "Xã Bình Tân", "Xã Đắk Ơ", "Xã Đức Hạnh", "Xã Phú Nghĩa", "Xã Phú Văn"]
            },
            {
                "district": "Huyện Chơn Thành",
                "wards": ["Xã Minh Hưng", "Xã Minh Lập", "Xã Minh Thắng", "Xã Nha Bích", "Xã Thành Tâm", "Thị trấn Chơn Thành"]
            },
            {
                "district": "Huyện Đồng Phú",
                "wards": ["Xã Đồng Tâm", "Xã Đồng Tiến", "Xã Tân Hòa", "Xã Tân Lập", "Xã Tân Phú", "Xã Tân Tiến", "Thị trấn Tân Phú"]
            },
            {
                "district": "Huyện Hớn Quản",
                "wards": ["Xã An Khương", "Xã Minh Đức", "Xã Minh Tâm", "Xã Phước An", "Xã Tân Hưng", "Xã Tân Lợi", "Xã Tân Quan"]
            },
            {
                "district": "Huyện Lộc Ninh",
                "wards": ["Xã Lộc An", "Xã Lộc Điền", "Xã Lộc Hiệp", "Xã Lộc Hòa", "Xã Lộc Khánh", "Xã Lộc Ninh", "Thị trấn Lộc Ninh"]
            },
            {
                "district": "Huyện Phú Riềng",
                "wards": ["Xã Bình Sơn", "Xã Bù Nho", "Xã Long Bình", "Xã Long Hưng", "Xã Phước Tân", "Xã Phú Riềng", "Xã Tân Lập"]
            }
        ]
    },
    {
        "city": "Cà Mau",
        "districts": [
            {
                "district": "Thành phố Cà Mau",
                "wards": ["Phường 1", "Phường 2", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường Tân Xuyên", "Xã An Xuyên", "Xã Định Bình", "Xã Hòa Thành", "Xã Hòa Tân", "Xã Lý Văn Lâm", "Xã Tân Thành"]
            },
            {
                "district": "Huyện Cái Nước",
                "wards": ["Xã Đông Hưng", "Xã Đông Thới", "Xã Hòa Mỹ", "Xã Hưng Mỹ", "Xã Lương Thế Trân", "Xã Phú Hưng", "Xã Tân Hưng", "Thị trấn Cái Nước"]
            },
            {
                "district": "Huyện Đầm Dơi",
                "wards": ["Xã Lương Thế Trân", "Xã Nguyễn Huân", "Xã Tân Duyệt", "Xã Tân Đức", "Xã Tân Thuận", "Xã Tân Tiến", "Xã Tạ An Khương", "Xã Tạ An Khương Đông", "Thị trấn Đầm Dơi"]
            },
            {
                "district": "Huyện Năm Căn",
                "wards": ["Xã Đất Mới", "Xã Hàm Rồng", "Xã Hàng Vịnh", "Xã Hiệp Tùng", "Xã Lâm Hải", "Thị trấn Năm Căn"]
            },
            {
                "district": "Huyện Ngọc Hiển",
                "wards": ["Xã Đất Mũi", "Xã Tam Giang Tây", "Xã Tân Ân", "Xã Tân Ân Tây", "Xã Viên An", "Xã Viên An Đông", "Thị trấn Rạch Gốc"]
            },
            {
                "district": "Huyện Phú Tân",
                "wards": ["Xã Nguyễn Việt Khái", "Xã Phú Mỹ", "Xã Phú Tân", "Xã Rạch Chèo", "Xã Tân Hải", "Xã Việt Thắng", "Thị trấn Cái Đôi Vàm"]
            },
            {
                "district": "Huyện Thới Bình",
                "wards": ["Xã Biển Bạch", "Xã Biển Bạch Đông", "Xã Hồ Thị Kỷ", "Xã Tân Bằng", "Xã Tân Lộc", "Xã Tân Lộc Bắc", "Xã Tân Lộc Đông", "Xã Thới Bình", "Thị trấn Thới Bình"]
            },
            {
                "district": "Huyện Trần Văn Thời",
                "wards": ["Xã Khánh Bình", "Xã Khánh Bình Đông", "Xã Khánh Bình Tây", "Xã Khánh Bình Tây Bắc", "Xã Khánh Hải", "Xã Lợi An", "Xã Phong Điền", "Xã Trần Hợi", "Xã Trần Phán", "Thị trấn Sông Đốc", "Thị trấn Trần Văn Thời"]
            },
            {
                "district": "Huyện U Minh",
                "wards": ["Xã Khánh An", "Xã Khánh Hòa", "Xã Khánh Hội", "Xã Khánh Lâm", "Xã Khánh Thuận", "Thị trấn U Minh"]
            }
        ]
    },
    {
        city: "Nghệ An",
        districts: [
            {
                district: "Thành phố Vinh",
                wards: ["Phường Quang Trung", "Phường Hưng Dũng", "Phường Cửa Nam", "Phường Bến Thủy", "Phường Hà Huy Tập", "Phường Vinh Tân"]
            },
            {
                district: "Thị xã Cửa Lò",
                wards: ["Phường Nghi Thu", "Phường Nghi Hải", "Phường Nghi Tân", "Phường Nghi Hương", "Phường Nghi Thuỷ"]
            },
            {
                district: "Huyện Anh Sơn",
                wards: ["Thị trấn Anh Sơn", "Xã Tam Sơn", "Xã Bảo Sơn", "Xã Hùng Sơn", "Xã Cẩm Sơn", "Xã Phúc Sơn"]
            },
            {
                district: "Huyện Quỳnh Lưu",
                wards: ["Thị trấn Cầu Giát", "Xã Quỳnh Giang", "Xã Quỳnh Lập", "Xã Quỳnh Thọ", "Xã Quỳnh Hồng", "Xã Quỳnh Bảng"]
            },
            {
                district: "Huyện Diễn Châu",
                wards: ["Thị trấn Diễn Châu", "Xã Diễn Mỹ", "Xã Diễn Kỷ", "Xã Diễn Hồng", "Xã Diễn Phúc", "Xã Diễn Thịnh"]
            },
            {
                district: "Huyện Yên Thành",
                wards: ["Thị trấn Yên Thành", "Xã Bảo Thành", "Xã Lý Thành", "Xã Hợp Thành", "Xã Phú Thành", "Xã Long Thành"]
            },
            {
                district: "Huyện Nam Đàn",
                wards: ["Thị trấn Nam Đàn", "Xã Hồng Long", "Xã Nam Cường", "Xã Trung Hòa", "Xã Kim Liên", "Xã Xuân Giang"]
            },
            {
                district: "Huyện Hưng Nguyên",
                wards: ["Thị trấn Hưng Nguyên", "Xã Hưng Lộc", "Xã Hưng Châu", "Xã Hưng Chính", "Xã Hưng Phúc"]
            },
            {
                district: "Huyện Thanh Chương",
                wards: ["Thị trấn Thanh Chương", "Xã Thanh Mỹ", "Xã Thanh Đức", "Xã Thanh Lương", "Xã Thanh Khê", "Xã Thanh Vân"]
            },
            {
                district: "Huyện Nghi Lộc",
                wards: ["Thị trấn Nghi Diên", "Xã Nghi Thuận", "Xã Nghi Tân", "Xã Nghi Phú", "Xã Nghi Hợp"]
            },
            {
                district: "Huyện Tân Kỳ",
                wards: ["Thị trấn Tân Kỳ", "Xã Tân An", "Xã Tân Hợp", "Xã Tân Thái", "Xã Tân Long", "Xã Tân Phú"]
            },
            {
                district: "Huyện Quỳ Châu",
                wards: ["Thị trấn Tân Lạc", "Xã Quỳ Châu", "Xã Châu Hòa", "Xã Châu Bính", "Xã Quỳnh Châu"]
            },
            {
                district: "Huyện Kỳ Sơn",
                wards: ["Thị trấn Mường Xén", "Xã Tà Cạ", "Xã Mường Lống", "Xã Chiêu Lưu", "Xã Bảo Nam"]
            },
            {
                district: "Huyện Con Cuông",
                wards: ["Thị trấn Con Cuông", "Xã Yên Khê", "Xã Chi Khê", "Xã Bồng Khê", "Xã Lạng Khê", "Xã Môn Sơn"]
            },
            {
                district: "Huyện Nghĩa Đàn",
                wards: ["Thị trấn Nghĩa Đàn", "Xã Nghĩa Bình", "Xã Nghĩa Hưng", "Xã Nghĩa Mỹ", "Xã Nghĩa Lạc"]
            },
            {
                district: "Huyện Hưng Nguyên",
                wards: ["Thị trấn Hưng Nguyên", "Xã Hưng Lộc", "Xã Hưng Châu", "Xã Hưng Chính", "Xã Hưng Phúc"]
            },
            {
                district: "Huyện Hoàng Mai",
                wards: ["Thị trấn Hoàng Mai", "Xã Quỳnh Lập", "Xã Quỳnh Hoa", "Xã Quỳnh Thọ", "Xã Quỳnh Hưng"]
            }
        ]
    },
    {
        city: "Hà Tĩnh",
        districts: [
            {
                district: "Thành phố Hà Tĩnh",
                wards: ["Phường Bắc Hà", "Phường Nam Hà", "Phường Tân Giang", "Phường Đại Nài", "Phường Trần Phú", "Phường Thạch Linh", "Phường Thạch Quý"]
            },
            {
                district: "Huyện Hương Sơn",
                wards: ["Thị trấn Phố Châu", "Xã Sơn Kim 1", "Xã Sơn Kim 2", "Xã Hương Quang", "Xã Hương Sơn", "Xã Sơn Tây", "Xã Tân Mỹ", "Xã Sơn Lâm"]
            },
            {
                district: "Huyện Đức Thọ",
                wards: ["Thị trấn Đức Thọ", "Xã Quang Vinh", "Xã Tùng Ảnh", "Xã Trường Sơn", "Xã Bùi Xá", "Xã An Dũng", "Xã Đức Lâm"]
            },
            {
                district: "Huyện Nghi Xuân",
                wards: ["Thị trấn Nghi Xuân", "Xã Cổ Đạm", "Xã Xuân Hội", "Xã Xuân Lam", "Xã Xuân Hải", "Xã Xuân Yên", "Xã Xuân Viên"]
            },
            {
                district: "Huyện Can Lộc",
                wards: ["Thị trấn Nghèn", "Xã Mỹ Lộc", "Xã Thường Nga", "Xã Thanh Lộc", "Xã Vượng Lộc", "Xã Yên Lộc", "Xã Hòa Lộc"]
            },
            {
                district: "Huyện Kỳ Anh",
                wards: ["Thị trấn Kỳ Anh", "Xã Kỳ Lâm", "Xã Kỳ Nam", "Xã Kỳ Thịnh", "Xã Kỳ Hòa", "Xã Kỳ Ninh", "Xã Kỳ Tân"]
            },
            {
                district: "Huyện Vũ Quang",
                wards: ["Thị trấn Vũ Quang", "Xã Quang Vĩnh", "Xã Hương Quang", "Xã Đức Giang", "Xã Vũ Quang", "Xã Hương Minh"]
            },
            {
                district: "Huyện Hương Khê",
                wards: ["Thị trấn Hương Khê", "Xã Phú Gia", "Xã Hương Giang", "Xã Hương Trạch", "Xã Hương Lộc", "Xã Hương Sơn", "Xã Thạch Hương"]
            },
            {
                district: "Huyện Lộc Hà",
                wards: ["Thị trấn Lộc Hà", "Xã Thạch Bằng", "Xã Thạch Châu", "Xã Thạch Kim", "Xã Thạch Mỹ", "Xã Thạch Hà"]
            },
            {
                district: "Huyện Cẩm Xuyên",
                wards: ["Thị trấn Cẩm Xuyên", "Xã Cẩm Duệ", "Xã Cẩm Lĩnh", "Xã Cẩm Quang", "Xã Cẩm Sơn", "Xã Cẩm Trung"]
            },
            {
                district: "Huyện Nghi Xuân",
                wards: ["Thị trấn Xuân An", "Xã Xuân Liên", "Xã Xuân Hồng", "Xã Xuân Yên", "Xã Xuân Đan", "Xã Xuân Thắng"]
            },
            {
                district: "Huyện Thạch Hà",
                wards: ["Thị trấn Thạch Hà", "Xã Thạch Lâm", "Xã Thạch Hưng", "Xã Thạch Bàn", "Xã Thạch Bình", "Xã Thạch Xuân"]
            }
        ]
    },
    {
        city: "Thừa Thiên Huế",
        districts: [
            {
                district: "Thành phố Huế",
                wards: ["Phường Phú Hậu", "Phường Phú Nhuận", "Phường Phú Cát", "Phường Vĩnh Ninh", "Phường Đông Ba", "Phường Thuận Lộc", "Phường Thuận Hòa", "Phường Trường An", "Phường Tây Lộc"]
            },
            {
                district: "Huyện A Lưới",
                wards: ["Thị trấn A Lưới", "Xã Hồng Thái", "Xã Đông Sơn", "Xã Hương Nguyên", "Xã A Ngo", "Xã Hồng Vân", "Xã Lâm Đớt", "Xã Quảng Nhâm"]
            },
            {
                district: "Huyện Phú Vang",
                wards: ["Thị trấn Phú Đa", "Xã Phú Hải", "Xã Vinh Hưng", "Xã Vinh Thanh", "Xã Phú An", "Xã Phú Xuân", "Xã Phú Diên", "Xã Phú Thượng", "Xã Phú Dương"]
            },
            {
                district: "Huyện Phong Điền",
                wards: ["Thị trấn Phong Điền", "Xã Phong An", "Xã Phong Bình", "Xã Phong Chương", "Xã Phong Hải", "Xã Phong Hòa", "Xã Phong Mỹ"]
            },
            {
                district: "Huyện Quảng Điền",
                wards: ["Thị trấn Sịa", "Xã Quảng An", "Xã Quảng Thành", "Xã Quảng Thọ", "Xã Quảng Lợi", "Xã Quảng Vinh", "Xã Quảng Phú"]
            },
            {
                district: "Huyện Hương Trà",
                wards: ["Thị trấn Hương Trà", "Xã Hương Bình", "Xã Hương Giang", "Xã Hương Lâm", "Xã Hương Phong", "Xã Hương Toàn", "Xã Hương Thọ", "Xã Hương Vân"]
            },
            {
                district: "Huyện Hương Thủy",
                wards: ["Thị trấn Tứ Hạ", "Xã Thủy An", "Xã Thủy Dương", "Xã Thủy Phù", "Xã Thủy Thanh", "Xã Thủy Tân", "Xã Thủy Vân"]
            },
            {
                district: "Huyện Nam Đông",
                wards: ["Thị trấn Khe Tre", "Xã Thượng Quảng", "Xã Thượng Lộ", "Xã Thượng Nhật", "Xã Hương Lộc", "Xã Nam Đông"]
            },
            {
                district: "Huyện Phú Lộc",
                wards: ["Xã Vinh Giang", "Xã Vinh Hiền", "Thị trấn Lăng Cô", "Xã Phú Lộc", "Xã Vinh Hải", "Xã Lộc Trì", "Xã Lộc Vĩnh", "Xã Lộc An", "Xã Lộc Bổn", "Xã Xuân Lộc"]
            },
            {
                district: "Thị xã Hương Thủy",
                wards: ["Phường Phú Bài", "Phường Thủy Dương", "Phường Thủy An", "Phường Thủy Châu", "Phường Thủy Phú"]
            }
        ]
    },
    {
        city: "Quảng Bình",
        districts: [
            {
                district: "Thành phố Đồng Hới",
                wards: ["Phường Bắc Lý", "Phường Đồng Phú", "Phường Nam Lý", "Phường Hải Thành", "Phường Quảng Thọ", "Phường Đức Ninh", "Phường Bắc Nghĩa"]
            },
            {
                district: "Huyện Quảng Trạch",
                wards: ["Thị trấn Ba Đồn", "Xã Quảng Châu", "Xã Quảng Hòa", "Xã Quảng Tiến", "Xã Quảng Phú", "Xã Quảng Long", "Xã Quảng Sơn"]
            },
            {
                district: "Huyện Lệ Thủy",
                wards: ["Thị trấn Kiến Giang", "Xã Phú Thủy", "Xã Lâm Thủy", "Xã Thanh Thủy", "Xã Liên Thủy", "Xã Mỹ Thủy", "Xã Lệ Thủy"]
            },
            {
                district: "Huyện Bố Trạch",
                wards: ["Thị trấn Hoàn Lão", "Xã Bắc Trạch", "Xã Phú Định", "Xã Hòa Trạch", "Xã Thượng Trạch", "Xã Tân Trạch", "Xã Trung Trạch", "Xã Vĩnh Trạch"]
            },
            {
                district: "Huyện Minh Hóa",
                wards: ["Thị trấn Quy Đạt", "Xã Xuân Hóa", "Xã Hóa Hợp", "Xã Tân Hóa", "Xã Thượng Hóa", "Xã Hóa Sơn", "Xã Mai Hóa", "Xã Minh Hóa"]
            },
            {
                district: "Huyện Tuyên Hóa",
                wards: ["Thị trấn Đồng Lê", "Xã Tân Lâm", "Xã Phú Hóa", "Xã Cao Quảng", "Xã Sơn Hóa", "Xã Thuận Hóa", "Xã Lê Hóa", "Xã Tân Quảng"]
            },
            {
                district: "Huyện Quảng Ninh",
                wards: ["Thị trấn Sông Con", "Xã Thuận Hòa", "Xã Trường Sơn", "Xã Quảng Tiến", "Xã Quảng Hòa", "Xã Quảng Xuân", "Xã Quảng Lâm"]
            },
            {
                district: "Huyện Hải Ninh",
                wards: ["Thị trấn Ninh Hòa", "Xã Hải Lâm", "Xã Hải Khê", "Xã Hải Châu", "Xã Hải Vĩnh", "Xã Hải Phú"]
            },
            {
                district: "Huyện Lộc Ninh",
                wards: ["Thị trấn Lộc Ninh", "Xã Lộc Thủy", "Xã Lộc Phú", "Xã Lộc Đông", "Xã Lộc Khê"]
            }
        ]
    },
    {
        city: "Hà Nam",
        districts: [
            {
                district: "Thành phố Phủ Lý",
                wards: ["Phường Minh Khai", "Phường Lê Hồng Phong", "Phường Hai Bà Trưng", "Phường Trần Hưng Đạo", "Phường Châu Sơn", "Phường Tân Hưng", "Phường Lam Hạ", "Phường Quang Trung"]
            },
            {
                district: "Huyện Bình Lục",
                wards: ["Thị trấn Ba Sao", "Xã An Mỹ", "Xã Đồng Du", "Xã Vũ Bản", "Xã Bình Nghĩa", "Xã Bình Thành", "Xã Liêm Sơn", "Xã Liêm Tuyền", "Xã Đồng Hóa"]
            },
            {
                district: "Huyện Duy Tiên",
                wards: ["Thị trấn Duy Tiên", "Xã Bạch Thượng", "Xã Châu Giang", "Xã Mộc Nam", "Xã Hoàng Đông", "Xã Tiên Tân", "Xã Tiên Hiệp", "Xã Đọi Sơn", "Xã Duy Hải"]
            },
            {
                district: "Huyện Kim Bảng",
                wards: ["Thị trấn Quế", "Xã Ngọc Sơn", "Xã Liên Sơn", "Xã Nhật Tựu", "Xã Kim Bình", "Xã Tân Sơn", "Xã Vũ Bản", "Xã An Hưng"]
            },
            {
                district: "Huyện Lý Nhân",
                wards: ["Thị trấn Vĩnh Trụ", "Xã Đạo Lý", "Xã Đức Lý", "Xã Lý Nhân", "Xã Phú Phúc", "Xã Nhân Chính", "Xã Hòa Hậu", "Xã Liêm Túc", "Xã Chính Lý"]
            },
            {
                district: "Huyện Thanh Liêm",
                wards: ["Thị trấn Thanh Liêm", "Xã Liêm Cần", "Xã Liêm Túc", "Xã Thanh Hà", "Xã Thanh Tân", "Xã Thanh Bình", "Xã Thanh Lương"]
            }
        ]
    },
    {
        city: "Nam Định",
        districts: [
            {
                district: "Thành phố Nam Định",
                wards: ["Phường Lộc Vượng", "Phường Trần Hưng Đạo", "Phường Cửa Bắc", "Phường Bà Triệu", "Phường Quang Trung", "Phường Ngô Quyền", "Phường Lê Hồng Phong", "Phường Vị Hoàng", "Phường Mỹ Xá", "Phường Thống Nhất"]
            },
            {
                district: "Huyện Mỹ Lộc",
                wards: ["Thị trấn Mỹ Lộc", "Xã Mỹ Hà", "Xã Mỹ Tân", "Xã Mỹ Thịnh", "Xã Mỹ Trung", "Xã Mỹ Thành", "Xã Mỹ Phúc"]
            },
            {
                district: "Huyện Nam Trực",
                wards: ["Thị trấn Nam Giang", "Xã Nam Cường", "Xã Nam Thanh", "Xã Nam Hùng", "Xã Nam Thắng", "Xã Nam Dương", "Xã Nam Định"]
            },
            {
                district: "Huyện Vụ Bản",
                wards: ["Thị trấn Gôi", "Xã Liên Minh", "Xã Liên Bảo", "Xã Quảng Thành", "Xã Trung Thành", "Xã Liên Hòa", "Xã Định Hải"]
            },
            {
                district: "Huyện Xuân Trường",
                wards: ["Thị trấn Xuân Trường", "Xã Xuân Thượng", "Xã Xuân Hòa", "Xã Xuân Tiến", "Xã Xuân Phúc", "Xã Xuân Thanh", "Xã Xuân Đài"]
            },
            {
                district: "Huyện Giao Thủy",
                wards: ["Thị trấn Ngô Đồng", "Xã Giao An", "Xã Giao Thiện", "Xã Giao Thanh", "Xã Giao Tân", "Xã Giao Hải", "Xã Giao Lạc", "Xã Giao Trung"]
            },
            {
                district: "Huyện Hải Hậu",
                wards: ["Thị trấn Yên Định", "Xã Hải Chính", "Xã Hải Đông", "Xã Hải Hưng", "Xã Hải Quang", "Xã Hải Phú", "Xã Hải Sơn", "Xã Hải Xuân"]
            },
            {
                district: "Huyện Trực Ninh",
                wards: ["Thị trấn Cổ Lễ", "Xã Trực Thái", "Xã Trực Khang", "Xã Trực Đạo", "Xã Trực Hùng", "Xã Trực Cường", "Xã Trực Đại"]
            },
            {
                district: "Huyện Ý Yên",
                wards: ["Thị trấn Lâm", "Xã Yên Lâm", "Xã Yên Trị", "Xã Yên Quang", "Xã Yên Bình", "Xã Yên Cường", "Xã Yên Thắng"]
            },
            {
                district: "Huyện Nam Định",
                wards: ["Xã Trực Thắng", "Xã Trực Thịnh", "Xã Trực Hoàng", "Xã Trực Mỹ", "Xã Trực Vị"]
            }
        ]
    },
    {
        city: "Trà Vinh",
        districts: [
            {
                district: "Thành phố Trà Vinh",
                wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"]
            },
            {
                district: "Châu Thành",
                wards: ["Thị trấn Châu Thành", "Xã An Phú Tân", "Xã Hòa Lợi", "Xã Long Hòa", "Xã Thanh Bình", "Xã Phước Hưng", "Xã Ngãi Xuyên", "Xã Lương Hòa", "Xã Tam Ngãi"]
            },
            {
                district: "Cầu Ngang",
                wards: ["Thị trấn Cầu Ngang", "Xã An Thới", "Xã Hòa Lạc", "Xã Lương Hòa", "Xã Đông Hải", "Xã Tân Long", "Xã Thạnh Phước", "Xã Hiệp Mỹ"]
            },
            {
                district: "Trà Cú",
                wards: ["Thị trấn Trà Cú", "Xã Hàm Giang", "Xã Thanh Sơn", "Xã Tập Ngãi", "Xã Long Hưng", "Xã Ngọc Biên", "Xã Đại An", "Xã Kim Hòa"]
            },
            {
                district: "Duyên Hải",
                wards: ["Thị trấn Duyên Hải", "Xã Long Toàn", "Xã Long Hòa", "Xã Đông Hải", "Xã Hòa Minh", "Xã Trường Long Hòa"]
            },
            {
                district: "Cầu Kè",
                wards: ["Thị trấn Cầu Kè", "Xã Thông Hòa", "Xã Hòa Tân", "Xã Kinh Hòa", "Xã Long Mỹ", "Xã An Phú"]
            },
            {
                district: "Tiểu Cần",
                wards: ["Thị trấn Tiểu Cần", "Xã Hiệp Hòa", "Xã Phước Hưng", "Xã Long Khánh", "Xã Tân Hưng", "Xã Tam Ngãi", "Xã Đại Phước"]
            },
            {
                district: "Châu Thành A",
                wards: ["Xã Mỹ Long", "Xã Tân Hiệp", "Xã Lộc Hòa", "Xã Phước Quới", "Xã Long Hòa", "Xã Hòa Tân", "Xã Vĩnh Bình"]
            },
            {
                district: "Châu Thành B",
                wards: ["Xã Long Bình", "Xã Phước Thới", "Xã Tân Thới", "Xã Long Bình A", "Xã Phước Định"]
            },
            {
                district: "Long Mỹ",
                wards: ["Thị trấn Long Mỹ", "Xã Hiệp Lợi", "Xã Thanh Hòa", "Xã Minh Khai", "Xã Tân Hòa", "Xã Long An"]
            }
        ]
    }
];
function Transaction__payment() {
    document.getElementById("modal__pay").style.display = "block";
    let htmlIforaddress = `<label>Địa chỉ : <input id="pay__street" placeholder="Nhập số nhà, tên đường"></span>`
    htmlIforaddress += `<label>Tỉnh/Thành Phố : <select id="pay__city" onchange="updateDistrict();updateWard()">
              <option value="Chọn tỉnh/thành phố">Chọn tỉnh/thành phố</option>`
    for (let i = 0; i < locations.length; i++) {
        htmlIforaddress += `<option value="` + locations[i].city + `">` + locations[i].city + `</option>`
    }
    htmlIforaddress += `</select></label>`
    htmlIforaddress += `<label>Quận/Huyện : <select onchange="updateWard()" id="pay__district">
                   <option value="Chọn quận/huyện">Chọn quận/huyện</option>
                   </select></label>`
    htmlIforaddress += `<span>Phường/Xã : <select  id="pay__ward">
                   <option value="Chọn phường/xã">Chọn phường/xã</option>
                   </select></label>`
    document.getElementById("address__pay").innerHTML = htmlIforaddress;
    let i = 1;
    let htmlInforoption = `<button onclick="closePay(` + i + `)" id="back__pay">Quay lại</button>
                         <button onclick="showInforPay(`+ i + `)" id="next__pay">Tiếp tục</button>`
    document.getElementById("option__pay").innerHTML = htmlInforoption;
}

function paymentApperance(){
    let userLogin= JSON.parse(localStorage.getItem("userLogin")) ;
    if(!userLogin) return;
    document.querySelector(".pay__name").value= userLogin.fullname;
    document.querySelector(".pay__sdt").value= userLogin.phone;
}


function closePay(i) {
    if (i == 1)
        document.getElementById("modal__pay").style.display = "none";
}


function checkInput(nameNguoiNhan, sdtLienHe, street, city, district, ward) {
    if (nameNguoiNhan == "" || sdtLienHe == "" || street == "" || city == "Chọn tỉnh/thành phố" || district == "Chọn quận/huyện" || ward == "Chọn phường/xã") {
        noti("Vui lòng nhập thông tin đầy đủ", 1);
        return false;
    }
    if(isNaN(sdtLienHe)||sdtLienHe.length!=10||sdtLienHe[0]!=0){
        noti("Vui lòng kiểm tra lại số điện thoại",1);
        return false;
    }
    return true;
}

function checkPayment(type) {
    let nameNguoiNhan = document.querySelector(".pay__name").value;
    let sdtLienHe = document.querySelector(".pay__sdt").value;
    let street = document.getElementById("pay__street").value;
    let city = document.getElementById("pay__city").value;
    let district = document.getElementById("pay__district").value;
    let ward = document.getElementById("pay__ward").value;
    if (!checkInput(nameNguoiNhan, sdtLienHe, street, city, district, ward))
        return null;
    if (type === "atm") {
        let maPin = document.getElementById("pay__" + type + "--mapin").value;
        let soThe = document.getElementById("pay__" + type + "--sothe").value;
        if (maPin.length != 6 || isNaN(maPin)) {
            noti("Mã pin 6 chữ số và phải là số", 1);
            return null;
        }
        if (soThe.length < 16 || soThe.length > 19 || isNaN(soThe)) {
            noti("Số thẻ không hợp lệ", 1);
            return null;
        }
        return { nameNguoiNhan, sdtLienHe, maPin, soThe, street, city, district, ward };
    }
    if (type == "momo") {
        let maPin = document.getElementById("pay__" + type + "--mapin").value;
        if (maPin.length != 6 || isNaN(maPin)) {
            noti("Mã pin không hợp lệ", 1);
            return null;
        }
        return { nameNguoiNhan, sdtLienHe, maPin, street, city, district, ward };
    }
    return { nameNguoiNhan, sdtLienHe, street, city, district, ward };
}


function showInforPay(i) {
    if (i == 1) {
        let payarr = ["momo", "tienmat", "atm"];
        let htmlshowin4 = '';
        if (!document.getElementById("momo__input").checked && !document.getElementById("tienmat__input").checked && !document.getElementById("atm__input").checked) {
            noti("Vui lòng chọn hình thức thanh toán", 1);
            return;
        }
        if (document.getElementById("momo__input").checked) {
            momoInfo = checkPayment(payarr[0]);
            if (momoInfo == null)
                return;
            document.getElementById("modal__showin4").style.display = "block";
            htmlshowin4 += `<label>Tên người nhận: ` + momoInfo.nameNguoiNhan + `</label>
                         <label>Số điện thoại liên hệ nhận hàng: `+ momoInfo.sdtLienHe + `</label>
                         <label>Phương thức thanh toán: Momo</label>
                         <label>Mã pin: `+ momoInfo.maPin + `</label>
                         <label>Địa chỉ giao hàng: `+ momoInfo.street + "," + momoInfo.ward + "," + momoInfo.district + "," + momoInfo.city + `</label>`
            document.getElementById("detail__showin4").innerHTML = htmlshowin4;
        }
        if (document.getElementById("tienmat__input").checked) {
            tienmatInfo = checkPayment(payarr[1]);
            if (tienmatInfo == null)
                return;
            document.getElementById("modal__showin4").style.display = "block";
            htmlshowin4 += `<label>Tên người nhận: ` + tienmatInfo.nameNguoiNhan + `</label>
                         <label>Số điện thoại liên hệ nhận hàng: `+ tienmatInfo.sdtLienHe + `</label>
                         <label>Phương thức thanh toán: Tiền mặt</label>
                          <label>Địa chỉ giao hàng: `+ tienmatInfo.street + "," + tienmatInfo.ward + "," + tienmatInfo.district + "," + tienmatInfo.city + `</label>`
            document.getElementById("detail__showin4").innerHTML = htmlshowin4;
        }
        if (document.getElementById("atm__input").checked){
            atmInfo = checkPayment(payarr[2]);
            if (atmInfo == null)
                return;
            document.getElementById("modal__showin4").style.display = "block";
            htmlshowin4 += `<label>Tên người nhận: ` + atmInfo.nameNguoiNhan + `</label>
                         <label>Số điện thoại liên hệ nhận hàng: `+ atmInfo.sdtLienHe + `</label>
                         <label>Phương thức thanh toán: ATM</label>
                         <label>Số thẻ ATM :`+ atmInfo.soThe + `</label>
                         <label>Mã pin: `+ atmInfo.maPin + `</label>
                         <label>Địa chỉ giao hàng: `+ atmInfo.street + "," + atmInfo.ward + "," + atmInfo.district + "," + atmInfo.city + `</label>`
            document.getElementById("detail__showin4").innerHTML = htmlshowin4;
        }
    }
    i++;
    document.getElementById("option__showin4").innerHTML = `<button onclick="closeShowin4(` + i + `)">Quay lại</button>
                                                          <button onclick="thanhtoan(`+ i + `)">Thanh toán</button>`
}


function thanhtoan(i) {
    if (i == 2) {
        let cart = JSON.parse(localStorage.getItem("gioHang"));
        let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
        let userLogin=JSON.parse(localStorage.getItem("userLogin"))||[];
        let street = document.getElementById("pay__street").value;
        let city = document.getElementById("pay__city").value;
        let district = document.getElementById("pay__district").value;
        let ward = document.getElementById("pay__ward").value;
        let tenNguoiNhan=document.querySelector(".pay__name").value;
        let sdtLienHe=document.querySelector(".pay__sdt").value;
        if (document.getElementById("momo__input").checked)
            mth="Momo";
        else if (document.getElementById("atm__input").checked)
            mth="ATM";
        else
            mth="Tiền mặt";
        let address = {
            street: street,
            ward: ward,
            district: district,
            city: city,
        }
        let location=[];
        location.push(address);
        let sum = 0;
        for (let i = 0; i < cart.length; i++)
            sum += cart[i][3] * cart[i][4];
        let Bill = {
            index: ArrayBill.length,
            username:userLogin.username,
            name: tenNguoiNhan,
            phone:sdtLienHe,
            status: "chưa xử lý",
            date: new Date().toISOString().split('T')[0],
            method:mth,
            cart: cart,
            sum: sum,
            location:location,
        }
        ArrayBill.push(Bill);
        localStorage.setItem("ArrayBill",JSON.stringify(ArrayBill));
        document.getElementById("modal__showin4").style.display="none";
        document.getElementById("modal__pay").style.display="none";
        localStorage.removeItem("gioHang");
        showCart();
        noti("Thanh toán thành công", 0);
    }
}


function closeShowin4(i) {
    if (i == 2)
        document.getElementById("modal__showin4").style.display = "none";
    i--;
    document.getElementById("option__pay").innerHTML = "";
    document.getElementById("option__pay").innerHTML = `<button onclick="closePay(` + i + `)" id="back__pay">Quay lại</button>
                                                       <button onclick="showInforPay(`+ i + `)" id="next__pay">Tiếp tục</button>`
}

function showTienmat() {
    let htmlTienmat = '';
    document.getElementById("momo__input").checked = false;
    document.getElementById("atm__input").checked = false;
    htmlTienmat = `<label>Tên người nhận<input class="pay__name" type="text" placeholder="Tên"></label>
                 <label>SĐT liên hệ nhận hàng<input class="pay__sdt" type="text" placeholder="SĐT"></label>`
    document.getElementById("method__pay").innerHTML = htmlTienmat;
    paymentApperance();
}

function showMomo() {
    let htmlMomo = '';
    document.getElementById("tienmat__input").checked = false;
    document.getElementById("atm__input").checked = false;
    htmlMomo = `<label>Tên người nhận<input class="pay__name" type="text" placeholder="Tên"></label>
                 <label>SĐT liên hệ nhận hàng<input class="pay__sdt" type="text" placeholder="SĐT"></label>
                 <label>Mã pin<input id="pay__momo--mapin" type="password" placeholder="****"></label>`
    document.getElementById("method__pay").innerHTML = htmlMomo;
    paymentApperance();
}

function showAtm() {
    let htmlAtm = '';
    document.getElementById("momo__input").checked = false;
    document.getElementById("tienmat__input").checked = false;
    htmlAtm = `<label>Tên người nhận<input class="pay__name" type="text" placeholder="Tên"></label>
                 <label>SĐT liên hệ nhận hàng<input class="pay__sdt" type="text" placeholder="SĐT"></label>
                 <label>Số thẻ ATM<input id="pay__atm--sothe" type="password" placeholder="****"></label>
                 <label>Mã pin<input id="pay__atm--mapin" type="password" placeholder="****"></label>`
    document.getElementById("method__pay").innerHTML = htmlAtm;
    paymentApperance();
}


function updateDistrict() {
    let HTML = `<option value="Chọn quận/huyện">Chọn quận/huyện</option>`;
    let city = document.getElementById("pay__city").value;
    for (let i = 0; i < locations.length; i++) {
        if (city == locations[i].city)
            for (let j = 0; j < locations[i].districts.length; j++)
                HTML += `<option value="` + locations[i].districts[j].district + `">` + locations[i].districts[j].district + `</option>`;
    }
    document.getElementById("pay__district").innerHTML = HTML;
}


function updateWard() {
    let district = document.getElementById("pay__district").value;
    let HTML = `<option value="Chọn phường/xã">Chọn phường/xã</option>`;
    for (let i = 0; i < locations.length; i++) {
        for (let j = 0; j < locations[i].districts.length; j++) {
            let k = 0;
            while (district == locations[i].districts[j].district && k < (locations[i].districts[j].wards).length) {
                HTML += `<option>` + locations[i].districts[j].wards[k] + `</option>`
                k++;
            }
        }
    }
    document.getElementById("pay__ward").innerHTML = HTML;
}
