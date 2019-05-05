window.onload = function(){
		//返回顶部位置
		var oAside = document.getElementById("aside");
		var oAA = oAside.getElementsByTagName("a");
		var oTotop = oAA[oAA.length-1];
		window.onscroll = function(){
			var scrollt = document.body.scrollTop || document.documentElement.scrollTop;	
			if(scrollt > 300){
				oTotop.style.display = "block";
			}else{
				oTotop.style.display = "none";
			}
		}
		oTotop.onclick = function(){
			script = 0;
		}

		//瀑布流 S
 
		var oWonderCon = document.getElementById("wonder-con");
		var oDdList = oWonderCon.getElementsByTagName("dd");
		var hArr = new Array();

		var min = 0;
		for(var i=0;i<3;i++){
			oDdList[i].style.top = 0;
			oDdList[i].style.left = i*400+'px';
			hArr.push(oDdList[i].offsetHeight+oDdList[i].offsetTop);
		}
	
		for(var i=3;i<oDdList.length;i++){
			min = MinHeight();
            
			oDdList[i].style.top = hArr[min]+20+'px';
			oDdList[i].style.left = min *400+'px';
               hArr[min] += oDdList[i].offsetHeight+20;
		}
     
		function MinHeight(){
			var min = 0;
			for(var i = 0;i<hArr.length;i++){
				if(hArr[min]>hArr[i]){
					min = i;
				}
			}
			return min;
		}

		// 瀑布流 E

		//搜索框显示  S
		var oSearchTag = document.getElementById("searchTag");
          var oSearchArea = document.getElementById("searchArea");
          var oSearchUl = oSearchArea.getElementsByTagName("ul")[0];
          var oSInput = document.getElementById("sInput");
          var oSearchIcon= document.getElementById("searchIcon");
         
          oSInput.onfocus = function(){
               oSearchArea.style.borderBottom = "1px solid #f00";
               oSearchTag.style.display="none";
               oSearchUl.style.display="block";
               oSearchIcon.style.backgroundColor="rgba(255,0,0,.5)";
          }
          oSInput.onblur = function(){
               oSearchArea.style.borderBottom = "1px solid #D9DDE1";
               oSearchTag.style.display="block";
               oSearchUl.style.display="none";
               oSearchIcon.style.backgroundColor="#fff";
          }
         //搜索框显示  E


	}

	 var index =0;
  var timer;
   var imgArr = ["https://img.mukewang.com/5a16a15b000171b909360316.jpg",
   "https://img.mukewang.com/5a24e4ee0001577409360316.jpg",
   "https://img.mukewang.com/5a00457e0001e83c09360316.jpg",
   "https://img.mukewang.com/5a00467c0001505309360316.jpg",
   "https://img.mukewang.com/5a00457e0001e83c09360316.jpg",
   "https://img.mukewang.com/5a1e5b7e00012e1309360316.jpg"
   ];

    var oBk = document.getElementById("bk");


function initList(){

 var oBan = document.getElementById("ban");
    var oA = oBan.getElementsByTagName("a");
    var oBdot = document.getElementById("banner-dots");
    var oSpan = oBdot.getElementsByTagName("span");
    var len = oA.length;
    var oPre = document.getElementById("banner-l");
    var oNext = document.getElementById("banner-r");
    timer = setInterval(run,2000);
    oPre.onmouseover = oNext.onmouseover =function(){
      this.style.opacity = 0.4;
      clearInterval(timer);
    }
    oPre.onmouseout = oNext.onmouseout =function(){
      this.style.opacity = 0;
      timer = setInterval(run,2000);
    }

    //点击圆点效果
    for(var i = 0;i<len;i++){
      oSpan[i].r = i;
      oSpan[i].onmouseover = oSpan[i].onclick = function(){
        clearclass(oSpan);
        clearclass(oA);
        clearInterval(timer);
        this.className = "active";
        oA[this.r].className = "block";
        index = this.r;
      }
      oA[i].onmouseover = function(){
          clearInterval(timer);
      }
      oA[i].onmouseout = oSpan[i].onmouseout = function(){
          timer = setInterval(run,2000);
      }
      
    }
	//查看上一页
	   
	   oPre.onclick = function(){
	    clearInterval(timer);
	    index--;
	    clearclass(oSpan);
	    clearclass(oA);
	    if(index<0){
	      index = oSpan.length -1;
	    }
	    oSpan[index].className = 'active';
	    oA[index].className='block';
        oBk.style.backgroundImage ="url('"+imgArr[index]+"')" ;
	
	   }

	    oNext.onclick = function(){
	      clearInterval(timer);
	      clearclass(oSpan);
	        clearclass(oA);
	        index++;
	      if(index>=oSpan.length){
	        index = 0;
	      }
	        oSpan[index].className = "active";
	        oA[index].className = "block";
            oBk.style.backgroundImage ="url('"+imgArr[index]+"')" ;
	    }
	    
	    

	  }
	  function run(){

	     var oBan = document.getElementById("ban");
	    var oA = oBan.getElementsByTagName("a");
	    var oBdot = document.getElementById("banner-dots");
	    var oSpan = oBdot.getElementsByTagName("span");
	    var len = oA.length;
	    var oPre = document.getElementById("banner-l");
	    var oNext = document.getElementById("banner-r");
	    index++;
	    if(index>= oA.length){
	      index = 0;
	    }
	    clearclass(oA);
	    clearclass(oSpan);
	    oSpan[index].className = "active";
	    oA[index].className="block";
        oBk.style.backgroundImage ="url('"+imgArr[index]+"')" ;
	  }
	  function clearclass(e){
	      for(var i=0;i<e.length;i++){
	        e[i].className ="";
	      }
	  }

	  initList();