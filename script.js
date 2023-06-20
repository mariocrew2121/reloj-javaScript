function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = "";
    let suffix = "AM";

    if (hh >= 12) {
        suffix = "PM";
        hh = hh - 12;
    }

    if (hh == 0) {
        hh = 12;
    }

    time = hh + ":" + mm + ":" + ss + " " + suffix;
    let watch = document.querySelector("#digital");
    watch.innerHTML = time;
    let hhRotation =((hh&12)*180)/6;
    let mmRotation =(mm*180)/30;
    let ssRotation =(ss*180)/30;
    document.querySelector('#hours').style.transform="rotate("+hhRotation+"deg)"
    document.querySelector('#minutes').style.transform="rotate("+mmRotation+"deg)"
    document.querySelector('#seconds').style.transform="rotate("+ssRotation+"deg)"

}

setInterval(currentTime, 1000);


