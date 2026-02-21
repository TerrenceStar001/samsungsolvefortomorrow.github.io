function SysMaint(){
    const light = document.getElementById("light").value;
    const wet = document.getElementById("wet").value;
    const smell = document.getElementById("smell").value;
    const output = document.getElementById("output");
    const box = document.getElementById("status");

    document.getElementById("lightVal").innerText = light + "%";
    document.getElementById("wetVal").innerText = wet + "%";
    document.getElementById("smellVal").innerText = smell + "%";

    let message = "";
    let isWarn = false;

    if(wet>60&&light<60){
        message = "Multiple flaws detected: Sending maintence crews";
        isWarn=true;
    }else if (wet > 60){
        message = "Too much water: Activating Drainage";
        isWarn=true;
    }else if (light < 60){
        message = "Too Dark: Calling maintenance crews";
        isWarn=true;
    }else if (smell > 25){
        message = "Too Smellly: Dispensing Aroma";
        isWarn=true;
    }

    else{
        message = "Bathroom isclean and well maintained";
    }

    output.innerText = message;

    if(isWarn){
        box.classList.add("warning");
    }else{
        box.classList.remove("warning");
    }
}
function fixBtn(){
    var light = document.getElementById("light").value;
    var wet = document.getElementById("wet").value;
    var smell = document.getElementById("smell").value;
    const output = document.getElementById("output");
    const box = document.getElementById("status");

    light = 96;
    wet = 23;
    smell = 2;
    let message = "Bathroom isclean and well maintained";

    document.getElementById("lightVal").innerText = light + "%";
    document.getElementById("wetVal").innerText = wet + "%";
    document.getElementById("smellVal").innerText = smell + "%";

    output.innerText = message;
    box.classList.remove("warning");
}
