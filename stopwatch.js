window.onload   = () =>
{
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const content  = document.getElementById("time");

    stopButton.disabled = true;

    function displayTime(startTime, prevTime)
    {
        let endTime = Date.now();

        diff_ms = endTime - startTime + prevTime;
        diff_s = diff_ms/1000; //Converting ms to s



        let h = Math.floor(diff_s/3600);
        diff_s = diff_s%3600;
        let m = Math.floor(diff_s/60);
        diff_s = diff_s%60;
        let s = Math.floor(diff_s);

        s = s<10? '0'+s : s;
        h = h<10? '0'+h : h;
        m = m<10? '0'+m : m;

        content.innerHTML = `${h}:${m}:${s}`;
    }

    startButton.addEventListener("click", () =>
    {
        startTime = Date.now();
        startButton.disabled = true;
        stopButton.disabled = false;

        if(startButton.innerHTML === "Start")
        {
            createClock = setInterval(displayTime, 1000, startTime, diff_ms);
        }
        else
        {
            stopButton.innerHTML = "Pause";
            counter = 0;
            createClock = setInterval(displayTime, 1000, startTime, diff_ms);
        }

    });

    stopButton.addEventListener("click", () =>
    {  
        clearInterval(createClock);
        startButton.disabled = false;
        counter++;

        if(button2State === "stop" && counter>1) {
            stopButton.innerHTML = "Pause";
            button2State = "pause";
            stopButton.disabled = true;
            startButton.innerHTML = "Start";
            content.innerHTML = `00:00:00`;
            diff_ms = 0;
        }

        else {
            startButton.innerHTML = "Resume";
            stopButton.innerHTML = "Stop";
            button2State = "stop";
        }


    });

    resetButton.addEventListener("click", () =>
    {
        clearInterval(createClock);
        content.innerHTML = `00:00:00`;
        startButton.innerHTML = "Start";
        stopButton.innerHTML = "Pause";
        stopButton.disabled = true;
        startButton.disabled = false;
        diff_ms = 0;
    });
}


let button2State = "stop", startTime = 0, counter = 0, diff_ms = 0, diff_s = 0, createClock;
// let createClock;