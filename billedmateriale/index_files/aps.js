$(document).ready(function() {

  $('#weekly').append('<img src="billedmateriale/weekly.jpg">');
  $('span').append('<img src="billedmateriale/Flag_of_Scotland.png">');

  $(".button").mouseenter(function(){
    	
    	var choice = $(this).text();
    	$(this).css("background-color", "white");
    	$(this).css("color", "black");    		
		$('#menu').hide().empty();

    	switch (choice) {
    		case 'James':
    		$('#photo').css('background-image', 'url("billedmateriale/james_backdrop_scorched.jpg")');	
    		if($('#menu').hasClass('da')) {
    			$('#menu').append("<a href='#milestone'data-toggle='modal'><p><i class='fa fa-comments-o'></i> ugens begivenhed</p></a>").show('slow');
   				$('#menu').append("<a href='#snapshot'data-toggle='modal'><p><i class='fa fa-file-image-o'></i> ugens foto</p></a>").show('slow');
   				$('#menu').append("<a href='billedmateriale/archive.zip'download><p><i class='fa fa-download'></i> hent fotoarkiv</p></a>").show('slow');
    		}
    		else {
    			$('#menu').append("<a href='#milestone' data-toggle='modal'><p><i class='fa fa-comments-o'></i> event of the week</p></a>").show('slow');
   				$('#menu').append("<a href='#snapshot'data-toggle='modal'><p><i class='fa fa-file-image-o'></i> photo of the week</p></a>").show('slow');
   				$('#menu').append("<a href='billedmateriale/archive.zip'download><p><i class='fa fa-download'></i> download photo archive</p></a>").show('slow');
    		}
    		break;


   			case 'Fiona':
   			$('#photo').css('background-image', 'url("billedmateriale/fiona_backdrop_scorched.jpg")');
   			if($('#menu').hasClass('da')) {
          $('#menu').append("<a href='#'><p><i class='fa fa-gbp'></i> karen millen</p></a>").show('slow');
   			  $('#menu').append("<a href='#'><p><i class='fa fa-heartbeat'></i> triatlon</p></a>").show('slow');
   			}
        else {
          $('#menu').append("<a href='#'><p><i class='fa fa-gbp'></i> karen millen</p></a>").show('slow');
          $('#menu').append("<a href='#'><p><i class='fa fa-heartbeat'></i> triathlon</p></a>").show('slow');
        }
        break;

   			case 'Allan':
   			$('#photo').css('background-image', 'url("billedmateriale/allan_backdrop_scorched.jpg")');
   			if($('#menu').hasClass('da')) {
          $('#menu').append("<a href='#'><p><i class='fa fa-coffee'></i> kaffe</p></a>").show('slow');
   			  $('#menu').append("<a href='#'><p><i class='fa fa-motorcycle'></i> scooter</p></a>").show('slow');
   			  $('#menu').append("<a href='#'><p><i class='fa fa-futbol-o'></i> fodbold</p></a>").show('slow');
   			}
        else {
          $('#menu').append("<a href='#'><p><i class='fa fa-coffee'></i> coffee</p></a>").show('slow');
          $('#menu').append("<a href='#'><p><i class='fa fa-motorcycle'></i> scooter</p></a>").show('slow');
          $('#menu').append("<a href='#'><p><i class='fa fa-futbol-o'></i> football</p></a>").show('slow');
        }
        break;

   			case 'Taylor':
   			$('#photo').css('background-image', 'url("billedmateriale/taylor_backdrop_scorched.jpg")');
   			if($('#menu').hasClass('da')) {
          $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> godbid - hov var det et egern?</p></a>").show('slow');
   			  $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> ...eller var det en kanin?</p></a>").show('slow');
   			  $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> hmm, det her lugter interessant</p></a>").show('slow');
   			}
        else{
          $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> treat, yes pleas.. - squirrel, where?!!</p></a>").show('slow');
          $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> ...or was it a rabbit?</p></a>").show('slow');
          $('#menu').append("<a href='#'><p><i class='fa fa-quote-right'></i> hmm, this smells intriguing</p></a>").show('slow');
        }
        break;

  		}; //End choice switch
	

	}); //End mouseenter


	$(".button").mouseleave(function(){
		$(this).css("background-color", "#eeeeee");
		$(this).css("color", "black");
	}); //End mouseleave


	$("span").click(function(){
        if($("span").hasClass("da")) {
        	$('span, #menu, h3, #milestone, p').removeClass('da');
        	$('span').empty();
        	$('#lang').append('<img src="billedmateriale/Flag_of_Denmark.png">');
        	$('span, #menu, h3, #milestone, p').addClass('en');
        	$('#menu').hide().empty();
        	$('#photo').css('background-image', 'url(billedmateriale/backdrop_scorched.jpg)');
//	       	alert($('#menu').hasClass('en'));
        }
        else {
        	$('span, #menu, h3, #milestone, p').removeClass('en');
        	$('span').empty();
        	$('#lang').append('<img src="billedmateriale/Flag_of_Scotland.png">');
        	$('span, #menu, h3, #milestone, p').addClass('da');
        	$('#menu').hide().empty();
        	$('#photo').css('background-image', 'url(billedmateriale/backdrop_scorched.jpg)');
//        	alert($('span').hasClass('en'));
        };

    }); //End span.click 




});