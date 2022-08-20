
<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
    <title>Putting User Input into JS Objects</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        .formBox{
            padding: 0.5rem 2rem;
        }

button {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    margin-left: 10px;
}


div{
	padding: 10px;
}
input[type=text],input[type=email]  {
  width: 100%;
  padding: 9px 15px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=radio]{
  
  display: inline-block;
  border: 1px solid #ccc;

}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

 td, th {
  border: 1px solid #ddd;
  padding: 8px;
}


 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
#btn{
	background-color: #008CBA;
}
#button{
	background-color: #f44336;
	margin-left: 20px;
}
#search{
	background-color: #4CAF50;
}

</style>
</head>
<body>
	<br>
	<center><h1 style="color: green"> <u>Task for Storing and Retrieving the array of objects </u></h1></center><br>
	<div class="row" style="border: solid 3px;margin: 10px;height: relative">
    <div class="column" style="background-color:#aaa;">
    <h1>Putting User Input into JS Objects</h1>
    <form>
        <div class="formBox">
            <label for="emp_id">Employee ID</label>
            <input type="text" id="emp_id" placeholder="Enter the Employee ID" required />
        </div>
        <div class="formBox">
            <label for="emp_name">Employee Name</label>
            <input type="text" id="emp_name" placeholder="Enter the Employee Name" required/>
        </div>
        <div class="formBox">
            <label for="email_id">Email ID</label>
            <input type="email" id="email_id" placeholder="example@mail.com"  required/>
        </div>
         <div class="formBox">
            <label for="emp_gender">Gender</label>
            <input type="radio"  style="margin-left: 20px" name="emp_gender" value="male">Male</input>
			<input type="radio"  style="margin-left: 20px" name="emp_gender" value="female">Female</input>
        </div>
        <div class="formBox">
            <label for="emp_age">Age</label>
            <input type="number" style="border-radius: 4px;border: 1px solid #ccc;" id="emp_age" placeholder="Enter the Employee age" required/>
        </div>
        <div class="formBox">
            <button id="btn">Click to Add</button>
            <button id="button">Show Database</button>
        </div>
        <div>
         <input type="text" id="myInput"  placeholder="Search for names.."><i class="fa fa-search"></i>
         <button id="search">Search</button>
        </div>
    </form>
    <div>
    	<h5 id="res"></h5>
        <div id="demo"></div>
    </div>
</div>
<div class="column" style="background-color:#bbb; border: 1px solid;width: 50%">
	<h4><span id="sh"></h4>
        <div id="table"></div>
</div>
</div>
<script>

 //Insert data into array
    let btnGet = document.querySelector('#button');
    let myTable = document.querySelector('#table');
        let emp_database = [];
        const addData = (ev)=>{
            ev.preventDefault();
            let emp_data = {
                Employee_ID: document.getElementById('emp_id').value,
                Employee_Name: document.getElementById('emp_name').value,
                Email_id: document.getElementById('email_id').value,
                Gender: $("input:radio[name=emp_gender]:checked").val(),
                Age: document.getElementById('emp_age').value,
            }
            emp_database.push(emp_data);
            document.forms[0].reset(); 
            console.warn('added' , {emp_database} );
            console.table(emp_database);
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addData);
        });

        
//showdatabase Module 
btnGet.addEventListener('click', () => {
	let headers = ['Employee_ID', 'Employee_Name', 'Email','Gender','Age'];
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    emp_database.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
    	document.getElementById("sh").innerHTML = "The list of Employee Data are given below";

});

//searching module
    let searchbtn = document.querySelector('#search');
    searchbtn.addEventListener('click', () => {
    let searchtxt = document.getElementById('myInput').value;
    console.log("Searched Name is "+searchtxt);
    let result=emp_database.find(function (ename){
    	return ename.Employee_Name ===searchtxt;
    })
    console.table(result);
    let txt = "";
	for (let x in result) {
	txt += result[x] + "   		";
	};
	document.getElementById("res").innerHTML = "The search result for the given name "+searchtxt+" is.....";
	document.getElementById("demo").innerHTML = txt;
	});


    </script>
</body>
</html>
