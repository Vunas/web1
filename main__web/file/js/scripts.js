function Transaction__payment() {
    const contentDiv = document.getElementById('content');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let cart = JSON.parse(localStorage.getItem("gioHang")) || [];
    if (!cart || cart.length === 0) {
        // Kiểm tra giỏ hàng có sản phẩm hay không
        noti("Không có sản phẩm trong giỏ hàng", 1);
        return;
    }
    let ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i][3] * cart[i][4];
    }
    let Bill = {
        index: ArrayBill.length,
        username: userLogin.username,
        address: userLogin.address,
        phone: userLogin.phone,
        status: "chưa xử lý",
        date: new Date().toDateString(),
        cart: cart,
        sum: sum,
        location: []
    };
    ArrayBill.push(Bill);
    localStorage.setItem('ArrayBill', JSON.stringify(ArrayBill));
    localStorage.setItem('userLogin', JSON.stringify(userLogin));

    ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
    let indexToDelete = ArrayBill.length - 1;
    let currentIndex = 0;
    let currentMethod = '';
    let users = JSON.parse(localStorage.getItem("users"));
    let indexUser = users.findIndex(user => user.username === userLogin.username);

    // Content
    const paymentData = [
        `
        <div class="payment__option" id="payment__option">
            <h2>Hãy chọn phương thức thanh toán!</h2>
            <br>
            <label>
                <input type="radio" name="payment" value="Momo"> Momo
            </label>
            <label>
                <input type="radio" name="payment" value="ATM"> ATM
            </label>
            <label>
                <input type="radio" name="payment" value="Cash"> Tiền mặt
            </label>
        </div>
        <div class="payment__information" id="payment__information">
        </div>
        <div id="locat-delivery">
            <label for="street">Địa chỉ</label>
            <input type="text" id="street" name="street" placeholder="123/A Hau Giang Street" required>
            <br>
            <label for="city">Tỉnh / thành</label>
            <select id="city" name="city" required>
            <option value="">Chọn tỉnh / thành</option>
            </select>
            <br>
            <label for="district">Quận / huyện</label>
            <select id="district" name="district" required>
            <option value="">Chọn quận / huyện</option>
            </select>
            <br>
            <label for="ward">Phường / xã</label>
            <select id="ward" name="ward" required>
            <option value="">Chọn phường / xã</option>
            </select>
        </div>
        <div class="error-message" id="error-locat-delivery"></div>
        <label for="prev_address">Bạn muốn dùng địa chỉ tài khoản không?</label>
        <input type="checkbox" name="prev_address" id="prev_address">
        `,
        `
        <div class="receipt-container">
            <h2>Chi tiết thanh toán</h2>
            <div id="payment-info"></div>
        </div>
        `
    ];
    function updateContent() {
        contentDiv.innerHTML = paymentData[currentIndex];
        if (currentIndex === 0) {
            const prevAddressCheckbox = document.getElementById('prev_address');
            handleLocationChange();

            prevAddressCheckbox.addEventListener('change', function () {

                document.getElementById('street').value = '';
                document.getElementById('city').value = '';
                document.getElementById('district').innerHTML = `<option value="" selected>Chọn quận / huyện</option>`;
                document.getElementById('ward').innerHTML = `<option value="" selected>Chọn phường / xã</option>`;
                if (prevAddressCheckbox.checked) {

                    if (Object.keys(users[indexUser].location).length === 0) {
                        document.getElementById('error-locat-delivery').style.display = 'block';
                        document.getElementById('error-locat-delivery').textContent = 'Chưa có địa chỉ trước đó!';
                        console.log('Chưa có địa chỉ trước đó!');
                    }
                    else {
                        const userLocation = users[indexUser].location;
                        document.getElementById('error-locat-delivery').style.display = 'none';
                        document.getElementById('error-locat-delivery').textContent = '';
                        document.getElementById('street').value = userLocation.street || '';
                        document.getElementById('city').value = userLocation.city || '';
                        document.getElementById('district').innerHTML = `<option selected>${userLocation.district}</option>`;
                        document.getElementById('ward').innerHTML = `<option selected>${userLocation.ward}</option>`;

                        console.log(city.value);
                        console.log(userLocation.district);
                        console.log(userLocation.ward);
                    }
                } else {
                    // document.getElementById('error-locat-delivery').style.display = 'none';
                    document.getElementById('error-locat-delivery').textContent = '';
                }
            });
        }


        const radios = document.getElementsByName('payment');

        radios.forEach(radio => {
            radio.removeEventListener('change', handleRadioChange);
        });

        radios.forEach(radio => {
            radio.addEventListener('change', handleRadioChange);
        });
    }

    updateContent();

    function handleRadioChange(event) {
        const options = document.getElementById('payment__information');

        options.innerHTML = '';
        options.classList.remove('height-transition', 'show');
        options.style.height = 0;
        currentMethod = event.target.value;
        switch (currentMethod) {
            case 'Momo':
                options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="momo_phone">Số điện thoại</label>
                            <input type="text" name="momo_phone" id="momo_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="SĐT" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                            <div class="error-message" id="error-momo_phone"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="momo_name">Tên</label>
                            <input type="text" name="momo_name" id="momo_name" title="Please enter Name" placeholder="Tên" required>
                        <div class="error-message" id="error-momo_name"></div>
                            </div>
                        <div class="payment__option__item">
                            <label for="momo_pin">mã Pin</label>
                            <input type="text" name="momo_pin" id="momo_pin" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Pin code" placeholder="******" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                            <div class="error-message" id="error-momo_pin"></div>
                        </div>
                    `;
                break;

            case 'ATM':
                options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="atm_card_number">Mã số thẻ</label>
                            <input type="text" inputmode="numeric" name="atm_card_number" id="atm_card_number" pattern="[0-9]*"
                                title="Please enter Card number" placeholder="Mã số thẻ" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                                        <div class="error-message" id="error-atm_card_number"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_expired_date">Ngày hết hạn</label>
                            <input type="text" name="atm_expired_date" id="atm_expired_date" pattern="(?:0[0-9]|1[0-2])/[0-9]{2}"
                            title="Please enter Expired date (MM/YY)" placeholder="MM/YY" required
                            oninput="this.value = this.value.replace(/[^0-9/]/g, '')" maxlength="5">
                        <div class="error-message" id="error-atm_expired_date"></div>
                                </div>
                        <div class="payment__option__item">
                            <label for="atm_cvc">CVC</label>
                            <input type="text" name="atm_cvc" id="atm_cvc" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter CVC" placeholder="CVC" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="4">
                        <div class="error-message" id="error-atm_cvc"></div>
                                </div>
                        <div class="payment__option__item">
                            <label for="atm_phone">Số điện thoại</label>
                            <input type="text" name="atm_phone" id="atm_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="SĐT" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                        <div class="error-message" id="error-atm_phone"></div>
                                </div>
                        <div class="payment__option__item">
                            <label for="atm_pin">mã Pin</label>
                            <input type="text" name="atm_pin" id="atm_pin" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Pin code" placeholder="******" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                        <div class="error-message" id="error-atm_pin"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_name">Tên</label>
                            <input type="text" name="atm_name" id="atm_name" title="Please enter Name" placeholder="Tên" required>
                        <div class="error-message" id="error-atm_name"></div>
                            </div>
                    `;
                break;

            case 'Cash':
                options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="cash_phone">Số điện thoại</label>
                            <input type="text" name="cash_phone" id="cash_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="SĐT" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                        <div class="error-message" id="error-cash_phone"></div>                        
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_name">Tên</label>
                            <input type="text" name="cash_name" id="cash_name" title="Please enter Name" placeholder="Tên" required>
                        <div class="error-message" id="error-cash_name"></div>                        
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_note">Ghi chú (tùy chọn)</label>
                            <input type="text" name="cash_note" id="cash_note" title="Enter Note" placeholder="ghi chú (tùy chọn)">
                        </div>
                    `;
                break;
            default:
                options.innerHTML = '';
                break;
        }

        // Cập nhật chiều cao
        requestAnimationFrame(() => {
            options.classList.add('height-transition');
            const height = options.scrollHeight + 'px';
            options.style.height = height;
            options.classList.add('show');
        });
    }

    // Địa chỉ choices
    function handleLocationChange() {
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
                        wards: ["Bến Nghé", "Bến Thành", "Cầu Kho", "Cầu Ông Lãnh", "Cô Giang", "Nguyễn Thái Bình", "Phạm Ngũ Lão"]
                    },
                    {
                        district: "Quận 2",
                        wards: ["Thảo Điền", "An Phú", "An Khánh", "Bình An", "Bình Trưng Đông", "Bình Trưng Tây", "Cát Lái", "Thạnh Mỹ Lợi"]
                    },
                    {
                        district: "Quận 3",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"]
                    },
                    {
                        district: "Quận 4",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 8", "Phường 9"]
                    },
                    {
                        district: "Quận 5",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Quận 6",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Quận 7",
                        wards: ["Tân Thuận Đông", "Tân Thuận Tây", "Tân Kiểng", "Tân Hưng", "Bình Thuận", "Phú Mỹ", "Tân Phong", "Tân Quy"]
                    },
                    {
                        district: "Quận 8",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Quận 9",
                        wards: ["Long Bình", "Long Phước", "Long Thạnh Mỹ", "Long Trường", "Phước Bình", "Phước Long A", "Phước Long B"]
                    },
                    {
                        district: "Quận 10",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Quận 11",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Quận 12",
                        wards: ["Thạnh Xuân", "Thạnh Lộc", "Thới An", "Tân Chánh Hiệp", "An Phú Đông", "Tân Thới Hiệp", "Tân Hưng Thuận"]
                    },
                    {
                        district: "Tân Bình",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Tân Phú",
                        wards: ["Hiệp Tân", "Hòa Thạnh", "Phú Thọ Hòa", "Phú Thạnh", "Phú Trung", "Sơn Kỳ", "Tân Qúy", "Tân Sơn Nhì"]
                    },
                    {
                        district: "Bình Thạnh",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Gò Vấp",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Phú Nhuận",
                        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"]
                    },
                    {
                        district: "Thủ Đức",
                        wards: ["Bình Chiểu", "Bình Thọ", "Hiệp Bình Chánh", "Hiệp Bình Phước", "Linh Chiểu", "Linh Đông", "Linh Tây", "Linh Trung"]
                    }
                ]
            }   
        ];

        const citySelector = document.getElementById('city');
        const districtSelector = document.getElementById('district');
        const wardSelector = document.getElementById('ward');

        // Populate city dropdown initially
        locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location.city;
            option.textContent = location.city;
            citySelector.appendChild(option);
        });

        // Event listener for city selection
        citySelector.addEventListener('change', () => {
            // Clear previous options
            districtSelector.innerHTML = '<option value="">Chọn quận / huyện</option>';
            wardSelector.innerHTML = '<option value="">Chọn phường / xã</option>';

            // Find selected city
            const selectedCity = locations.find(location => location.city === citySelector.value);
            console.log('Selected City:', selectedCity); // Log to check if selection is correct

            if (selectedCity && selectedCity.districts) {
                selectedCity.districts.forEach(district => {
                    const option = document.createElement('option');
                    option.value = district.district;
                    option.textContent = district.district;
                    districtSelector.appendChild(option);
                });
            } else {
                console.error("City selection invalid or no data available for city:", citySelector.value);
            }
        });

        // Event listener for district selection
        districtSelector.addEventListener('change', () => {
            // Clear previous options
            wardSelector.innerHTML = '<option value="">Chọn phường / xã</option>';

            const selectedCity = locations.find(location => location.city === citySelector.value);
            const selectedDistrict = selectedCity ? selectedCity.districts.find(district => district.district === districtSelector.value) : null;
            console.log('Selected District:', selectedDistrict); // Log to check if selection is correct

            if (selectedDistrict && selectedDistrict.wards) {
                selectedDistrict.wards.forEach(ward => {
                    const option = document.createElement('option');
                    option.value = ward;
                    option.textContent = ward;
                    wardSelector.appendChild(option);
                });
            } else {
                console.error("District selection invalid or no wards available for district:", districtSelector.value);
            }
        });
    }


    //

    function notShowInfo() {
        const paymentInfoDiv = document.getElementById('payment-info');
        if (paymentInfoDiv)
            paymentInfoDiv.innerHTML = '';
    }

    function showInfo() {
        const paymentInfoDiv = document.getElementById('payment-info');

        if (!ArrayBill[indexToDelete].method) {
            paymentInfoDiv.innerHTML = '';
            return;
        }

        let content = '';
        switch (ArrayBill[indexToDelete].method) {
            case 'Momo':
                content += `
            <div class="col-md-6 col-payment">
                <p><strong>Phương thức thanh toán:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>Tên:</strong> ${ArrayBill[indexToDelete].name}</p>
                <p><strong>SĐT:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>PIN:</strong> ${ArrayBill[indexToDelete].pin}</p>
<p><strong>Địa chỉ:</strong> 
    Street: ${ArrayBill[indexToDelete].location[0].street}, 
    District: ${ArrayBill[indexToDelete].location[0].district}, 
    Ward: ${ArrayBill[indexToDelete].location[0].ward}, 
    City: ${ArrayBill[indexToDelete].location[0].city}
</p>            </div>
        `;
                break;
            case 'ATM':
                content += `
            <div class="col-md-6 col-payment">
                <p><strong>Phương thức thanh toán:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>Số thẻ:</strong> ${ArrayBill[indexToDelete].cardNumber}</p>
                <p><strong>Ngày hết hạn:</strong> ${ArrayBill[indexToDelete].expiredDate}</p>
                <p><strong>CVC:</strong> ${ArrayBill[indexToDelete].cvc}</p>
                <p><strong>SĐT:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>PIN:</strong> ${ArrayBill[indexToDelete].pin}</p>
                <p><strong>Tên:</strong> ${ArrayBill[indexToDelete].name}</p>
<p><strong>Địa chỉ:</strong> 
    Street: ${ArrayBill[indexToDelete].location[0].street}, 
    District: ${ArrayBill[indexToDelete].location[0].district}, 
    Ward: ${ArrayBill[indexToDelete].location[0].ward}, 
    City: ${ArrayBill[indexToDelete].location[0].city}
</p>            </div>
        `;
                break;
            case 'Cash':
                content += `
            <div class="col-md-6 col-payment">
                <p><strong>Phương thức thanh toán:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>SĐT:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>Tên:</strong> ${ArrayBill[indexToDelete].name}</p>
                <p><strong>Ghi chú:</strong> ${ArrayBill[indexToDelete].note}</p>
<p><strong>Địa chỉ:</strong> 
    Đường: ${ArrayBill[indexToDelete].location[0].street}, 
    Quận: ${ArrayBill[indexToDelete].location[0].district}, 
    Phường: ${ArrayBill[indexToDelete].location[0].ward}, 
    Thành phố: ${ArrayBill[indexToDelete].location[0].city}
</p>            </div>
        `;
                break;
            default:
                content = '';
                break;
        }

        paymentInfoDiv.innerHTML = content;
    }

    function validateInputs() {
        let isValid = true;
        if (currentIndex === 0) {
            const paymentMethod = document.querySelector('input[name="payment"]:checked');
            if (paymentMethod == null) {
                return false;
            }
        }

        const street = document.getElementById('street').value;
        const ward = document.getElementById('ward').value;
        const district = document.getElementById('district').value;
        const city = document.getElementById('city').value;
        const errorMessage = document.getElementById('error-locat-delivery');

        console.log(ward, district, city);

        if (!street || !ward || !district || !city) {
            isValid = false;
            errorMessage.textContent = "Vui lòng điền đầy đủ thông tin địa chỉ.";
        } else {
            errorMessage.textContent = "";
        }

        switch (currentMethod) {
            case 'Momo':
                const momoPhone = document.getElementById('momo_phone');
                const momoName = document.getElementById('momo_name');
                const momoPin = document.getElementById('momo_pin');

                if (momoPhone && (momoPhone.value === '' || momoPhone.value.length !== 10)) {
                    document.getElementById('error-momo_phone').innerText = 'Vietnamese phone numbers need 10 digits';
                    document.getElementById('error-momo_phone').style.display = 'block';
                    isValid = false;
                } else if (momoPhone) {
                    document.getElementById('error-momo_phone').style.display = 'none';
                }

                if (momoName && momoName.value === '') {
                    document.getElementById('error-momo_name').innerText = 'Name is required';
                    document.getElementById('error-momo_name').style.display = 'block';
                    isValid = false;
                } else if (momoName) {
                    document.getElementById('error-momo_name').style.display = 'none';

                }

                if (momoPin && (momoPin.value === '' || momoPin.value.length < 6)) {
                    document.getElementById('error-momo_pin').innerText = 'Pin code must be 6 digits';
                    document.getElementById('error-momo_pin').style.display = 'block';
                    isValid = false;
                } else if (momoPin) {
                    document.getElementById('error-momo_pin').style.display = 'none';
                }
                return isValid;
            case 'ATM':
                const atmCardNumber = document.getElementById('atm_card_number');
                const atmExpiredDate = document.getElementById('atm_expired_date');
                const atmCvc = document.getElementById('atm_cvc');
                const atmPhone = document.getElementById('atm_phone');
                const atmPin = document.getElementById('atm_pin');
                const atmName = document.getElementById('atm_name');
                if (atmCardNumber && atmCardNumber.value === '') {
                    document.getElementById('error-atm_card_number').innerText = 'Card number is required';
                    document.getElementById('error-atm_card_number').style.display = 'block';
                    isValid = false;
                } else if (atmCardNumber) {
                    document.getElementById('error-atm_card_number').style.display = 'none';
                }

                if (atmExpiredDate && atmExpiredDate.value === '') {
                    document.getElementById('error-atm_expired_date').innerText = 'Expired date is required';
                    document.getElementById('error-atm_expired_date').style.display = 'block';
                    isValid = false;
                } else if (atmExpiredDate) {
                    document.getElementById('error-atm_expired_date').style.display = 'none';
                }

                if (atmCvc && (atmCvc.value === '' || atmCvc.value.length < 3)) {
                    document.getElementById('error-atm_cvc').innerText = 'CVC must be at least 3 digits';
                    document.getElementById('error-atm_cvc').style.display = 'block';
                    isValid = false;
                } else if (atmCvc) {
                    document.getElementById('error-atm_cvc').style.display = 'none';
                }

                if (atmPhone && (atmPhone.value === '' || atmPhone.value.length !== 10)) {
                    document.getElementById('error-atm_phone').innerText = 'Vietnamese phone numbers need 10 digits';
                    document.getElementById('error-atm_phone').style.display = 'block';
                    isValid = false;
                } else if (atmPhone) {
                    document.getElementById('error-atm_phone').style.display = 'none';
                }

                if (atmPin && (atmPin.value === '' || atmPin.value.length < 6)) {
                    document.getElementById('error-atm_pin').innerText = 'Pin code must be 6 digits';
                    document.getElementById('error-atm_pin').style.display = 'block';
                    isValid = false;
                } else if (atmPin) {
                    document.getElementById('error-atm_pin').style.display = 'none';
                }

                if (atmName && atmName.value === '') {
                    document.getElementById('error-atm_name').innerText = 'Name is required';
                    document.getElementById('error-atm_name').style.display = 'block';
                    isValid = false;
                } else if (atmName) {
                    document.getElementById('error-atm_name').style.display = 'none';
                }
                return isValid;
            case 'Cash':
                const cashPhone = document.getElementById('cash_phone');
                const cashName = document.getElementById('cash_name');

                if (cashPhone && (cashPhone.value === '' || cashPhone.value.length !== 10)) {
                    document.getElementById('error-cash_phone').innerText = 'Vietnamese phone numbers need 10 digits';
                    document.getElementById('error-cash_phone').style.display = 'block';
                    isValid = false;
                } else if (cashPhone) {
                    document.getElementById('error-cash_phone').style.display = 'none';
                }

                if (cashName && cashName.value === '') {
                    document.getElementById('error-cash_name').innerText = 'Name is required';
                    document.getElementById('error-cash_name').style.display = 'block';
                    isValid = false;
                } else if (cashName) {
                    document.getElementById('error-cash_name').style.display = 'none';
                }
                return isValid;
        }
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex === 1) {

            localStorage.setItem('ArrayBill', JSON.stringify(ArrayBill));
            case__payment.style.display = 'none';
            localStorage.removeItem("gioHang");
            noti("Thanh toán thành công!", 0);
            showCart();
        }
        if (currentIndex === 0) {
            if (validateInputs()) {
                document.getElementById('next').innerText = "Thanh toán";
                if (currentIndex < paymentData.length) {
                    saveDataToLocalStorage();
                    currentIndex++;
                    updateContent();
                    if (currentIndex === 1)
                        showInfo();
                }
            }
        }
    });

    function saveDataToLocalStorage() {
        const paymentMethod = document.querySelector('input[name="payment"]:checked');

        if (paymentMethod) {
            ArrayBill[indexToDelete].method = paymentMethod.value;

            switch (ArrayBill[indexToDelete].method) {
                case 'Momo':
                    ArrayBill[indexToDelete].phone = document.getElementById('momo_phone').value;
                    ArrayBill[indexToDelete].name = document.getElementById('momo_name').value;
                    ArrayBill[indexToDelete].pin = document.getElementById('momo_pin').value;
                    break;
                case 'ATM':
                    ArrayBill[indexToDelete].cardNumber = document.getElementById('atm_card_number').value;
                    ArrayBill[indexToDelete].expiredDate = document.getElementById('atm_expired_date').value;
                    ArrayBill[indexToDelete].cvc = document.getElementById('atm_cvc').value;
                    ArrayBill[indexToDelete].phone = document.getElementById('atm_phone').value;
                    ArrayBill[indexToDelete].pin = document.getElementById('atm_pin').value;
                    ArrayBill[indexToDelete].name = document.getElementById('atm_name').value;
                    break;
                case 'Cash':
                    ArrayBill[indexToDelete].phone = document.getElementById('cash_phone').value;
                    ArrayBill[indexToDelete].name = document.getElementById('cash_name').value;
                    ArrayBill[indexToDelete].note = document.getElementById('cash_note').value;
                    break;
            }
        }

        let setlocation = {
            street: document.getElementById('street').value,
            ward: document.getElementById('ward').value,
            district: document.getElementById('district').value,
            city: document.getElementById('city').value,
        };

        if (!ArrayBill[indexToDelete].location) {
            ArrayBill[indexToDelete].location = [];
        }
        if (Object.keys(users[indexUser].location).length === 0) {
            users[indexUser].location = setlocation;
            localStorage.setItem('users', JSON.stringify(users));
        }
        ArrayBill[indexToDelete].location.push(setlocation);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            if (ArrayBill.length > 0) {
                clearData();
                localStorage.setItem('ArrayBill', JSON.stringify(ArrayBill));
                case__payment.style.display = 'none';
                notShowInfo();
            }
        }
        if (currentIndex > 0) {
            clearData();
            currentIndex--;
            updateContent();
            // notShowInfo();
            if (currentIndex === 1)
                showInfo();
        }
        console.log(currentIndex);
    });

    function clearData() {

        if (indexToDelete >= 0 && indexToDelete < ArrayBill.length) {
            if (currentIndex === 1) {
                // Xóa các thuộc tính không cần thiết trong phần tử
                for (let key in ArrayBill[indexToDelete]) {
                    if (key !== "index" && key !== "username" && key !== "address" && key !== "phone" && key !== "status" && key !== "cart" && key !== "date" && key != "sum") {
                        delete ArrayBill[indexToDelete][key];
                    }
                }
            }

            if (currentIndex === 0) {
                // Xóa phần tử khỏi mảng nếu ở trang 0
                ArrayBill.splice(indexToDelete, 1);
            }

            console.log('Dữ liệu đã được xóa');
        }
    }
}
