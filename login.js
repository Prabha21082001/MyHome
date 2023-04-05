var email="Sharon"
var pass="12345"
function autho()
{
    var usergivenId=document.getElementById("in").value 
    var usergivenpass=document.getElementById("pas").value 
    if(email==usergivenId && pass==usergivenpass)
    {
        document.getElementById("fom").setAttribute("action","./info.html")
        document.getElementById("sub").setAttribute("type","submit")
    }
}