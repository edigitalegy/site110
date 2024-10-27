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
const totalChapters = 4;
const chapterNames = ["مقدمة", "المستشعر", "أنواع المستشعر", "المكونات"];
let chapterTimes = [0,23,40,79,84];
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
  let videocheck = [true,true,true,true,true,true];
  let btnarray = [btn1,btn2,btn3,btn4,btn5,btn6,btn7];
  
  videoPlayer.onplay = function() {
    for(let i=0; i<btnarray.length;i++)
    {
      if(btnarray[i].style.opacity == 1)
        {
          btnarray[i].style.opacity = 0; // Hide button 1
          btnarray[i].style.zIndex = -1;
          console.log(btnarray[i]);
        }
    }
    if (videoPlayer.currentTime < chapterTimes[1] && videocheck[1] == false) 
      {
        videocheck[1] =true;
      }
    if (videoPlayer.currentTime < chapterTimes[2] && videocheck[2] == false) 
      {
        videocheck[2] =true;
      }
    if (videoPlayer.currentTime < chapterTimes[3] && videocheck[3] == false) 
      {
        videocheck[3] =true;
      }
    if (videoPlayer.currentTime < chapterTimes[4] && videocheck[4] == false) 
      {
        videocheck[4] =true;
      }
    if (videoPlayer.currentTime < chapterTimes[5] && videocheck[5] == false) 
      {
        videocheck[5] =true;
      }
    };

  // Update the progress bar as the video plays
videoPlayer.addEventListener("timeupdate",  onTimeUpdate) 
    function onTimeUpdate() 
    {
      const progressPercentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
      progressBar.style.width = `${progressPercentage}%`;

    // Show buttons when video reaches item 2
    if (videoPlayer.currentTime >= chapterTimes[1] && videoPlayer.currentTime < chapterTimes[1]+1  && videocheck[1] == true) 
    {
      btn1.style.opacity = 1; // Show button 1
      btn2.style.opacity = 1; // Show button 2
      btn2.style.zIndex = 1;
      btn1.style.zIndex = 1;
      videoPlayer.pause();
      videocheck[1]=false;
    }
    if (videoPlayer.currentTime >= chapterTimes[2] && videoPlayer.currentTime < chapterTimes[2]+1  && videocheck[2] == true) 
    {
      btn3.style.opacity = 1; // Show button 1
      btn3.style.zIndex = 1;
      videoPlayer.pause();
      videocheck[2]=false;    
    } 
    if (videoPlayer.currentTime >= chapterTimes[3] && videoPlayer.currentTime < chapterTimes[3]+1  && videocheck[3] == true) 
    {
      btn4.style.opacity = 1; // Show button 1
      btn4.style.zIndex = 1;
      videoPlayer.pause();
      videocheck[3]=false;
    } 
    if (videoPlayer.currentTime >= chapterTimes[4] && videoPlayer.currentTime < chapterTimes[4]+1  && videocheck[4] == true) 
      {
        btn7.style.opacity = 1; // Show button 1
        btn7.style.zIndex = 1;
        videoPlayer.pause();
        videocheck[4]=false;     
      } 
    }
  });


