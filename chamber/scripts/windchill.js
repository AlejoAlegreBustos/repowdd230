const button_submit=document.getElementById("button");

function calculate_wc(){ 
    let temperature= document.getElementById("Temp").value;
    let wind_speed=document.getElementById("wind_s").value;

    document.getElementById("temp2").textContent=temperature + " F°";
    document.getElementById("wind_s2").textContent=wind_speed + " mph";

    if (temperature <= 50 && wind_speed > 3){

        let w_chill=35.74 + 0.6215 * temperature - 35.75 * (wind_speed**0.16) + 0.4275 * temperature * (wind_speed**0.16);
        let textws="Wind Chill: ";
        let wind_chill_text=textws + Math.round(w_chill);
        document.getElementById("wind_chill").textContent=wind_chill_text;
    }
}

button_submit.onclick=calculate_wc;