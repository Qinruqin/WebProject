// JavaScript Document
window.onload = function(){
    var ox = document.getElementById("xx");
    var oimg = document.getElementById("img");
    var otext = document.getElementById("textt");
    ox.onmousedown = function(){
    	oimg.style.display = "none";
    };
    otext.onmousedown = function(){
    	otext.value = "";
    	otext.style.color = "rgb(51,51,51)";
    }
};
//导航栏下的轮播图
$(function(){
	//手动控制轮播图
	$('#one li').eq(0).show();

	$('#two li').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		i=index;
		$('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
	//自动播放
	var i=0;
	var t=setInterval(move,1500);
	//自动播放核心函数
	function move(){
		i++;
		if(i==5){
			i=0;
		}
		$('#two li').eq(i).addClass('on').siblings().removeClass('on');
		$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
	}

	//向右播放核心函数
	function moveL(){
		i--;
		if(i==-1){
			i=4;
		}
		$('#two li').eq(i).addClass('on').siblings().removeClass('on');
		$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	$('#left').click(function(){
			moveL();
	})
	$('#right').click(function(){
		move();
	})
	//鼠标移入移除
	$('#ad').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,1500);
	})
				
})
/*----------今日推荐-----------*/
$(function(){
	
	//自动播放
	var sWidth = $('#h_ad').width();
	var len = $('#h_ad ul li').length;
	var index = 0;
	var picTimer ;
	
	
	$('#h_l').click(function(){
			index -= 1;
			if(index == -1 ){ index = len - 1;} 
			showPic(index);
	})
	$('#h_r').click(function(){
		    index += 1;
			if(index == len ){ index = 0;} 
			showPic(index);
	})
	
	$("#h_ad ul").css("width",sWidth * (len));
	
	//鼠标移入移除
	$('.hot_ad').hover(function(){
		clearInterval(picTimer);
	},function(){
		picTimer = setInterval(function(){
			showPic(index);
			index++;
			if(index == len){ index = 0;}
		},4000);
	}).trigger("mouseleave");
	
	//显示函数：
	function showPic(index){
	   var nowLeft= - index*sWidth;
	   $('#h_ad ul').stop(true,false).animate({"left":nowLeft},1000);
	}
})

/*----------服装箱包-大牌-----------*/
$(function(){
	
	//自动播放
	var sWidth = $('#c_ad').width();
	var len = $('#c_ad ul li').length;
	var index = 0;
	var picTimer , t;
	//左右按钮
	$('#c_l').click(function(){
			index -= 1;
			if(index == -1 ){ index = len - 1;} 
			showPic(index);
	})
	$('#c_r').click(function(){
		    index += 1;
			if(index == len ){ index = 0;} 
			showPic(index);
	})
	
	$("#c_ad ul").css("width",sWidth * (len));
	
	//鼠标移入移除
	$('.c_ad').hover(function(){
		clearInterval(picTimer);
		clearInterval(t);
	},function(){
		picTimer = t = setInterval(function(){
			showPic(index);
			index++;
			if(index == len){ index = 0;}
		},4000);
		
	}).trigger("mouseleave");
	
	$('.c1-icon li').click = function(){
		index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		showPic(index);
	}
	//显示函数：
	function showPic(index){
	   var nowLeft= - index*sWidth;
	   $('#c_ad ul').stop(true,false).animate({"left":nowLeft},1000);
	   $('.c1-icon li').eq(index).addClass('active').siblings().removeClass('active');
	 
	}
})

//热门晒单
$(function(){
	
	//自动播放
	var sHeight = $('#s-box').height();
	var len = $('#s-box ul li').length;
	var index = 0;
	var picTimer ;
	
	$("#s-box ul").css("height",sHeight * (len/2));
	
	//鼠标移入移除
	$('.s-box').hover(function(){
		clearInterval(picTimer);
	},function(){
		picTimer = setInterval(function(){
			showPic(index);
			index++;
			if(index == len-1){ index = 0;}
		},4000);
	}).trigger("mouseleave");
	
	//显示函数：
	function showPic(index){
	   var nowTop= - index*(sHeight/2);
	   $('#s-box ul').stop(true,false).animate({"top":nowTop},1000);
	}
})
//经过导航,显示右边
$(function(){
	$('#ul1 li').hover(function(){
	   var index = $(this).index();
	   $('#item').css("display","block");
	   $('#item .nav-content').eq(index).css("display","block");
	})
	$('#ul1 li').mouseleave(function(){
	    var index = $(this).index();
	   $('#item').css("display","none");
	   $('#item .nav-content').eq(index).css("display","none");
	})
	$('#item .nav-content').hover(function(){
		$('#item').css("display","block");
	  $(this).css("display","block");
	})
	$('#item .nav-content').mouseleave(function(){
		$('#item').css("display","none");
	  $(this).css("display","none");
	})
})

//服装箱包选项卡
$(function(){
	$("#c_t li").hover(function(){
	   var index  = $(this).index();
	   $('#c_t li').eq(index).addClass('active').siblings().removeClass('active');
		$('.cr1').eq(index).addClass('block').siblings().removeClass('block');
		
	});
	
})

//左侧导航选项卡
/*$(function(){
	$("#ul1 li").hover(function(){
	   var index  = $(this).index();
	   $('#ul1 li').eq(index).addClass('active').siblings().removeClass('active');
		$('.nav-content').eq(index).addClass('block').siblings().removeClass('block');
		
	});
	$("#ul1 li").mouseleave(function(){
	   $(this).removeClass('active');
	});
	
})*/