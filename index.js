/*
Bài 1: Quản lý tuyển sinh
- Thí sinh sẽ trúng tuyển nếu có điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0.
- Điểm tổng kết là tổng điểm của 3 môn thi và điểm ưu tiên
- Điểm ưu tiên bao gồm ưu tiên theo khu vực và theo đối tượng
*/
document.getElementById("tinhDiem").onclick = function () {
  //input: diemM1, diemM2, diemM3, dChuan, khuVuc, doiTuong: number
  //   var dChuan = Number(document.getElementById("chuan").value);
  //   var diemM1 = Number(document.getElementById("mon1").value);
  //   var diemM2 = Number(document.getElementById("mon2").value);
  //   var diemM3 = Number(document.getElementById("mon3").value);
  //   var doiTuong = Number(document.getElementById("doiTuong").value);
  //   var khuVuc = document.getElementById("khuVuc").value;
  //output: ketQua: string
  var ketQua = "";
  //progress
  ketQua = tinhDiemTong("mon1", "mon2", "mon3", "khuVuc", "doiTuong", "chuan");

  //in kết quả ra
  document.getElementById("ketQua").innerHTML = ketQua;
};

/**
 * Hàm nhận vào id của các thẻ input và trả về điểm tổng của các thẻ
 * @param {*} id1 id1 là id thẻ input điểm môn 1 (string)
 * @param {*} id2 id2 là id thẻ input điểm môn 2 (string)
 * @param {*} id3 id3 là id thẻ input điểm môn 3 (string)
 * @param {*} id4 id4 là id thẻ input điểm khu vực (string)
 * @param {*} id5 id5 là id thẻ input điểm đối tượng (string)
 * @param {*} id6 id6 là id thẻ input điểm chuẩn (string)
 * @returns kết quả trả về là số điểm tổng
 */

function tinhDiemTong(id1, id2, id3, id4, id5, id6) {
  //input: id của 6 thẻ input nào đó
  var diemM1 = Number(document.getElementById(id1).value);
  var diemM2 = Number(document.getElementById(id2).value);
  var diemM3 = Number(document.getElementById(id3).value);
  var khuVuc = document.getElementById(id4).value;
  var doiTuong = Number(document.getElementById(id5).value);
  var dChuan = Number(document.getElementById(id6).value);
  //output: diemTong:number, ketQua: string
  var diemTong = 0;
  var ketQua = "";
  //Xử lý:
  //Tính điểm khu vực
  switch (khuVuc) {
    case "X":
      diemKV = 0;
      break;
    case "A":
      diemKV = 2;
      break;
    case "B":
      diemKV = 1;
      break;
    case "C":
      diemKV = 0.5;
      break;
  }
  //Tính điểm đối tượng
  switch (doiTuong) {
    case 0:
      diemDT = 0;
      break;
    case 1:
      diemDT = 2.5;
      break;
    case 2:
      diemDT = 1.5;
      break;
    case 3:
      diemDT = 1;
      break;
  }
  diemTong = diemM1 + diemM2 + diemM3 + diemKV + diemDT;
  if (diemM1 === 0 || diemM2 === 0 || diemM3 === 0) {
    ketQua = "Gớt gồi, có hột vịt nha!";
  } else if (diemTong >= dChuan) {
    ketQua = "Đậu nha, quẩy đi bạn ơi. Tổng điểm là: " + diemTong;
  } else {
    ketQua = "Bạn đã gớt. Tổng điểm là: " + diemTong;
  }

  return ketQua; //output
}

/*
Bài 2: Tính tiền điện
- 50kw đầu: 500d/kw.
- 50kw kế: 650d/kw
- 100kw kế: 850d/kw
- 150kw kế: 1100d/kw
- Còn lại: 1300d/kw
*/
document.getElementById("tinhTienDien").onclick = function () {
  //progress thanhTien: string
  var thanhTien = "";
  var thanhTien = tinhTienDien("hoTen", "soKw");
  //input output ra giao diện
  document.getElementById("tienDien").innerHTML = thanhTien;
};

/**
 * Hàm nhận vào id của các thẻ input và trả về giá tiền điện
 * @param {*} id1 id1 là id thẻ input họ tên (string)
 * @param {*} id2 id1 là id thẻ input số kw (string)
 * @returns kết quả trả về là giá tiền điện
 */

function tinhTienDien(id1, id2) {
  //input: id của 2 thẻ input nào đó
  var value1 = document.getElementById(id1).value;
  var value2 = Number(document.getElementById(id2).value);
  //output: tien: number, ketQua: string
  var tien = 0;
  var ketQua = "";
  if (value2 <= 50) {
    //50kw đầu
    tien = 500 * value2;
  } else if (value2 <= 100) {
    //50kw kế
    tien = 500 * 50 + (value2 - 50) * 650;
  } else if (value2 <= 200) {
    //100kw kế
    tien = 500 * 50 + 650 * 50 + (value2 - 100) * 850;
  } else if (value2 <= 350) {
    //150kw kế
    tien = 500 * 50 + 650 * 50 + 850 * 100 + (value2 - 200) * 1100;
  } else {
    //còn lại
    tien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (value2 - 350) * 1300;
  }
  ketQua =
    "Họ tên: " + value1 + "; Tiền điện: " + tien.toLocaleString() + " vnd";
  return ketQua; //output
}

/*
Bài 3: Tính thuế thu nhập cá nhân. Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6 tr
- Thu nhập đến 60tr -> thuế suất 5%
- Thu nhập trên 60 đến 120 -> thuế suất 10%
- Thu nhập trên 120 đến 210 -> thuế suất 15%
- Thu nhập trên 210 đến 384 -> thuế suất 20%
- Thu nhập trên 384 đến 624 -> thuế suất 25%
- Thu nhập trên 624 đến 960 -> thuế suất 30%
- Thu nhập trên 960 -> thuế suất 35%
*/
document.getElementById("tinhThue").onclick = function () {
  //progess tienThue: string
  var tienThue = "";
  tienThue = thueThuNhap("ten", "thuNhapNam", "soNguoiPT");
  //output: in output ra giao diện
  document.getElementById("tienThue").innerHTML = tienThue;
};

/**
 * Hàm nhận vào id của các thẻ input và trả về thuế thu nhập
 * @param {*} id1 id1 là id thẻ input họ tên (string)
 * @param {*} id2 id2 là id thẻ input tổng thu nhập năm (number)
 * @param {*} id3 id2 là id thẻ input số người phụ thuộc (number)
 * @returns kết quả trả về là tiền thuế thu nhập
 */

function thueThuNhap(id1, id2, id3) {
  //input: id của 2 thẻ input nào đó
  var value1 = document.getElementById(id1).value;
  var value2 = Number(document.getElementById(id2).value);
  var value3 = Number(document.getElementById(id3).value);
  //output: thueSuat, tienThue: number, ketQua: string
  var tienThue = 0;
  var thueSuat = 0;
  var ketQua = "";
  if (value2 <= 4e6) {
    //nếu tổng thu nhập năm <= 40 tr
    ketQua = "Không cần nộp thuế nha!";
  } else if (value2 <= 60e6) {
    //nếu tổng thu nhập năm <= 60 tr
    thueSuat = 0.05;
  } else if (value2 <= 120e6) {
    //nếu tổng thu nhập năm <= 120 tr
    thueSuat = 0.1;
  } else if (value2 <= 210e6) {
    //nếu tổng thu nhập năm <= 210 tr
    thueSuat = 0.15;
  } else if (value2 <= 384e6) {
    //nếu tổng thu nhập năm <= 384 tr
    thueSuat = 0.2;
  } else if (value2 <= 624e6) {
    //nếu tổng thu nhập năm <= 624 tr
    thueSuat = 0.25;
  } else if (value2 <= 960e6) {
    //nếu tổng thu nhập năm <= 960 tr
    thueSuat = 0.3;
  } else {
    //nếu tổng thu nhập năm > 960 tr
    thueSuat = 0.35;
  }
  tienThue = (value2 - 4e6 - value3 * 1.6e6) * thueSuat;
  ketQua =
    "Họ tên: " +
    value1 +
    "; Tiền thuế thu nhập cá nhân: " +
    tienThue.toLocaleString() +
    " vnd";
  return ketQua; //output
}

/*
Bài 4: Tính tiền cáp. Có 2 loại khách hàng, có 2 mức giá tính tiền cáp
- Nhà dân
 + Phí xử lý hóa đơn: 4.5$
 + Phí dịch vụ cơ bản: 20.5$
 + Thuê kênh cao cấp: 7.5$ / kênh
- Doanh nghiệp:
 + Phí xử lý hóa đơn: 15$
 + Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu, sau đó 5$ mỗi kết nối
 + Thuê kênh cao cấp: 50$ / kênh
*/
document.getElementById("tinhTienCap").onclick = function () {
  //progress: tienCap: string
  var tienCap = "";
  tienCap = tinhTienCap("loaiKH", "maKH", "soKenh", "soKetNoi");
  //input output ra giao diện
  document.getElementById("tienCap").innerHTML = tienCap;
};

/**
 * Hàm nhận vào id của các thẻ input và trả về giá tiền cáp
 * @param {*} id1 id1 là id thẻ input loại khách hàng (string)
 * @param {*} id2 id2 là id thẻ input mã khách hàng (number)
 * @param {*} id3 id3 là id thẻ input số kênh cao cấp (number)
 * @param {*} id4 id4 là id thẻ input số kết nối (number)
 * @returns kết quả trả về là giá tiền cáp
 */

function tinhTienCap(id1, id2, id3, id4) {
  //input: id của 4 thẻ input nào đó
  var value1 = Number(document.getElementById(id1).value);
  var value2 = document.getElementById(id2).value;
  var value3 = Number(document.getElementById(id3).value);
  var value4 = Number(document.getElementById(id4).value);
  //output: phiHoaDon, phiDVCoBan, kenhCaoCap, tongTien: number, ketQua: string
  phiHoaDon = 0;
  phiDVCoBan = 0;
  phiKenhCaoCap = 0;

  switch (value1) {
    case 1: // nếu khách hàng là nhà dân
      {
        phiHoaDon = 4.5;
        phiDVCoBan = 20.5;
        phiKenhCaoCap = 7.5;
      }
      break;
    case 2: // nếu khách hàng là doanh nghiệp
      {
        phiHoaDon = 15;
        phiKenhCaoCap = 50;
        if (value4 <= 10) {
          phiDVCoBan = 75;
        } else {
          phiDVCoBan = 75 + (value4 - 10) * 5;
        }
      }
      break;
    default: {
      ketQua = "Vui lòng chọn loại khách hàng";
      return ketQua; //output
    }
  }
  tongTien = phiHoaDon + phiDVCoBan + phiKenhCaoCap * value3;
  ketQua = "Mã khách hàng: " + value2 + ";Tiền cáp: $" + tongTien.toFixed(2);
  return ketQua; //output
}

document.getElementById("loaiKH").onchange = function () {
  var loaiKH = Number(document.getElementById("loaiKH").value);
  var soKetNoi = document.getElementById("soKetNoi");
  if (loaiKH === 2) {
    // nếu khách hàng là doanh nghiệp => hiện thẻ input nhập số kết nối
    soKetNoi.style.display = "block";
  } else {
    // nếu khách hàng là nhà dân hoặc không chọn => ẩn thẻ input nhập số kết nối
    soKetNoi.style.display = "none";
  }
};
