jQuery(document).ready(function () {
    jQuery('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});


$(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })
	
	//Tabs
	$(".activeTab").click(function(e){
		if($(".activeTab").eq(0).hasClass("active"))
			$("#blogComment").show();
		else
		    $("#blogComment").hide();
		    $("#videosection").hide();
	})
	
	if ($(window).width() < 1200) {
	    $(".tab-links a").css("padding", "10px 9px");
	    $(".form-inline").css("padding", "10px 9px");
	}
});

$(window).resize(function () {
	if ($(window).width() < 1200) {
		$(".tab-links a").css("padding", "10px 9px");
	}
	else{
		$(".tab-links a").css("padding", "16px 66px");
	}
});