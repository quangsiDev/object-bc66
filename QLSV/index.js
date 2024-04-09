/**
 1 . Lấy thông tin từ form
 2 . Tạo object dự vào bước 1
 3 . Show object lên layout
 */

function submit() {
  //   object sẽ gồm 7 key ( phương thức + thuộc tính)
  console.log("yes");
  //   lấy thông tin
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var van = document.getElementById("txtDiemVan").value * 1;
  //   tạo bject
  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    toan: toan,
    van: van,
    tinhDTB: function () {
      var dtb = (this.toan + this.van) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb >= 5) {
        return "Đậu";
      }
      return "Rớt";
    },
  };
  //   hiển thị lên layout
  document.querySelector("#spanTenSV").innerText = sv.name;
  document.querySelector("#spanMaSV").innerText = sv.ma;
  document.querySelector("#spanLoaiSV").innerText = sv.loai;
  document.querySelector("#spanDTB").innerText = sv.tinhDTB();
  document.querySelector("#spanXepLoai").innerText = sv.xepLoai();
}
