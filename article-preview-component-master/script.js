var buttonPre = document.getElementById('btn-share-pre');
var buttonPost = document.getElementById('btn-share-post');

var imgPre = document.getElementById('img-pre');
var imgPost = document.getElementById('img-post');

var social = document.getElementById('social');
var user = document.getElementById('user-section');

var isDesktop = window.matchMedia("(max-width: 770px)")


var twitter = document.getElementById('twitter');
var facebook = document.getElementById('facebook');
var pinterest = document.getElementById('pinterest');

// onClick
buttonPre.addEventListener('click', function() {
        if(isDesktop.matches)
        {
            social.style.display = 'block';
            user.style.display = 'none';
        } else {
            social.style.display = 'block';
            buttonPost.style.display = 'none';
        }      
});

buttonPost.addEventListener('click', function() {
    if(isDesktop.matches)
    {
        social.style.display = 'none';
        user.style.display = 'flex';
    } 
});




// onHover
buttonPre.addEventListener('mouseover', function() {
    imgPre.src = "./images/icon-share-hover.svg"; 
});

buttonPre.addEventListener('mouseout', function() {
    imgPre.src = "./images/icon-share.svg";  
});


buttonPost.addEventListener('mouseover', function() {
    imgPost.src = "./images/icon-share.svg";   
});

buttonPost.addEventListener('mouseout', function() {
    imgPost.src = "./images/icon-share-hover.svg";  
});


twitter.addEventListener('mouseover', function() {
    twitter.src = "./images/icon-twitter-hover.svg";   
});

twitter.addEventListener('mouseout', function() {
    twitter.src = "./images/icon-twitter.svg";   
});

facebook.addEventListener('mouseover', function() {
    facebook.src = "./images/icon-facebook-hover.svg"; 
});

facebook.addEventListener('mouseout', function() {
    facebook.src = "./images/icon-facebook.svg";
});

pinterest.addEventListener('mouseover', function() {
    pinterest.src = "./images/icon-pinterest-hover.svg";
});

pinterest.addEventListener('mouseout', function() {
    pinterest.src = "./images/icon-pinterest.svg";

});