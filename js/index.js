// for (let i = 2; i <= 10; i++) {
//     console.log(i);
//     for (let j = 1; j <= 9; j++) {
//         console.log(i + "x" + j + "=" + i * j);
//     }
// }

// let n = +prompt("Mời bạn nhập n");
// let m = (n * (n + 1)) / 2;
// for (let n = 1; n <= m; n++) {
//     console.log(m);
//     break;
// }

// let m = +prompt("Mời nhập số m");
// let n = +prompt("Mời nhập số n");
// for (let i = m; m <= i && i <= n; i++) {
//     if (i % 2 === 0) {
//         console.log("Các số chẵn: " + i);
//     } else {
//         console.log("Các số lẻ: " + i);
//     }
// }

// let myName = "Minh";
// let nameReverce = "";
// .length : Đo chiều daì của một chuỗi
// Mặc định biến nameReverce là một chuỗi rỗng
// Cứ mỗi lần lặp qua thì sẽ nhận được từng ký tự đảo ngược
// Sau đấy chúng ta sẽ nối các ký tự đấy (lưu trữ vào biến nameReverce)
// for (let i = myName.length - 1; i >= 0; i--) {
//     nameReverce = nameReverce + myName[i];
// }
// console.log("Chuỗi đảo ngược: ", nameReverce);

// let a = 0;
// let b = 1;
// let c;
// console.log(a);
// console.log(b);
// for (let i = 2; i < 20; i++) {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }

// let a = +parseInt(prompt("Mời nhập số a"));
// let total = 0;
// for (let i = 1; i <= a / 2; i++) {
//     if (a % i === 0) total += i;
// }
// if (total == a) {
//     console.log(a + " là số hoàn hảo");
// } else {
//     console.log(a + " không là số hoàn hảo");
// }