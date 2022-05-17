
$(".btn").click(function(){
    $(".navbar_media").css({"right":"0","transition":"0.3s"})
})




i=0
$(".down1").click(function(){
    i=i+180

    $(".down1").css({"transform":"rotate("+i+"deg)","transition":"0.3s"})
    $(".drpdwn11").slideToggle(300)
    
})



d=0
$(".down2").click(function(){
    d=d+180
    

    $(".down2").css({"transform":"rotate("+d+"deg)","transition":"0.3s"})
    $(".drpdwn22").slideToggle(300)
    
})


$(".exit").click(function(){
    $(".navbar_media").css({"right":"-250px","transition":"0.3s"})
})



function Fixed(){
    if ($('html').scrollTop()>=$(".fixed_navbar").offset().top)
    {
      
      $('.fixed_navbar').css({"position":"fixed","z-index":"9999","top":"0","background-color":"#fff","width":"100%","left":"0"});
    }

    if ($('html').scrollTop()>$(".fixed_navbar").offset().top+10)
    {
      
      $('.fixed_navbar').css({"padding-top":"0px","padding-bottom":"10px"});
    }

    if ($('html').scrollTop()<40)
    {
      
      $('.fixed_navbar').css({"position":"static"});
    }

    
}

Fixed()

$(window).scroll(function(){
    Fixed();
})





const caruselslide = document.querySelector(".slider_corusel")
const xeber = document.getElementsByClassName("konyon")

const prewbtn = document.querySelector("#prvbtn")
const nextbtn = document.querySelector("#nxtbtn")

let counter = 1
const size = xeber[0].offsetWidth
console.log(size)

caruselslide.style.transform = "translateX("+ (-size*counter )+"px)"
 
nextbtn.addEventListener("click",()=>{
    if(counter>=xeber.length-1) return
    caruselslide.style.transition = "transform 1s ease-in-out"
    counter++;
    caruselslide.style.transform = "translateX("+ (-size*counter )+"px)"
})

prewbtn.addEventListener("click",()=>{
    if(counter<=0) return
    caruselslide.style.transition = "transform 1s ease-in-out"
    counter--;
    caruselslide.style.transform = "translateX("+ (-size*counter )+"px)"
})

caruselslide.addEventListener("transitionend",()=>{
if(xeber[counter].id === "lastclone"){
 caruselslide.style.transition = "none"  
 counter = xeber.length-2 
 caruselslide.style.transform = "translateX("+ (-size * counter )+"px)"
}

if(xeber[counter].id === "firstclone"){
    caruselslide.style.transition = "none"  
    counter = xeber.length-counter 
    caruselslide.style.transform = "translateX("+ (-size * counter )+"px)"
   }
})  



var a = 1;
var a1 = 1;
var a2 = 1;
var a3 = 1;

    function Tunar(){
		number1.innerHTML=a+"+";
		
	a++;
	if(a==31){
	clearInterval(b)
	}
    }
    var b =setInterval(Tunar,600)
    
    function Tunar1(){
		number2.innerHTML=a1+"+";	
	a1++;
	if(a1==301){
	clearInterval(c)
	}
    }
    var c =setInterval(Tunar1,60)

    function Tunar2(){
		number3.innerHTML=a2+"+";
	a2++;
	if(a2==2001){
	clearInterval(d)
	}
    }
    var d =setInterval(Tunar2,9)
    function Tunar3(){
	number4.innerHTML=a3+"+";
	a3++;
if(a3==1501){
	clearInterval(e)
	}
	}
var e =setInterval(Tunar3,12)



  let hometop = $('.gradient').offset().top
  let services = $('.section2').offset().top
  let abouttop = $('.section4').offset().top
  let team = $('.section5').offset().top
  let pricing = $('.section6').offset().top
  let faq = $('.section7').offset().top
  let press = $('.section8').offset().top
  let testimonial = $('.section9').offset().top
  let blog = $('.section10').offset().top
  let contacttop = $('.section11').offset().top
  
  $(".links").click(function(){

    $(".links").removeClass("text-orange")
    $(this).addClass("text-orange")
    
	
 }) 

  $(".home").click(function(){
	 $("html").animate({'scrollTop':hometop},500)
 }) 


 $(".services").click(function(){
	 $("html").animate({'scrollTop':services-80},500)
 }) 


 $(".abouts").click(function(){
	$("html").animate({'scrollTop':abouttop-40},500)
})


 $(".team").click(function(){
	$("html").animate({'scrollTop':team-40},500)
})


 $(".qiymet").click(function(){
	$("html").animate({'scrollTop':pricing-40},500)
})


 $(".faqs").click(function(){
	$("html").animate({'scrollTop':faq-100},500)
})
 $(".press").click(function(){
	$("html").animate({'scrollTop':press},500)
})
 $(".testimonial").click(function(){
	$("html").animate({'scrollTop':testimonial},500)
})
 $(".blog").click(function(){
	$("html").animate({'scrollTop':blog},500)
})

 $(".contact").click(function(){
	$("html").animate({'scrollTop':contacttop-70},500)
})

  function Active(){
	
    if($('html').scrollTop()>=0 || ('html').scrollTop()<abouttop){
        $(".nav-link").removeClass("text-red")
        $(".home1").addClass("text-red")
		
    }
    if($('html').scrollTop()>=abouttop){
        $(".home1").removeClass("text-red")
        $(".about1").addClass("text-red")
    }

    if($('html').scrollTop()>=team){
        $(".about1").removeClass("text-red")
        $(".team1").addClass("text-red")
    }

    if($('html').scrollTop()>=faq){
        $(".team1").removeClass("text-red")
        $(".rooms1").addClass("text-red")
    }

    if($('html').scrollTop()>=testimonial){
        $(".rooms1").removeClass("text-red")
        $(".menus1").addClass("text-red")
    }

    if($('html').scrollTop()>=blog){
        $(".menus1").removeClass("text-red")
        $(".events1").addClass("text-red")
    }

    if($('html').scrollTop()>=contacttop){
        $(".events1").removeClass("text-red")
        $(".contacts1").addClass("text-red")
    }
}


Active();

$(window).scroll(function(){
    Active();
})
 