(function(){
    var title = document.querySelector('h1');

    title.addEventListener('click', function(){
        if(title.classList.contains('active')){
            title.classList.remove('active');
        }else{
            title.classList.add('active');
        }
    });
}());