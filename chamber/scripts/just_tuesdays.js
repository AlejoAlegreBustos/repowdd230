
function add_div_day(){

    let main= document.getElementById("main_s")
    let div=document.createElement("div");

    main.appendChild(div);
    div.setAttribute("style","display: flex;flex-direction: column;background-color:transparent;box-shadow: 1px 1px 1px 1px rgb(6, 6, 6);text-align: center;;margin: auto;margin-top: 3%;margin-bottom: 3%;");
    div.setAttribute("id","div_added");
    
    let title_add=document.createElement("h3");
    document.getElementById("div_added").appendChild(title_add);
    title_add.textContent="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    title_add.setAttribute("style","color: #ffe923;text-shadow: 1px 1px 1px  black;font-size: 200%;");
    




}


const today = new Date().toLocaleString('en-us',{weekday:"long"});
if (today === "Tuesday"){
    add_div_day()
}


