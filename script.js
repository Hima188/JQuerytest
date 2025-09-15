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
// $(function(){
//     console.log($("p").width(""))// the width = 50
//     console.log($("p").width("100"))// the width = 100
//     console.log($("p").width())// the width = 100
//     console.log($("p").innerWidth())// padding + width = 70
//     console.log($("p").innerWidth("200"))// width = 180 because we supstract the padding from it (pading = 20px)
//     console.log($("p").outerWidth())// padding + width + border = 74
//     console.log($("p").outerWidth("200"))// width = 174 because we supstract the padding=20px and the border=4px 
//     console.log($("p").outerWidth(true))// margin+padding + width + border = 74
// })
// ---------------------------------------------------------------------------------------------------------------------

// Travsling
// Ancsestor
// $(function(){
//     // $("span").parent().css("border", "2px solid red")
//     // $("li").parent().css("border", "2px solid red")// the direct parent
//     // $("li").parents().css("border", "2px solid red")//to every parent till the html
//     // $("li").parents("ul").css("border", "2px solid red")//to every parent ul 
//     // $("li").parentsUntil("section").css("border", "2px solid red")//to every parent ul 
// })
// Decendor
// $(function(){
//     $("section").children().css("border", "2px solid red")//direct childs
//     $("section").children("p").css("border", "2px solid red")//direct childs p only
//     $("section").find("p").css("border", "2px solid red")// searching for ul under it (grand childs , childs)
// })

// siblings
// $(function(){
//     $("p").siblings().css("border", "2px solid red")// all siblings
//     $("p").next().css("border", "2px solid red")//direct next
//     $("div").perv().css("border", "2px solid red") //direct prev
//     $("div").nextAll().css("border", "2px solid red") // all next
//     $("div").pervAll().css("border", "2px solid red")// all prev
//     $("div").pervUnil("p").css("border", "2px solid red") // prev until p ( we won't take the p)
//     $("div").nextAll("ul").css("border", "2px solid red")// next until ul ( we won't take the ul)
// })
// --------------------------------------------------------------------------------------------------------
//Filter
// $(function(){
//     // $("p").first().css("border","2px solid red")//first p you face
//     // $("p").last().css("border","2px solid red")// last p
//     // $("p").eq(0).css("border","2px solid red")// eq(index) 0 first ..... 1 second ..... 2 thrid one ..... and so on 
//     // $("p").filter('.test').css("border","2px solid red")// filtering and get what we need (class)
//     // $("p").filter('#1').css("border","2px solid red")// filtering and get what we need  (id)
//     // $("p").not('.test').css("border","2px solid red")// get everything except what we have inside the not
// })
// -------------------------------------------------------------------------------------------------------------
// Jquery Ajax
// $(function(){
//     $.ajax({
//         type:"Get", // the request (post - get)
//         url:"https://jsonplaceholder.typicode.com/posts", // where we gonna send the request
//         data:{
//             format:"json",
//         },
//         error:function(){ // if happend error
//             console.log(err);
//         },
//         success:function(data){ // if success
//             console.log("data",data)
//         },
//     });
// });