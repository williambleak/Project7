var imgArray = new Array(
    'duckLg.jpg',
    'HeronLg.jpg',
    'PalicanLg.jpg',
    'GeeseLg.jpg'
    );
var titleArray = new Array(
    'Duck',
    'Heron',
    'Palican',
    'Geese'
    );
var imgPath = "Images/fullsize/";
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    var newImg;
    var textTitle;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
    textTitle=titleArray[imgID];
    textDiv.innerHTML = textTitle;
    }
function preloadImages() {
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
    }