let oLastModif = new Date(document.lastModified)

let day = oLastModif.getDate()
let month =oLastModif.getMonth()
let year= oLastModif.getFullYear()
let div="/"

document.querySelector('#date').textContent= month + div + day + div + year