window.onload = function(){
    homePageLoad();
}
function homePageLoad(){
    if(navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")){
        document.getElementById('text-intro').innerHTML="Currently studying in Computer Science at University of Montreal and studied pre-universitary Computer Science and Mathematics at Bois-de-Boulogne College. I'm mostly interested in cybersecurity and software development in diverse programming languages such as C, C++ and Java. Former teacher assistant in Object-Oriented Programming course at my university, I also worked as a project manager to implement a temporary data base as a student job.";
        document.getElementById('nav-bar').style.height="5.1em"
        document.getElementById('home-link').style.fontSize="2.5vh";
        document.getElementById('comp-link').style.fontSize="2.5vh";
        document.getElementById('occ-link').style.fontSize="2.5vh";
        document.getElementById('project-link').style.fontSize="2.5vh";
        document.getElementById("navigation").style.padding="5%";
      } else {
        console.log("problem")
        document.getElementById("navigation").style.padding="15px";
          var typed = new Typed('#text-intro', {
            strings : ["Currently studying in Computer Science at University of Montreal and studied pre-universitary Computer Science and Mathematics at Bois-de-Boulogne College, I'm mostly interested in cybersecurity and software development in diverse programming languages such as C, C++ and Java. Former teacher assistant in Object-Oriented Programming course at my university, I also worked as a project manager to implement a temporary data base as a student job."],
            typeSpeed:12,
            loop: false
      });
    }
}