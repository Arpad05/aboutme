window.onload = function(){
    homePageLoad();
}


function homePageLoad(){
    if(navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")){
        document.getElementById('text').innerHTML="Currently studying in Computer Science at University of Montreal and studied pre-universitary Computer Science and Mathematics at Bois-de-Boulogne College. I'm mostly interested in cybersecurity and software development in diverse programming languages such as C, C++ and Java. Former teacher assistant in Object-Oriented Programming course at my university, I also worked as a project manager to implement a temporary data base as a student job.";
        document.getElementById('nav-bar').style.height="100px"
        document.getElementById('home-link').style.fontSize="40px";
        document.getElementById('comp-link').style.fontSize="40px";
        document.getElementById('occ-link').style.fontSize="40px";
        document.getElementById('project-link').style.fontSize="40px";
    
      } else {
                var typed = new Typed('#text', {
                strings : ["Currently studying in Computer Science at University of Montreal and studied pre-universitary Computer Science and Mathematics at Bois-de-Boulogne College. I'm mostly interested in cybersecurity and software development in diverse programming languages such as C, C++ and Java. Former teacher assistant in Object-Oriented Programming course at my university, I also worked as a project manager to implement a temporary data base as a student job."],
                typeSpeed:20,
                loop: false
      });
    }
}