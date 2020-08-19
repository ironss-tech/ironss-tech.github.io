import './home.scss';
import "bootstrap";
  
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
});
          $(document).scroll(function () {
              var y = $(this).scrollTop();
              if (y > 1050) {
               
                  $('.navbar').addClass("intro");
              } else {
               
                  $(".navbar").removeClass("intro");
              }

          });
    
//   window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }
  // <script>
  // $( '.navbar-nav a' ).on( 'click', function () {
  //   $( '.navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
  //   $( this ).addClass( 'active' );
  // });
  // $(document).scroll(function () {
  //     var y = $(this).scrollTop();
  //     if (y > 1050) {
  //         {{!-- $('.navbar').fadeIn(); --}}
  //         $('.navbar').addClass("intro");
  //     } else {
  //         {{!-- $('.navbar').fadeOut();  --}}
  //         $(".navbar").removeClass("intro");
  //     }

  // });
  // </script>
 
  
    


    
   
  