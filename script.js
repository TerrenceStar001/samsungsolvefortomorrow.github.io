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
    let critwrn = false;

    if(wet>60&&light<60&&smell>25){
        message = "BATHROOM CRITICAL ERROR: Shutting down & sending maintenance crew";
        critwrn=true;
    }else if(wet>60&&light<60){
        message = "Multiple flaws detected: Sending maintence crews";
        isWarn=true;
    }else if(smell>25&&wet>60){
        message = "Multiple flaws detected: Sending maintence crews";
        isWarn=true;
    }else if(smell>25&&light<60){
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
        message = "Bathroom is clean and well maintained";
    }

    output.innerText = message;

    if(isWarn){
        box.classList.add("warning");
    }else{
        box.classList.remove("warning");
    }
    if(critwrn){box.classList.add("critwarn");}else{box.classList.remove("critwarn");}
}
function methank(){
    const meth = document.getElementById("meth").value;
    const temp = document.getElementById("temp").value;
    const full = document.getElementById("full").value;
    const bioutput = document.getElementById("gas");
    const box2 = document.getElementById("bstat");

    document.getElementById("methanePurityVal").innerText = meth + "%";
    document.getElementById("digesterTemperatureVal").innerText = temp + "c";
    document.getElementById("fullnessVal").innerText = full + "%";

    let m2 = "";
    let isW2rn = false;
    let critwrn = false;

    if(meth>80&&temp>40&&full>90){
        m2 = "Immediate danger detected: SHUTTING DOWN";
        critwrn=true;
    }else if(meth>80&&temp>40){
        m2 = "WARNING: Temperature and methane concentration too high -- shutting down";
        critwrn=true;
    }else if(full>90&&temp>40){
        m2 = "Error: Digester too full & temperature too high -- flushing";
        isW2rn=true;
    }else if(full>90&&meth>80){
        m2 = "Danger: Digester too full & methane concentration too high -- releasing as fertilizer";
        isW2rn=true;
    }else if(full >90){
        m2 = "Tank Full: Flushing Digesting";
        isW2rn = true;
    }else if(meth>80){
        m2 = "Methane concentration too high: Releasing methane at safe rate";
        isW2rn = true;
    }else if(temp>40){
        m2 = "Overheating: Turning off generator";
        isW2rn = true;
    }
    else{
        m2 = "Biogas tank running as normal";
    }

    bioutput.innerText = m2;

    if(isW2rn){
        box2.classList.add("warning");
    }else{
        box2.classList.remove("warning");
    }
    if(critwrn){box2.classList.add("critwarn");}else{box2.classList.remove("critwarn");}
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
