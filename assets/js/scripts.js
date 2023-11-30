function openNav() 
{
    document.getElementById("bodySidebar").style.width = "20vw";
    document.getElementById("bodyContent").style.marginLeft = "20vw";
}

function closeNav() 
{
    document.getElementById("bodySidebar").style.width = "0";
    document.getElementById("bodyContent").style.marginLeft= "0";
}

function openBlog(evt, listName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(listName).style.display = "block";
    evt.currentTarget.className += " active";
 
}
document.getElementById("defaultOpen").click();

function openProject(evt, listName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("project_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("project_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(listName).style.display = "flex";
  evt.currentTarget.className += " active";

}



window.addEventListener('scroll', this.handleScroll, true);

handleScroll = (e) => {
  if (e.target.classList.contains("on-scrollbar") === false) {
      e.target.classList.add("on-scrollbar");
  }
}