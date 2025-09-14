//  $(document).ready(function(){
//     // everything inside it 
//  })

// ----------------------------------------
 //  selector
$("p") // by elemet
$(".ele") // by class
$("#demo") // by id
// -----------------------------------------
// event on button

// Hide
// $(document).ready(function(){
//     $("button").click(function(){
//         $('section').hide(10000)
//     })
// })
// $(document).ready(function(){
//     $(".start").click(function(){
//         $('section').hide(1000,function(){
//             console.log("Hiding is done")
//         })
//     })
// })

// Show
// $(document).ready(function(){
//     $("button").click(function(){
//         $('section').show();
//     })
// })

// Toggle
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").toggle();
//     })
// })

// // fadeout
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").fadeOut();
//     })
// })

// // fade in
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").fadeIn();
//     })
// })

// Fade Toggle
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").fadeToggle();
//     })
// })

// Slide down
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").slideDown();
//     })
// })

// Slide up
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").slideUp();
//     })
// })

// SlideToggle
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").slideToggle();
//     })
// })
//Animate
// $(document).ready(function(){
//     $("button").click(function(){
//         $("section").animate({
//             left: "100px"
//         })
//     })
// }) 

//Stop
// $(document).ready(function(){
//     $(".start").click(function(){
//         $("section").slideToggle(3000);
//     });
//     $(".stop").click(function(){
//         $("section").stop();
//     });
// });

// chain
// $(document).ready(function(){
//     $(".start").click(function(){
//         $("section").hide(1000).show(1000).slideUp(1000);
//     })
// })
// ------------------------------------------

// Dom manpulation

// getting the text
// $(document).ready(function(){
//     let t=$("div").text()
//     console.log(t)
// })

// Setting the text
// $(document).ready(function(){
//     $("div").text("This is a new text")
// })

//html
// $(document).ready(function(){
//     $("div").html()//getting
//     $("div").html("<h1>hii</h1>")//setting
// })

// input value
// $(document).ready(function(){
//     let x = $("input").val() //getting
//     console.log(x)
//     $("input").val("Hello") //setting
// })

// // Getting attrbuite value
// $(document).ready(function(){
//     console.log($("div").attr("id")) // demo       getting the id or any other attr
//     $("div").attr("id","Him")//setting it with Him
//     console.log($("div").attr("id"))//Him
// })

// -------------
// Adding [append-prepend-after-before]
// $(document).ready(function(){
//     $("p").append("Hello now i add after the text-")
//     $("p").prepend("-Hello now i add before the text")
//     $("p").after("-Hello now i add in the next line after the text")//next line
//     $("p").before("-Hello now i add in the pervouis line before the text")// before the pargraph
// })

// Remove
// $(document).ready(function(){
//     $("p").remove();
// })

//Adding class
// $(document).ready(function(){
//     $("p").addClass("Test");
// })

//Remove Class
// $(document).ready(function(){
//     $("p").removeClass("Test");
// })

//Toggle class
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggleClass("Test");
//     })
//     $("button").on('click',function(){
//         $("p").toggleClass("Test");
//     })
// })

// Adding Css
// $(document).ready(function(){

//     $("button").on('click',function(){
//         $("p").css({
//             fontSize:"20px",
//             color:"red"
//         })
//     })
// })
// ------------------------------------------------------------------
// Dimensation

$(function(){
    $("p").width()//
    $("p").innerWidth()//
    $("p").outerWidth()//
})
