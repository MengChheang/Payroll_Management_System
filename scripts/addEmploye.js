// function addColumn(table_input) 
// {
//     var table = document.getElementById('show');
//     var row = table.getElementsById('show');
//     for(i=0;i<row.length;i++)
//     {
//         row[i].innerHTML = row[i].innerHTML + '<td>Id</td>' + '<td>Name</td>';
//     }
// }
function addRow(){
    alert("Yes");
    var _id = document.getElementById('Id').value;
    var _name = document.getElementById('Name').value;
    var _address = document.getElementById('Address').value;
    var _gender = document.getElementById('Gender').value;
    var _dob = document.getElementById('DoB').value;
    var _pob = document.getElementById('PoB').value;
    var _deg = document.getElementById('Deg').value;
    var _dep = document.getElementById('Dep').value;
    var _city = document.getElementById('City');
    var _pinc = document.getElementById('PinC').value;
    var _c = document.getElementById('Class').value;
    var _con = document.getElementById('Con').value;
    var _basic = document.getElementById('Basic').value;
    var _salary = document.getElementById('Salary').value;
    var _bank = document.getElementById('Bank').value;
    var _email = document.getElementById('Email').value;
    var _pass = document.getElementById('PassW').value;
    var _conPass = document.getElementById('ConPass').value;
    
    var table = document.getElementById('show')[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    var cel7 = newRow.insertCell(6);
    var cel8 = newRow.insertCell(7);
    var cel9 = newRow.insertCell(8);
    var cel10 = newRow.insertCell(9);
    var cel11 = newRow.insertCell(10);
    var cel12 = newRow.insertCell(11);
    var cel13 = newRow.insertCell(12);
    var cel14 = newRow.insertCell(13);
    var cel15 = newRow.insertCell(14);
    var cel16 = newRow.insertCell(15);
    var cel17 = newRow.insertCell(16);
    var cel18 = newRow.insertCell(17);

    cel1.innerHTML = _id + '';
    cel2.innerHTML = _name + '';
    cel3.innerHTML = _address + '';
    cel4.innerHTML = _gender + '';
    cel5.innerHTML = _dob + '';
    cel6.innerHTML = _pob + '';
    cel7.innerHTML = _deg + '';
    cel8.innerHTML = _dep + '';
    cel9.innerHTML = _city + '';
    cel10.innerHTML = _pinc + '';
    cel11.innerHTML = _c + '';
    cel12.innerHTML = _con + '';
    cel13.innerHTML = _basic + '$';
    cel14.innerHTML = _salary + '$';
    cel15.innerHTML = _bank + '$';
    cel16.innerHTML = _email + '';
    cel17.innerHTML = _pass + '';
    cel18.innerHTML = _conPass + '';


}
function reset(){
        document.getElementById('Id').innerHTML ='';
        document.getElementById('Name').innerHTML = '';
        document.getElementById('Address').innerHTML = '';
        document.getElementById('Gender').innerHTML = '';
        document.getElementById('DoB').innerHTML = '';
        document.getElementById('PoB').innerHTML  = '';
        document.getElementById('Deg').innerHTML ='';
        document.getElementById('Dep').innerHTML = '';
        document.getElementById('City').innerHTML = '';
        document.getElementById('Pinc').innerHTML = '';
        document.getElementById('Class').innerHTML = '';
        document.getElementById('Con').innerHTML  = '';
        document.getElementById('Basci').innerHTML ='';
        document.getElementById('Salary').innerHTML = '';
        document.getElementById('Bank').innerHTML = '';
        document.getElementById('Email').innerHTML = '';
        document.getElementById('PassW').innerHTML = '';
        document.getElementById('ConPass').innerHTML  = '';
}