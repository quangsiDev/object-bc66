//  danh sách => array  , điện thoại => object
// danh sách điện thoại => array  chứa object

var phone1 = { name: "sam sung J7", price: 2000 };
var phone2 = { name: "sam sung J9", price: 9000 };
var phone3 = { name: "iphone 15", price: 15000 };

// tạo array chứa ds điện thoại
var phoneArr = [phone1, phone3, phone2];

// in ra tên các điện thoại đang có => duyệt mảng

for (var i = 0; i < phoneArr.length; i++) {
  // i = 3
  var phone = phoneArr[i];
  console.log("😀 - phone", phone.name);
}

// đếm số lượng điện thoại có giá nằm trong khoản từ 7000 đến 10000

// var count = 0;
var result = [];
for (var i = 0; i < phoneArr.length; i++) {
  var phone = phoneArr[i];
  if (phone.price >= 7000 && phone.price <= 10000) {
    // count++;
    result.push(phone);
  }
}

// xoá điện thoại có tên "iphone 15"

// xoá => splice và index

for (var i = 0; i < phoneArr.length; i++) {
  if (phoneArr[i].name == "iphone 15") {
    phoneArr.splice(i, 1);
  }
}
console.log("😀 - phoneArr", phoneArr);

// tìm vị trí bằng findIndex

var index = phoneArr.findIndex(function (item) {
  return item.name == "sam sung J9";
});
console.log("😀 - index", index);
