function $ (id) {return document.getElementById(id);}

function getSize(){
    var x = document.getElementById("myRange").value;
    return x;
}
function getMeat(){
    var meatArray = [];
    var inp = document.getElementsByName('meat');
    var inp_length = inp.length;

    for(var i=0; i<inp_length; i++) {
      if(inp[i].type == 'checkbox' && inp[i].checked == true) meatArray.push(inp[i].value);
    }
    return meatArray;
}   
function getVeg(){
    var vegArray = [];
    var input = document.getElementsByName('veg');
    var input_length = inp.length;

    for(var i=0; i<input_length; i++) {
        if(input[i].type == 'checkbox' && input[i].checked == true) vegArray.push(input[i].value);
    }
    return vegArray;
}
function getCheese(){
    var c = document.getElementsByName('Cheese');
    for(i = 0; i < c.length; i++) {
        if(c[i].checked)
        document.getElementById("result").innerHTML = c[i].value;
    }
}
const sliderElem = document.getElementById('Slider');
const imageElem = document.getElementById('pizza');
                                                                    
function ChangePizzaSize() {
  const width = imageElem.getAttribute('width');
  var v = document.getElementById('Slider').value;
  var size = '';
  var price = 0;
                                                                     
    for (i=0; i<sliderElem.length; i++) {
        if (v == 1){
        imageElem.width = "100";
        size = 'small';
        price = 6;
        return document.getElementById('label').value= 'small 6$';
        }
        if (v == 2){
        imageElem.width = "150"
        size = 'medium';
        price = 10;
        return document.getElementById('label').value= 'medium 10$';
        }
        if (v == 3){                                                            //change image, price and size regarding to slider.
        imageElem.width = "200"
        size = 'large';
        price = 14;
        return document.getElementById('label').value= 'large 14$';
        }
        if (v == 4){
        imageElem.width = "250"
        size = 'x-large';
        price = 16;
        return document.getElementById('label').value= 'x-large 16$';
        }
    }
}
function fillSummary(){
    var addressForm = document.getElementById("form2");
    var parElement = document.getElementById("dlvrTo");
                                                                                    //fill address inputs (form2) in p tag
    for (var i = 0; i < addressForm.elements.length; i++) {
        var adress = document.createTextNode(addressForm.elements[i].value);
        parElement.appendChild(adress);
    }
}