
const button_add= document.querySelector("button");



function add_book(){
    const li = document.createElement("li");
    const button_delete=document.createElement("button")
    let ul=document.getElementsByClassName("list")[0]
    let div=document.getElementsByClassName("listcontainer")[0]
    div.setAttribute("style","display: flex ;flex-wrap: wrap ; justify-content: space-between ;")

    document.getElementsByClassName("list")[0].appendChild(li);
    var new_book=document.getElementById("favchap").value;
    li.setAttribute("style","order: 0 ;")
    li.textContent=new_book

    document.getElementsByClassName("listcontainer")[0].appendChild(button_delete);
    button_delete.setAttribute("style","order: 1 ;")
    button_delete.setAttribute("type","submit")
    button_delete.innerText="❌"

    function delete_book() {
        ul.removeChild(li);
        div.removeChild(button_delete)
    }

    button_delete.addEventListener("click",delete_book)

}
button_add.addEventListener("click",add_book);

