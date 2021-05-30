// BÀI TẬP TÍNH TIỀN LƯƠNG NHÂN VIÊN
/*
 Đầu vào:
 - SoNgayCong: lấy giá trị tự nhập ở ô input id="salary__timework"
 - Tiền lương trên ngày đề bài đã cho, nhưng ở đây em thiết kế có thể tính nhiều mức lương khác nhau (nhập ở ô id="salary__oneday")

--Xử lý --
Lương = salary__oneday * 100.000

Đầu ra:
* xuất ra tổng tiền lương ở id id="salary__total"

*/

document.getElementById("salary__bill").onclick = function () {
  var salaryOneDay = document.getElementById("salary__oneday").value;
  var salaryTimeWork = document.getElementById("salary__timework").value;
  var totalSalary = salaryOneDay * salaryTimeWork;
  document.getElementById("salary__total").placeholder =
    totalSalary.toLocaleString("vi-VN");
};

// BT2 Tính trung bình cộng của 5 số thực: 
/**
Đầu vào:
Nhập vào 5 số thực: realnumber_one, realnumber_two, realnumber_three, realnumber_four, realnumber_five

Xử lý
 realnumber__btn = (realnumber_one, realnumber_two, realnumber_three, realnumber_four, realnumber_five)/5

 Đầu ra:
 Xuất ra số trung bình của 5 số thực
 */
// item1
document.getElementById("realnumber__next1").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item1").style.display = "none";
  document.getElementById("item2").style.display = "block";
};

document.getElementById("realnumber__previous1").onclick = function () {
  console.log("Quay lại");
};
// item2
document.getElementById("realnumber__next2").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item2").style.display = "none";
  document.getElementById("item3").style.display = "block";
};

document.getElementById("realnumber__previous2").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item2").style.display = "none";
  document.getElementById("item1").style.display = "block";
};
//item3
document.getElementById("realnumber__next3").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item3").style.display = "none";
  document.getElementById("item4").style.display = "block";
};

document.getElementById("realnumber__previous3").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item3").style.display = "none";
  document.getElementById("item2").style.display = "block";
};
//item4
document.getElementById("realnumber__next4").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("item4").style.display = "none";
  document.getElementById("item5").style.display = "block";
};

document.getElementById("realnumber__previous4").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item4").style.display = "none";
  document.getElementById("item3").style.display = "block";
};
//item5
document.getElementById("realnumber__next5").onclick = function () {
  console.log("tiếp tục");
  document.getElementById("realnumber__btn").style.display = "block";
};

document.getElementById("realnumber__previous5").onclick = function () {
  console.log("Quay lại");
  document.getElementById("item5").style.display = "none";
  document.getElementById("item4").style.display = "block";
};
//realnumber__btn
document.getElementById("realnumber__btn").onclick = function () {
  document.getElementById("item5").style.display = "none";
  document.getElementById("item1").style.display = "block";
  var realNumberOne = document.getElementById("realnumber_one").value;
  var realNumberTwo = document.getElementById("realnumber_two").value;
  var realNumberThree = document.getElementById("realnumber_three").value;
  var realNumberFour = document.getElementById("realnumber_four").value;
  var realNumberFive = document.getElementById("realnumber_five").value;
  document.getElementById("realnumber_input").style.display = "inline";
  var realNumberInput1 = document.getElementById("realnumber_input1");
  var realNumberInput2 = document.getElementById("realnumber_input2");
  var realNumberInput3 = document.getElementById("realnumber_input3");
  var realNumberInput4 = document.getElementById("realnumber_input4");
  var realNumberInput5 = document.getElementById("realnumber_input5");
  realNumberInput1.innerHTML = realNumberOne;
  realNumberInput2.innerHTML = realNumberTwo;
  realNumberInput3.innerHTML = realNumberThree;
  realNumberInput4.innerHTML = realNumberFour;
  realNumberInput5.innerHTML = realNumberFive;

  var realNumberAverage =
    (parseFloat(realNumberOne) +
      parseFloat(realNumberTwo) +
      parseFloat(realNumberThree) +
      parseFloat(realNumberFour) +
      parseFloat(realNumberFive)) /
    5;
  document.getElementById("realnumber__average").innerHTML =
    realNumberAverage.toLocaleString("vi-VN");
};
// BT3
/**
  Đầu vào
    - Nhập số tiền dollar ở ô currency__input
    - Giá trị quy đổi tiền đề bài đã cho là 23.500VND

    Xử lý:
    - currency__btn = currency__input * 23.500VND

    Đầu ra:

    - Xuất thông tin số tiền quy đổi từ ô currency__input sang VND
 */
document.getElementById("currency__btn").onclick = function () {
  var currencyInput = document.getElementById("currency__input").value;
  var currencyOutput = document.getElementById("currency__output");
  var exchangeCurrency = currencyInput * 23500;
  currencyOutput.innerHTML = exchangeCurrency.toLocaleString("vi-VN");
};

// BT4
/**
 Đầu vào:
   Đầu vào:
    Chiều dài = giá trị nhập vào ô input rectangle__length
    Chiều rộng = giá trị nhập vào ô input rectangle__width


    Xử lý:
    Tính chu vi
    rectangle__perimeter = (rectangle__length + rectangle__width) * 2;

    Tính diện tích
    btnAcreage = rectangle__length * rectangle__width;
 */

document.getElementById("rectangle__perimeter").onclick = function () {
  var rectangleLength = document.getElementById("rectangle__length").value;
  var rectangleWidth = document.getElementById("rectangle__width").value;
  var rectangleOutputP = document.getElementById("rectangle__outputP");
  var perimeter;
  perimeter = (parseFloat(rectangleLength) + parseFloat(rectangleWidth)) * 2;
  rectangleOutputP.innerHTML = perimeter.toLocaleString("vi-VN");
};

document.getElementById("rectangle__acreage").onclick = function () {
  var rectangleLength = document.getElementById("rectangle__length").value;
  var rectangleWidth = document.getElementById("rectangle__width").value;
  var rectangleOutputS = document.getElementById("rectangle__outputS");
  var acreage;
  acreage = parseFloat(rectangleLength) * parseFloat(rectangleWidth);
  rectangleOutputS.innerHTML = acreage.toLocaleString("vi-VN");
};
// BT 5
/**
  Đầu vào
    - Nhập số có 2 chữ số vào ô input number__input
    - Hàng đơn vị = number__input % 10;
    - Hàng chục = number__input / 10;

    Xử lý
    number__output = numberChuc + numberDonvi;

    Đầu ra

    Xuất ra tổng 2 ký số

 */
document.getElementById("number__btn").onclick = function () {
  var numberInput = document.getElementById("number__input").value;
  var numberOutput = document.getElementById("number__output");
  var numberDonvi = numberInput % 10;
  var numberChuc = Math.floor(numberInput / 10);
  if (numberInput >= 10 && numberDonvi < 10 && numberChuc < 10) {
    var TongHaiKySo = numberDonvi + numberChuc;
    numberOutput.innerHTML = TongHaiKySo;
  } else {
    numberOutput.innerHTML = "Nhập lại số đi bạn eyy!! ";
  }
};
