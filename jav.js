const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextbtn = document.getElementById('next');
const prevbtn = document.getElementById('prev');
const intervel = 1000;
let slideId;

let slides=document.querySelectorAll('.slide');
let index=1;

const firstclone = slides[0].cloneNode(true);
const lastclone = slides[slides.length-1].cloneNode(true);

firstclone.id='first-clone';
lastclone.id='last-clone';

slide.append(firstclone);
slide.prepend(lastclone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
   slideId = setInterval(() => {
        moveToNextSlide();
    }, intervel);
};

 const getslide = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend',()=>{
      slides=getslide();
    if(slides[index].id==firstclone.id){
        slide.style.transition = 'none';
        index=1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(slides[index].id==lastclone.id){
        slide.style.transition = 'none';
        index=slides.length-2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = ()=> {
    slides=getslide();
      if(index >= slides.length -1) return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
};

const moveToPrevious = () => {
    if(index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '.7s';

};

slideContainer.addEventListener('mouseenter', () =>{
   clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave',startSlide);

nextbtn.addEventListener('click',moveToNextSlide);
prevbtn.addEventListener('click',moveToPrevious);

startSlide();


