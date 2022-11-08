
const btn_subs=document.getElementById("bttn_send_subs")

function message(){
    let original_main=document.getElementById("main_o")
    let form=document.getElementById("formu")
    form.remove

    let thanks_paragraph=document.createElement("p")
    thanks_paragraph.textContent="Thanks for Subscribe to our courses. You'll receive an email with more information."
    original_main.appendChild(thanks_paragraph)
}

btn_subs.onclick=message