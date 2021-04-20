//get slider items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
/* console.log(sliderImages); */


//get number of slides
var slidesCount = sliderImages.length;
/* console.log(slidesCount); */


/* set current slide */
var currentSlide = 1;

//slide number element
var slideNumberElement = document.getElementById('slider-number');

//previous an next button
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// handle click on previous and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main ul element
var paginationElement = document.createElement('ul');
//set ID on created ul element
paginationElement.setAttribute('id', 'pagination-ul');

//creat list items based on slides count 
for(i=1;i<=slidesCount;i++){
    //create the li
    var paginationItem =document.createElement('li');
    //set custom attribute
    paginationItem.setAttribute('data-index',i);
    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    //append items to the main ul list
    paginationElement.appendChild(paginationItem);
}
//add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);
// get the new created ul
var paginationUl = document.getElementById('pagination-ul');
//get pagination items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets items
for(i = 0 ; i < paginationBullets.length ; i++){
    paginationBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}


//trigger the checker function
theChecker();

//Next slide function
function nextSlide(){
    if(currentSlide<slidesCount){
    currentSlide++;
    theChecker()
    }
}
//previous slide function
function prevSlide(){
    if(currentSlide>1){
    currentSlide--;
    theChecker()
    }
}

// checker function
function theChecker(){
    //set the slide number when div ID= slider-number
    slideNumberElement.textContent= 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    //remove all active classes
    removeAllActive();
    //set active class on current slide
    sliderImages[currentSlide-1].classList.add('active');

    //set active class on current pagination item
    paginationUl.children[currentSlide-1].classList.add('active');
    
    // check if current slide is the first
    if(currentSlide==1){
        //add disabled class on previous button
        prevButton.classList.add('disabled');
    }else{
        //remove disabled class from previous button
        prevButton.classList.remove('disabled');
    }
    if(currentSlide==slidesCount){
        //add disabled class on next button
        nextButton.classList.add('disabled');
    }else{
        //remove disabled class from next button
        nextButton.classList.remove('disabled');
    }
    
}
//remove all active classes from images and pagination bullets
function removeAllActive(){
    //loop through images
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });
    //loop through pagination bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}

