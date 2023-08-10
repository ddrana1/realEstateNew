/*I, Divya Devendrasinh Rana (138704176) declare that my assessment is wholly my own work in accordance with Seneca Academic Policy.
No part of this assessment has been copied manually or electronically from any other source 
(including web sites)except for the information supplied by the WEB222 instructors and / or 
made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students.
*/

// script.js
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        
        
        alert('Registered Successfully');
        
        
        e.target.reset();
    });
});

/*var submit = document.getElementById("submit");
submit.addEventListener("click",calculateVolume, false);*/
