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

    ArrayBill = JSON.parse(localStorage.getItem("ArrayBill")) || [];
    let indexToDelete = ArrayBill.length - 1;
    let currentIndex = 0;
    let currentMethod = '';
    // const prevAddressCheckbox = document.getElementById('prev_address');

    // Content
    const paymentData = [
        `
        <div class="payment__option" id="payment__option">
            <h2>How would you like to pay?</h2>
            <br>
            <label>
                <input type="radio" name="payment" value="Momo"> Momo
            </label>
            <label>
                <input type="radio" name="payment" value="ATM"> ATM
            </label>
            <label>
                <input type="radio" name="payment" value="Cash"> Cash
            </label>
        </div>
        <div class="payment__information" id="payment__information">
        </div>
        <div id="locat-delivery">
            <label for="street">Street Address</label>
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
        <label for="prev_address">Do you want to use account address</label>
        <input type="checkbox" name="prev_address" id="prev_address">
        `,
        `
        <div class="receipt-container">
            <h2>Payment Detail</h2>
            <div id="payment-info"></div>
        </div>
        `
    ];

    function updateContent() {
        contentDiv.innerHTML = paymentData[currentIndex];

        if (currentIndex === 0) {
            const locationInput = document.getElementById('location');
            const prevAddressCheckbox = document.getElementById('prev_address');


            //Chưa sửa address của signin signup nên chưa có công dụng 
            if (prevAddressCheckbox.checked && ArrayBill[indexToDelete].location.length > 0) {
                const userLocation = ArrayBill[indexToDelete].location[0];
                locationInput.value = `${userLocation.street}, ${userLocation.ward}, ${userLocation.district}, ${userLocation.city}`;
            }

            prevAddressCheckbox.addEventListener('change', function () {
                if (prevAddressCheckbox.checked && ArrayBill[indexToDelete].location.length > 0) {
                    const userLocation = ArrayBill[indexToDelete].location[0];
                    locationInput.value = `${userLocation.street}, ${userLocation.ward}, ${userLocation.district}, ${userLocation.city}`;
                } else {
                    locationInput.value = '';
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
                            <label for="momo_phone">Phone number</label>
                            <input type="text" name="momo_phone" id="momo_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                            <div class="error-message" id="error-momo_phone"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="momo_name">Name</label>
                            <input type="text" name="momo_name" id="momo_name" title="Please enter Name" placeholder="Name" required>
                        <div class="error-message" id="error-momo_name"></div>
                            </div>
                        <div class="payment__option__item">
                            <label for="momo_pin">Pin code</label>
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
                            <label for="atm_card_number">Card number</label>
                            <input type="text" inputmode="numeric" name="atm_card_number" id="atm_card_number" pattern="[0-9]*"
                                title="Please enter Card number" placeholder="Card number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                                        <div class="error-message" id="error-atm_card_number"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_expired_date">Expired date</label>
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
                            <label for="atm_phone">Phone number</label>
                            <input type="text" name="atm_phone" id="atm_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                        <div class="error-message" id="error-atm_phone"></div>
                                </div>
                        <div class="payment__option__item">
                            <label for="atm_pin">Pin code</label>
                            <input type="text" name="atm_pin" id="atm_pin" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Pin code" placeholder="******" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="6">
                        <div class="error-message" id="error-atm_pin"></div>
                        </div>
                        <div class="payment__option__item">
                            <label for="atm_name">Name</label>
                            <input type="text" name="atm_name" id="atm_name" title="Please enter Name" placeholder="Name" required>
                        <div class="error-message" id="error-atm_name"></div>
                            </div>
                    `;
                break;

            case 'Cash':
                options.innerHTML = `
                        <div class="payment__option__item">
                            <label for="cash_phone">Phone number</label>
                            <input type="text" name="cash_phone" id="cash_phone" inputmode="numeric" pattern="[0-9]*"
                                title="Please enter Phone number" placeholder="Number" required
                                oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="10">
                        <div class="error-message" id="error-cash_phone"></div>                        
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_name">Name</label>
                            <input type="text" name="cash_name" id="cash_name" title="Please enter Name" placeholder="Name" required>
                        <div class="error-message" id="error-cash_name"></div>                        
                        </div>
                        <div class="payment__option__item">
                            <label for="cash_note">Note (optional)</label>
                            <input type="text" name="cash_note" id="cash_note" title="Enter Note" placeholder="Note (optional)">
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
    const locations = [
        {
            city: "Hồ Chí Minh",
            districts: [
                {
                    district: "Quận 1",
                    wards: ["Bến Nghé", "Bến Thành", "Cầu Kho", "Cầu Ông Lãnh", "Cô Giang", "Cầu Ông Lãnh", "Nguyễn Thái Bình", "Phạm Ngũ Lão"]
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
        },
    ];

    const citySelector = document.getElementById("city");
    const districtSelector = document.getElementById("district");
    const wardSelector = document.getElementById("ward");

    locations.forEach(location => {
        const option = document.createElement("option");
        option.value = location.city;
        option.textContent = location.city;
        citySelector.appendChild(option);
    });

    citySelector.addEventListener("change", () => {
        districtSelector.innerHTML = "";
        wardSelector.innerHTML = "";
        const selectedCity = locations.find(location =>
            location.city === citySelector.value);
        selectedCity.districts.forEach(district => {
            const option = document.createElement("option");
            option.value = district.district;
            option.textContent = district.district;
            districtSelector.appendChild(option);
        });
    });

    districtSelector.addEventListener("change", () => {
        wardSelector.innerHTML = "";
        const selectedCity = locations.find(location => location.city === citySelector.value);
        const selectedDistrict = selectedCity.districts.find(district => district.district === districtSelector.value);
        selectedDistrict.wards.forEach(ward => {
            const option = document.createElement("option");
            option.value = ward;
            option.textContent = ward;
            wardSelector.appendChild(option);
        })
    });

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
                <p><strong>Payment method:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>Name:</strong> ${ArrayBill[indexToDelete].name}</p>
                <p><strong>Phone:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>PIN:</strong> ${ArrayBill[indexToDelete].pin}</p>
<p><strong>Location:</strong> 
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
                <p><strong>Payment method:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>Card number:</strong> ${ArrayBill[indexToDelete].cardNumber}</p>
                <p><strong>Expired date:</strong> ${ArrayBill[indexToDelete].expiredDate}</p>
                <p><strong>CVC:</strong> ${ArrayBill[indexToDelete].cvc}</p>
                <p><strong>Phone:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>PIN:</strong> ${ArrayBill[indexToDelete].pin}</p>
                <p><strong>Name:</strong> ${ArrayBill[indexToDelete].name}</p>
<p><strong>Location:</strong> 
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
                <p><strong>Payment method:</strong> ${ArrayBill[indexToDelete].method}</p>
                <p><strong>Phone:</strong> ${ArrayBill[indexToDelete].phone}</p>
                <p><strong>Name:</strong> ${ArrayBill[indexToDelete].name}</p>
                <p><strong>Note:</strong> ${ArrayBill[indexToDelete].note}</p>
<p><strong>Location:</strong> 
    Street: ${ArrayBill[indexToDelete].location[0].street}, 
    District: ${ArrayBill[indexToDelete].location[0].district}, 
    Ward: ${ArrayBill[indexToDelete].location[0].ward}, 
    City: ${ArrayBill[indexToDelete].location[0].city}
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
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
        if (currentIndex === 0) {
            if (validateInputs()) {
                if (currentIndex < paymentData.length) {
                    saveDataToLocalStorage();
                    currentIndex++;
                    updateContent();
                    if (currentIndex === 1)
                        showInfo();
                }
                console.log(currentIndex);
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

        const location = {
            street: document.getElementById('street').value,
            ward: document.getElementById('ward').value,
            district: document.getElementById('district').value,
            city: document.getElementById('city').value,
        };

        if (!ArrayBill[indexToDelete].location) {
            ArrayBill[indexToDelete].location = [];
        }

        ArrayBill[indexToDelete].location.push(location);
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
                    if (key !== "index" && key !== "username" && key !== "address" && key !== "phone" && key !== "status" && key !== "cart" && key !== "date") {
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
