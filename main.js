/*
Đầu vào:
(Số ngày làm việc) input:number

Xử lý:
++Tạo biến input lấy giá trị của thẻ input (#input)
++Tạo biến output dẫn đến thẻ div(#outputEx1) để trả về kết quả
++output=input*100000

Đầu ra:
output (tiền lương)
*/
document.getElementById('btnTinhLuong').onclick=function(event){
    event.preventDefault();
    var input=+document.getElementById('input').value;
    var output=document.getElementById('outputEx1');
    output.style.fontSize="40px";
    output.style.fontWeight="600";
    output.innerHTML=(input*100000).toLocaleString('vi-VN')+" vnđ";
    
}
/*
Đầu vào:
5 số thực
number1:number
number2:number
number3:number
number4:number
number5:number

Xử lý:
++Tạo biến number1 -> number5 lấy giá trị của #inputNumber1 -> #inputnumber5
++Tạo biến output dẫn đến thẻ div(#outputEx2) để trả về kết quả
++output=(number1+number2+number3+number4+number5)/5

Đầu ra:
output (trung bình 5 số)
*/
document.getElementById('btnTinhTB').onclick=function(event){
    event.preventDefault();
    var number1=+document.getElementById('inputNumber1').value;
    var number2=+document.getElementById('inputNumber2').value;
    var number3=+document.getElementById('inputNumber3').value;
    var number4=+document.getElementById('inputNumber4').value;
    var number5=+document.getElementById('inputNumber5').value;
    var output=document.getElementById('outputEx2');
    output.style.fontSize="40px";
    output.style.fontWeight="600";
    output.innerHTML=(number1+number2+number3+number4+number5)/5;
    
}
/*
Đầu vào:
Số tiền usd
inputUSD:number

Xử lý:
++Tạo biến input lấy giá trị của thẻ input(#inputUSD)
++Tạo biến output dẫn đến thẻ div(#outputEx3) để trả về kết kết quả
++output=input*2300+" vnđ"

Đầu ra:
output (Tiền Việt)
*/
document.getElementById('btnQD').onclick=function(event){
    event.preventDefault();
    var input=+document.getElementById('inputUSD').value;
    var output=document.getElementById('outputEx3');
    output.style.fontSize="40px";
    output.style.fontWeight="600";
    output.innerHTML=(input*23500).toLocaleString('vi-VN')+" vnđ";
    
}
/*
Đầu vào:
chieuDai:number (chiều dài HCN)
chieuRong:number (chiều rộng HCN)

Xử lý:
**Tạo biến chieuDai lấy giá trị thẻ input (#inputCD)
**Tạo biến chieuRong lấy giá trị thẻ input (#inputCR)
**Tạo biến output dẫn đến thẻ div(#outputEx4) để trả kết quả
Tạo biến dienTich ta lấy chieuDai*chieuRong
Tạo biến chuvi ta lấy (chieuDai+chieuRong)*2

Đầu ra:
output=dienTich,chuvi
*/
document.getElementById('btnDtCv').onclick=function(event){
    event.preventDefault();
    var chieuDai=+document.getElementById('inputCD').value;
    var chieuRong=+document.getElementById('inputCR').value;
    var dienTich=chieuDai * chieuRong;
    var chuVi=(chieuDai+chieuRong) * 2;
    var output=document.getElementById('outputEx4');
    output.style.fontSize="40px";
    output.style.fontWeight="600";
    output.innerHTML="Diện tích = " + dienTich  + "; Chu vi = " + chuVi; 
    
}
/*
Đầu vào:
Số có 2 chữ số
inputHCS:number

Xử lý:
++Tạo biến input lấy giá trị thẻ input(#inputHCS)
++Tạo biến output dẫn đến thẻ div(#outputEx5) trả về kết quả
++Tạo biến hangchuc=math.floor(input/10)
++Tạo biến hangDV=math.floor(input%10)

Đầu ra:
output=hangChuc+hangDV
*/
document.getElementById('btnHCS').onclick=function(event){
    event.preventDefault();
    var input=+document.getElementById('inputHCS').value;
    var output=document.getElementById('outputEx5');
    var hangChuc=Math.floor(input/10);
    var hangDV=Math.floor(input%10);
    output.style.fontSize="40px";
    output.style.fontWeight="600";
    output.innerHTML=hangChuc+hangDV;
    
}