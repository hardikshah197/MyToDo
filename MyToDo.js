var listTask = [];
function listsection(){
    var inp = document.getElementById("inpdata").value;
    //alert(inp);
    listTask.push(inp);
}
function lists() {
    alert("hello");
    if(listTask.length === 0)
    {
        document.getElementById("list").innerHTML="None";
    }
    else
    {
        for(var i=0;i<listTask.length;i++)
        document.getElementById("list").innerHTML=listTask[i];
        //alert(listTask[0]);
    }
}
function resets() {
    listTask = [];
}