// Tính lương nhân viên

document.getElementById("btnTinhLuong").onclick = function(){

// đầu vào
    var luongNgay =document.getElementById("luongNgay").value*1;
    var soNgay = document.getElementById("soNgay").value*1;
    
// xử lý
    var luongNhanVien = luongNgay*soNgay;
    var currentFormat = new Intl.NumberFormat("vn-VN");

// Đầu ra

    var result = "<div>";
    result += "<p> Lương nhân viên : " + currentFormat.format(luongNhanVien) + " VNĐ </p>";
    result += "</div>";

    document.getElementById("showLuong").innerHTML=result;
    document.getElementById("showLuong").classList.add("bg-success");
    document.getElementById("showLuong").classList.add("text-white");
    document.getElementById("showLuong").classList.add("text-center");
}


// tính giá trị trung bình

document.getElementById("btnGiaTriTB").onclick = function(){
    
// Đầu vào
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var number4 = +document.getElementById("number4").value;
    var number5 = +document.getElementById("number5").value;
    
// Xử lý
    var average = (number1 + number2 + number3 + number4 + number5)/5;

// Đầu ra
    
    var result = "<div>"
    result += "<p> Giá trị trung bình của năm số : (" + number1 + "; " + number2 + "; " + number3 + "; " + number4 + "; " + number5 + ") là : " + average + "</p>";
    result += "</div>";
    
    document.getElementById("showGiaTriTB").innerHTML = result;
    document.getElementById("showGiaTriTB").classList.add("bg-success");
    document.getElementById("showGiaTriTB").classList.add("text-white")

}

// QUy đổi tiền

document.getElementById("btn-changed").onclick = function( ){
    
// Đầu vào
    var money = +document.getElementById("money").value;
    var rate = +document.getElementById("rate").value;

// Xử lý
    var moneyChanged = money*rate;
    var currentFormat = new Intl.NumberFormat("vn-VN");

//  Đầu ra
    var result = "<div>";
    result += "<p>Số tiền quy đổi : " + currentFormat.format(moneyChanged) + " VNĐ </p>"
    result += "</div>";
    document.getElementById("showChanged").innerHTML=result;
    document.getElementById("showChanged").classList.add("bg-success");
    document.getElementById("showChanged").classList.add("text-white");
    document.getElementById("showChanged").classList.add("text-center");
}

// Tính diện tích và chu vi hình chữ nhật

document.getElementById("areaPerimeter").onclick = function(){
    console.log(123);
// Đầu vào
    var longEdge = +document.getElementById("longEdge").value;
    var shortEdge = +document.getElementById("shortEdge").value;

// Xử lý

    var area = longEdge*shortEdge;
    var Perimeter = (longEdge+shortEdge)*2;
    var currentFormat = new Intl.NumberFormat("vn-VN");

// Đầu ra
    var result = "<div>";
    result += "<p> Diện tích HCN là : " + currentFormat.format(area) + " ĐVDT</p>"
    result += "<p> Chu vi HCN là : " + currentFormat.format(Perimeter) + " ĐVCV</p>"
    result += "</div>";

    document.getElementById("showAreaPerimeter").innerHTML = result;
    document.getElementById("showAreaPerimeter").classList.add("bg-success");
    document.getElementById("showAreaPerimeter").classList.add("text-white");
}

// Tổng hai ký số

document.getElementById("btnTotal").onclick = function(){
// Đầu vào
    var twoDigitNumber = +document.getElementById("twoDigitNumber").value;

// xử lý
    var tens = Math.floor(twoDigitNumber / 10) ;
    var unitNumber = Math.floor( twoDigitNumber % 10);
    var total = 0;
    total = tens + unitNumber;

// Đầu ra
    var result ="<div>";
    result += "<p>Tổng hai ký số của số " + twoDigitNumber + " là : " + total + " </p>"
    result += "</div>";
    document.getElementById("showTotal").innerHTML = result;
    document.getElementById("showTotal").classList.add("bg-success");
    document.getElementById("showTotal").classList.add("text-white");
    document.getElementById("showTotal").classList.add("text-center");
}