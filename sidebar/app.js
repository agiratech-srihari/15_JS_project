

const sidebtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar")
const clsbtn = document.querySelector(".close-btn")



sidebtn.addEventListener('click',function (){

    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else{
        sidebar.classList.add('show-sidebar')
    }

})

clsbtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})