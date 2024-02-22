var emps=[];
var myIndex;

   function addemp(){
	   if(!document.getElementById("emp-name").value){
		alert("Name is required");
		return;
	}else if(!document.getElementById("emp-email").value){
		alert("Email is required");
		return;
	}else if(!document.getElementById("emp-department").value){
		alert("Department is required");
		return;
	}else if(!document.getElementById("emp-mobileno").value){
		alert("Mobile No is required");
		return;
	}else if(!document.getElementById("emp-designation").value){
		alert("designation is required");
		return;
	}else{
		alert("Saved");
	}
    var newemp={
      name:document.getElementById("emp-name").value,
      email:document.getElementById("emp-email").value,
	  department:document.getElementById("emp-department").value,
	  mobileno:document.getElementById("emp-mobileno").value,
	  designation:document.getElementById("emp-designation").value
    }
    emps.push(newemp)
    displayemps();
  }

  function displayemps(){
    document.getElementById("form-list-emp-body").innerHTML=""
    for (i=0;i<emps.length;i++){
      var myTr=document.createElement("tr")
      for(a in emps[i]){
        var mytd=document.createElement("td")
        mytd.innerHTML=emps[i][a]
        myTr.appendChild(mytd)
      }
      var actionTd=document.createElement("td")
      var editBtn=document.createElement("button")
      editBtn.innerHTML="Edit"
      editBtn.setAttribute("class" , "btn btn-sm btn-primary")
      editBtn.setAttribute("onclick" , "editemp("+i+")")
      var deletebtn=document.createElement("button")
      deletebtn.innerHTML="Delete"
      deletebtn.setAttribute("class" , "btn btn-sm btn-danger")
      deletebtn.setAttribute("onclick" , "deleteemp("+i+")")
      actionTd.appendChild(editBtn)
      actionTd.appendChild(deletebtn)
      myTr.appendChild(actionTd)
      document.getElementById("form-list-emp-body").appendChild(myTr)
      }
      document.getElementById("emp-name").value="";
      document.getElementById("emp-email").value="";
	  document.getElementById("emp-department").value="";
	  document.getElementById("emp-mobileno").value="";
	  document.getElementById("emp-designation").value="";
  }

  function editemp(i){
    console.log(emps[i])
    myIndex=i;
    var updatebtn=document.createElement("button")
    updatebtn.innerHTML="Update";
    updatebtn.setAttribute("class", "btn btn-sm btn-success")
    updatebtn.setAttribute("onclick","updemp()")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(updatebtn);
    document.getElementById("emp-name").value=emps[i].name;
    document.getElementById("emp-email").value=emps[i].email;
	document.getElementById("emp-department").value=emps[i].department;
	document.getElementById("emp-mobileno").value=emps[i].mobileno;
	document.getElementById("emp-designation").valueemps[i].designation;
  }

  function updemp(){
    var updatedemp={
      name:document.getElementById("emp-name").value,
      email:document.getElementById("emp-email").value,
	  department:document.getElementById("emp-department").value,
	  mobileno:document.getElementById("emp-mobileno").value,
	  designation:document.getElementById("emp-designation").value
    }
    emps[myIndex]=updatedemp;
    var crbtn=document.createElement("button")
    crbtn.innerHTML="Save";
    crbtn.setAttribute("onclick","addemp()")
    crbtn.setAttribute("class","btn btn-sm btn-success")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(crbtn);
    displayemps()
  }
  
  function deleteemp(i){
    emps.splice(i,1)
    displayemps()
  }