document.querySelector(".main").addEventListener("click",oncl);
function oncl(e)
{
    var c = e.target.className;
    if(c == "unclicked"){
        e.target.classList = "clicked";
    }
    if(c == "clicked"){
        e.target.classList = "unclicked";
    } 
 
}