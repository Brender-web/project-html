const items = document.querySelectorAll(".gallery");
items.forEach(function(item){
    item.addEventListener('click', function(){
        removeActiveClasses();
        item.classList.add("active");
    });
});
function removeActiveClasses() {
    items.forEach(function(item){
        item.classList.remove("active");
    });
};