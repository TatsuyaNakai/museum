const swiper = new Swiper('.swiper-container', {
    loop: true,
    effect:'coverflow',
    centeredSlides:true,
    slidePerView:1,
    speed:1500,
    autoplay:{
        delay:4000,
        disableOnInteraction:false
    },
  
  });

  const trigger=document.querySelector('.header-mobile__right');
  const none=document.querySelector('.none');
  const list=document.querySelector('.menu-list'); 
  const footerTop=document.querySelector('.footer-top');
  const calendar=document.querySelector('.calendar');

  
  // const named=document.querySelector('.name');
  // const hover_img=document.querySelector('.hover_img');

  // hover_img.addEventListener('mouseenter', ()=>{
  //     named.classList.add('hover');
  //     hover_img.classList.add('hover');
  // });

  // hover_img.addEventListener('mouseout', function(){
  //     named.classList.remove('hover');
  //     hover_img.classList.remove('hover');
  // });

  // named.addEventListener('mouseenter', function(){
  //     named.classList.add('hover');
  //     hover_img.classList.add('hover');
  // });

  // named.addEventListener('mouseout', function(){
  //     named.classList.remove('hover');
  //     hover_img.classList.remove('hover');
  // });



  trigger.addEventListener('click', function(){
      trigger.classList.toggle('active');
  });

  trigger.addEventListener('click', function(){
      if(list.classList.contains('none')){
        list.classList.remove('none');
      }else{
          list.classList.add('none');
      };
  });

  trigger.addEventListener('click', function(){
      if(!calendar.classList.contains('none')){
        calendar.classList.add('none');
    }else{
        calendar.classList.remove('none');

    }
  })

  footerTop.addEventListener('click', function(){
      window.scroll(0, 0);
  });



  (function() {
    const target     = document.getElementById('header'),
          height     = 62;
    let offset       = 0,
        lastPosition = 0,
        ticking      = false;
        
    function onScroll() {
      if (lastPosition > height) {
        if (lastPosition > offset) {
          target.classList.add('head-animation');
        } else {
          target.classList.remove('head-animation');
        }
        offset = lastPosition;
      }
    }
    
    window.addEventListener('scroll', function(e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();



