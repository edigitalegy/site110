document.addEventListener("DOMContentLoaded", function () {
const videoPlayer = document.getElementById("videoPlayer");
const progressBar = document.getElementById("progress");
const markerContainer = document.getElementById("markerContainer");
//-----------------------------btn overlay video --------------------------------------//
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");

//-----------------------------btn modal--------------------------------------//
const v1 = document.getElementById("v1");
const btnv1 = document.getElementById("btnv1");
const v2 = document.getElementById("v2");
const btnv2 = document.getElementById("btnv2");
const v3 = document.getElementById("v3");
const btnv3 = document.getElementById("btnv3");
const v4 = document.getElementById("v4");
const btnv4 = document.getElementById("btnv4");
const v5 = document.getElementById("v5");
const btnv5 = document.getElementById("btnv5");
const v6 = document.getElementById("v6");
const btnv6 = document.getElementById("btnv6");
//-----------------------------adress markers--------------------------------------//
const totalChapters = 5;
const chapterNames = ["مقدمة", "الاستشعار", "المنزل", "المدن","الصحة"];
let chapterTimes = [0,102,150,155,170,182];

let num =0;
let labelPercentage = 0;
  // Add chapter markers and labels to the progress bar
  videoPlayer.addEventListener("loadedmetadata", function () {
    const videoDuration = videoPlayer.duration;
    //chapterTimes = [];

    for (let i = 0; i < totalChapters; i++) {
     // const chapterTime = (videoDuration / totalChapters) * (i + 1);
      const chapterTime = chapterTimes[i];

     // chapterTimes.push(chapterTime);

      const chapterPercentage = (chapterTime / videoDuration) * 100;

      // Create the chapter marker
      const marker = document.createElement("div");
      marker.classList.add("chapter-marker");
      marker.style.left = `${chapterPercentage}%`;

      // Create the chapter label
      const label = document.createElement("div");
      label.classList.add("chapter-label");
      label.style.left = `${chapterPercentage}%`;
      label.innerText = chapterNames[i];

      if(i < totalChapters)
      {
        num = i+1;
        labelPercentage = (chapterTimes[num] / videoDuration) * 100 - (chapterTimes[i] / videoDuration) * 100 ;
        label.style.width =  `${labelPercentage}%`;

      }
      if(num == totalChapters)
      {
        labelPercentage = (videoDuration / videoDuration) * 100 - (chapterTimes[i] / videoDuration) * 100 ;
        label.style.width =  `${labelPercentage}%`;      
      }

      // Set up click event for the marker
      marker.addEventListener("click", function () {
        //videoPlayer.currentTime = chapterTime - (videoDuration / totalChapters);
        videoPlayer.currentTime = chapterTimes[i];
      });

      label.addEventListener("click", function () {
        //videoPlayer.currentTime = chapterTime - (videoDuration / totalChapters);
        videoPlayer.currentTime = chapterTimes[i];
      });

      // Append marker and label to the container
      markerContainer.appendChild(marker);
      markerContainer.appendChild(label);
    }
  });


  //----------------------------btn modal control------------------------------------------//
  btn1.addEventListener("click", function () {
    videoPlayer.pause();
  });
  btn2.addEventListener("click", function () {
    videoPlayer.pause();
  });
  btnv1.addEventListener("click", function () {
    v1.pause();
  });
  btnv2.addEventListener("click", function () {
    v2.pause();
  });
  btnv3.addEventListener("click", function () {
    v3.pause();
  });
  btnv4.addEventListener("click", function () {
    v4.pause();
  });
  btnv5.addEventListener("click", function () {
    v5.pause();
  });
  btnv6.addEventListener("click", function () {
    v6.pause();
  });
  //----------------------------btn modal control------------------------------------------//


  // Update the progress bar as the video plays
  videoPlayer.addEventListener("timeupdate", function () {
    const progressPercentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Show buttons when video reaches item 2
    if (videoPlayer.currentTime >= chapterTimes[1] && videoPlayer.currentTime < chapterTimes[1]+.2) 
    {
      btn1.style.opacity = 1; // Show button 1
      btn2.style.opacity = 1; // Show button 2
      btn2.style.zIndex = 1;
      btn1.style.zIndex = 1;
      videoPlayer.pause();
    } else {
      btn1.style.opacity = 0; // Hide button 1
      btn2.style.opacity = 0; // Hide button 2
      btn2.style.zIndex = -1;
      btn1.style.zIndex = -1;
    }

    if (videoPlayer.currentTime >= chapterTimes[2] && videoPlayer.currentTime < chapterTimes[2]+.2) 
    {
      btn3.style.opacity = 1; // Show button 1
      btn3.style.zIndex = 1;
      videoPlayer.pause();
    } else {
      btn3.style.opacity = 0; // Hide button 1
      btn3.style.zIndex = -1;
    }
    if (videoPlayer.currentTime >= chapterTimes[3] && videoPlayer.currentTime < chapterTimes[3]+.2) 
    {
      btn4.style.opacity = 1; // Show button 1
      btn4.style.zIndex = 1;
      videoPlayer.pause();
    } else {
      btn4.style.opacity = 0; // Hide button 1
      btn4.style.zIndex = -1;
    }

    if (videoPlayer.currentTime >= chapterTimes[4] && videoPlayer.currentTime < chapterTimes[4]+.2) 
    {
      btn5.style.opacity = 1; // Show button 1
      btn6.style.opacity = 1; // Show button 2
      btn5.style.zIndex = 1;
      btn6.style.zIndex = 1;
      videoPlayer.pause();
    } else {
      btn5.style.opacity = 0; // Hide button 1
      btn6.style.opacity = 0; // Hide button 2
      btn5.style.zIndex = -1;
      btn6.style.zIndex = -1;
    }

    if (videoPlayer.currentTime >= chapterTimes[5] && videoPlayer.currentTime < chapterTimes[5]+.2) 
      {
        btn7.style.opacity = 1; // Show button 1
        btn7.style.zIndex = 1;
        videoPlayer.pause();
      } else {
        btn7.style.opacity = 0; // Hide button 1
        btn7.style.zIndex = -1;
      }
  });
});