var imgArray = new Array(
    'Project6/Images/Fullsize/duckLg.jpg',
    'Project6/Images/Fullsize/HeronLg.jpg',
    'Project6/Images/Fullsize/PalicanLg.jpg',
    'Project6/Images/GeeseLg.jpg'
    );
    var titleArray = new Array(
    'Duck',
    'Heron',
    'Palican',
    'Geese'
    );
    var imgPath = "Images/Fullsize/";
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