document.addEventListener("DOMContentLoaded", function () {
  const videoPlayer = document.getElementById("videoPlayer");
  const progressBar = document.getElementById("progress");
  const markerContainer = document.getElementById("markerContainer");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const totalChapters = 7;
  const chapterNames = ["مقدمة", "الاستشعار", "الاتصال", "المنزل الذكي", "المدن","الصحة","التعليم"];
  let chapterTimes = [0,102,120,205,229,249,260];

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

  btn1.addEventListener("click", function () {
    videoPlayer.pause();
  });
  btn2.addEventListener("click", function () {
    videoPlayer.pause();
  });

  // Update the progress bar as the video plays
  videoPlayer.addEventListener("timeupdate", function () {
    const progressPercentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Show buttons when video reaches item 2
    if (videoPlayer.currentTime >= chapterTimes[1] && videoPlayer.currentTime < chapterTimes[2]) {
      btn1.style.opacity = 1; // Show button 1
      btn2.style.opacity = 1; // Show button 2
      btn2.style.zIndex = -1;
      btn1.style.zIndex = -1;
    } else {
      btn1.style.opacity = 0; // Hide button 1
      btn2.style.opacity = 0; // Hide button 2
      btn2.style.zIndex = -1;
      btn1.style.zIndex = -1;

    }
  });
});


/*

var minVideo = document.getElementById("minVideo"); 
//var divInfo = document.getElementById("divInfo"); 
//var btnFortsett = document.getElementById("btnFortsett");
minVideo.currentTime = 200;
//minVideo.play();

minVideo.ontimeupdate = function() 
{ 
console.log(minVideo.currentTime);
if (minVideo.currentTime > 51 && minVideo.currentTime < 51.3)  
    { 
        minVideo.pause();
        minVideo.currentTime = 51.3;
        const marker = document.createElement('div');
        marker.classList.add('bubles');
        marker.style.left = left;
       // seekBar.appendChild(marker);
       // divInfo.style.display="block";
    }
}
/*
btnFortsett.onclick= function() 
{
    divInfo.style.display = "none"; 
    minVideo.play();
}
*/



/*

const video = document.getElementById('minVideo');
const seekBar = document.getElementById('seekbar');

// Positions of markers in seconds.
const positions = [3, 6.5, 7];

// Set the markers when we CAN know the duration of the video.
video.addEventListener('loadedmetadata', () => {

  // Add each marker to the #seekbar element.
  positions.forEach(function(position) {

    // Is position within range of the duration?
    if (position <= video.duration) {

      // Calculate position in percentage..
      const left = (position / video.duration) * 100 + '%';

      // ..create marker and give it the left value..
      const marker = document.createElement('div');
      marker.classList.add('bubles');
      marker.style.left = left;

      // ..and add the marker to the #seekbar.
      seekBar.appendChild(marker);
    }
  });
});
*/
