(function(){
    var buttons = document.querySelectorAll(".button-tab a");
    buttons.forEach((button) => {
        var parent = button.parentElement;

        button.addEventListener('click', (event) => {
            event.preventDefault();

            if(!parent.classList.contains("active")){
                var items = document.querySelectorAll(".button-tab li");
                var sections = document.querySelectorAll("section");
                var href = button.getAttribute('href');
                var activeSection = document.querySelector(href);

                items.forEach((item) => {
                    item.classList.remove("active");
                });
                sections.forEach((section) => {
                    section.classList.remove("active");
                });

                parent.classList.add("active");
                activeSection.classList.add("active");
            }
        });
    });
}());
