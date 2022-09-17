// // Select the HTML element to manipulate
// const date1 = document.querySelector("#date1");
// // Try to complete the method with options
// try {
// 	const options = {
// 		weekday: "long",
// 		day: "numeric",
// 		month: "long",
// 		year: "numeric"
// 	};
// 	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("spa-ARG", options)}</span>!`;
// } catch (e) {
// 	alert("Error with code or your browser does not support Locale");
// }

// Long hand method ... building day and month names from built-in date methods.

const d = new Date();
let dayName = d.getDay();
let monthName = d.getMonth();
let year = d.getFullYear();
let time=d.getTime();
let fulldate = `${monthName} / ${dayName} / ${year} ${time}`;
let tag=document.getElementById("date2");
tag.innerText=fulldate