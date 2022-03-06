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
function changePizzaSize() {
    var width = $("#image").attr("width");
    var height = $("#image").attr("height");            //change image size regarding to slider
    $("#ranger").change( function() {
    $("#image").attr("width",width * (ranger.value / 1))
    $("#image").attr("height",height * (ranger.value / 1) )
    });
}

function updateLabel(val) {
    var v = document.getElementById('slider').value;
    for (i=0; i<ranger.length; i++) {
        if (v == 1)
        return document.getElementById('label').value= 'small 6$';
        if (v == 2)
        return document.getElementById('label').value= 'medium 10$';
        if (v == 3)
        return document.getElementById('label').value= 'large 14$';
        if (v == 4)
        return document.getElementById('label').value= 'x-large 16$';
    }
    document.getElementById('label').value=val; 
}