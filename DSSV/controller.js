// index.js => file chính
// controller.js => file phụ
// tạo function render table
function renderDssv(svArray) {
  //  render array thành table
  var contentHTML = "";
  //duyệt mảng
  for (var i = 0; i < svArray.length; i++) {
    var sv = svArray[i];
    var trString = ` <tr>
                            <td>${sv.ma}</td>
                            <td>${sv.ten}</td>
                            <td>${sv.email}</td>
                            <td>0</td>
                            <td><button
                            onclick="xoaSv('${sv.ma}')"
                            class='btn btn-danger'>Xoá</button></td>
                       </tr>`;
    contentHTML += trString;
  }

  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
