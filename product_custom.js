$(document).ready(function () {


    for (i = 1; i < 5; i++) {
        document.getElementById(i).src = '../images/bags/bag' + i + '.jpg'

    }
    document.getElementById('showImage').src = '../images/bags/bag' + 1 + '.jpg'
});

function displayImage(event) {
    event = event || window.event;
    var targetElement = event.target || event.srcElement
    if (targetElement.tagName == 'IMG') {
        document.getElementById('showImage').src = targetElement.getAttribute('src')
    } else {
        return;
    }
}

// on click display image and description

function displayImageFromArray(value) {
    debugger
    // var imageToBeDisplayed = value.split('_');

    var curImage = document.getElementById('showImage');
    var sideThumbnail = []

    const array = [
        {
            imageArray: [{ src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag6.jpg' },
            { src: '../images/bags/bag7.jpg' },
            { src: '../images/bags/bag8.jpg' }
            ],
            discription: 'discription'
        }, {
            imageArray: [{ src: '../images/bags/bag1.jpg' },
            { src: '../images/bags/bag2.jpg' },
            { src: '../images/bags/bag3.jpg' },
            { src: '../images/bags/bag4.jpg' },
            { src: '../images/bags/bag8.jpg' }
            ],
            discription: 'discription1'
        }, {
            imageArray: [{ src: '../images/bags/bag4.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            ],
            discription: 'discription2'
        }, {
            imageArray: [{ src: '../images/bags/bag2.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' }
            ],
            discription: 'discription3'
        },
        {
            imageArray: [{ src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag5.jpg' }
            ],
            discription: 'discription4'
        }]
    if (array.length < value) {
        alert('no record found')
    } else {
        for (i = 0; i < array.length; i++) {
            if (value == i) {
                document.getElementById('discription').innerHTML = array[i].discription;

                array[i].imageArray.forEach(function (element, elementIndex) {
                    sideThumbnail.push(element)
                    console.log(sideThumbnail)
                    var j = 1;
                    sideThumbnail.forEach(function (sideElement, sideElementIndex) {
                        // document.getElementById('image' + i).src = sideElement.src;

                        console.log(element)
                        console.log(elementIndex)
                        // document.getElementById('image' + j).setAttribute("src", sideElement.src);
                        // j++;

                        if (sideElementIndex == 0) {
                            /*document.getElementById('image1').src = sideElement.src*/
                            document.getElementById('showImage').src = sideElement.src
                        } /*else if (sideElementIndex == 1) {
                            document.getElementById('image2').src = sideElement.src
                        } else if (sideElementIndex == 2) {
                            document.getElementById('image3').src = sideElement.src
                        } else if (sideElementIndex == 3) {
                            document.getElementById('image1').src = sideElement.src
                        } else if (sideElementIndex == 4) {
                            document.getElementById('image5').src = sideElement.src
                        } else {
                            alert('no record found')
                        }*/


                        for (i = 1; i < sideThumbnail.length; i++) {
                            if (sideThumbnail.length > i) {
                                document.getElementById('image' + i).style.display = "none";


                            } else {

                                document.getElementById('image' + i).style.display = "block";

                            }
                        }


                        // if (sideThumbnail.length < sideElementIndex) {
                        //     for (i = 1; i < sideThumbnail.length; i++) {
                        //         document.getElementById('image' + i).style.display = "none";
                        //     }

                        // } else {
                        //     for (i = 1; i < sideThumbnail.length; i++) {
                        //         document.getElementById('image' + i).style.display = "block";
                        //     }
                        // }
                    })


                });
            }
        }
    }



    curImage.src = array[0].imageArray[0].src
    // for (i = 1; i < 5; i++) {
    //     document.getElementById('image' + i).src = array[0].imageArray[i - 1].src;
    //     document.getElementById('discription').innerHTML = array[0].discription;
    // }
    /*document.getElementById('image2').src = array[imageToBeDisplayed[1]-1].imageArray[1].src
    document.getElementById('image3').src = array[imageToBeDisplayed[1]-1].imageArray[2].src
    document.getElementById('image4').src = array[imageToBeDisplayed[1]-1].imageArray[3].src
    document.getElementById('discription').innerHTML = array[0].discription
*/
    array.forEach(function (element, elementIndex) {
        console.log(element)
    });




}


// on click display image and description end


// carousal image with next previous image




function changeImage(value) {
    var sliderContent = document.getElementById('box')
    var imageArray = []
    var newImageArray = []
    imageArray.push({
        imagePath: '../images/bags/bag1.jpg',
    }, {
            imagePath: '../images/bags/bag2.jpg',
        }, {
            imagePath: '../images/bags/bag3.jpg',
        }, {
            imagePath: '../images/bags/bag4.jpg',
        }, {
            imagePath: '../images/bags/bag5.jpg',
        })






    imageArray.forEach(function (element, elementIndex) {
        newImageArray.push(element.imagePath)
    });
    var i = imageArray.length
    if (value == '-') {
        if (i < imageArray.length) {
            i = i + 1
        } else {
            i = 1
        }
    } else {
        if (i < imageArray.length + 1 && i > 1) {
            i = i - 1
        } else {
            i = imageArray.length
        }
    }
    sliderContent.innerHTML = '<img src= ' + imageArray[i - 1].imagePath + '>'
}

// owl carousal