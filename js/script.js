document.addEventListener('DOMContentLoaded', function() {
    let button              = document.getElementById("click_button");
    let dissappearing_image = document.getElementById("disappearing_danger_image");
    button.addEventListener("click", function() {
        if (dissappearing_image.style.display === 'none') {
            dissappearing_image.style.display = 'block'; 
        } else {
            dissappearing_image.style.display = 'none'; 
        }
      }); 
});

