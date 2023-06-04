// bài 1
document.getElementById("tinhTien").onclick = function(){
    var soDien = document.getElementById("soDien").value * 1
    var hoTen = document.getElementById("hoTen").value
    var tongTien = ``;
    if(soDien <= 50) {
        tongTien = soDien * 500
    } 
    else if(soDien <= 100) {
        tongTien = (50 * 500) + ((soDien - 50) * 650) 
    } 
    else if(soDien <= 200) {
        tongTien = (50 * 500) + (50 * 650) + ((soDien - 100) * 850)
    }
    else if(soDien <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100)
    } 
    else {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300)
    }
    document.getElementById("ketQua").innerHTML = `Tổng tiền điện của ${hoTen} là ${tongTien.toLocaleString("vn-VN",{
        style : "currency",
        currency : "VND",
    })}`
}

// bài 2
document.getElementById("tinhThue").onclick = function (){
    var tenNguoiNopThue = document.getElementById("tenNguoiNopThue").value
    var tongthuNhap = document.getElementById("tongThuNhap").value * 1
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1
    const tienNguoiPhuThuoc = 4000000
    var tienThue = ``
    if (tongthuNhap <= 60000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.05
    }
    else if (tongthuNhap <= 120000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.1
    }
    else if (tongthuNhap <= 210000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.15
    }
    else if (tongthuNhap <= 384000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.2
    }
    else if (tongthuNhap <= 624000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.25
    }
    else if (tongthuNhap <= 960000000) {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.3
    }
    else {
        tienThue = (tongthuNhap - (nguoiPhuThuoc * tienNguoiPhuThuoc )) * 0.35
    }
    document.getElementById("tienThue").innerHTML = `Tiền thuế của ${tenNguoiNopThue} là ${tienThue.toLocaleString("vn-VN",{
        style : "currency",
        currency : "VND",
    })}`
}