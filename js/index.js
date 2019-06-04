$(function(){

    $('#dowebok').fullpage({
    	//sectionsColor: ['#2c343c', '#2c343c', '#2c343c', '#2c343c'],
    	afterLoad: function(anchorLink, index){
    		switch(index){
    			case 1:
    			  $('.section1 .icon').velocity('transition.perspectiveUpIn', { duration: 650,delay:100});
    			  $('.section1 h1').velocity('transition.slideUpBigIn', { duration: 650,delay:500});
    			  $('.section1 .Title_2').velocity('transition.slideUpBigIn', { duration: 650,delay:700});
    			  $('.section1 .personDetail').velocity('transition.slideUpBigIn', { duration: 650,delay:900});
    			  break;
    			case 2:
    			  $('.section2 .aboutMe').velocity('transition.shrinkIn',{duration:650});
				  $(".section2 .lable").velocity("transition.whirlIn", { duration:650,stagger: 200 });
    			  break;
    			case 3:
    			  $('.section3  h2').velocity('transition.expandIn',{duration:650});
				  $(".section3 .Block").velocity("transition.slideUpBigIn", { duration:650,stagger: 200 });
    			   break
    			case 4:
    			  $('.section4  h2').velocity('transition.expandIn',{duration:650});
				  $(".section4 .item").velocity("transition.slideLeftBigIn", { duration:650,stagger: 100 });
    			   break
    			case 5:
    			  $('#DownArrow').hide();
    			  $('.section5  h2').velocity('transition.expandIn',{duration:650});
				  $(".section5 .ContactArticle").velocity("transition.slideUpBigIn", {delay:300, duration:650});
				  $(".section5 .ContactIcon").velocity("transition.slideLeftBigIn", {delay:500, duration:650,stagger: 100 });
				   break
    		}
    	},
    	onLeave: function(index, direction){
    		$('.section'+index+' .hide').velocity({
    			  	'opacity':0
    			  },{
    			  	duration:450
    	    })
    		if(index !=$('.section').length){
    			$('#DownArrow').show();
    		}
    	}
    	
    });
});