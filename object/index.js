// object ~ đối tượng

// tạo 1 object để lư thông tin của người dùng

/*
     var name ={
        key:value,
     }
 */
var user1 = {
  name: "Alice",
  gmail: "alice@gmail.com",
};
var user2 = {
  name: "Bob",
  gmail: "bob@gmail.com",
};
/**
 Compare array và object

 Array: lưu  các data cùng 1 nhóm  ~ dùng dấu [ ] ~ truy xuất tới phần tử bên trong dựa vào index   ( list - [] - index )

 Object: lưu các thông tin khác nhau cùng trỏ tới 1 đối tượng ~ dấu { } ~ truy xuất value thông qua key ( object - {} -  key  )
*/

// tạo object chứa thông tin 1 con mèo

var cat = {
  name: "miu", // property
  color: "white", // property
  speak: function () {
    // method
    console.log("meo meo");
  },
  child: {
    name: "kity",
    color: "white",
    speak: function () {
      console.log("kity meo meo");
    },
  },
};

// in ra tên của con mèo
//  object.key

console.log(cat.name);
console.log(cat.speak());

cat.child.speak();

// con trỏ this ( sử dụng bên trong object)

var dog = {
  name: "lulu",
  color: "black",
  speak: function () {
    console.log("gâu gâu, my name : ", this.name);
  },
  introduce: function () {
    console.log("Hi everyone");
    this.speak();
  },
};

dog.speak();

dog.introduce();

// update value của key

dog.color = "supper black";
console.log("😀 - dog", dog);
