// 轮播图f1
// var current=0;
// // console.log(screen);
// function f1(){
// 	var ulobj=document.getElementById("screen").children[0];
// 	current-=10;
// 	if(current<-1880){
// 		ulobj.style.left=0+'px';
// 		current=0;
// 	}else{
// 		ulobj.style.left=current+'px';
// 	}
// }
// var timeId=setInterval(f1,100);
// document.getElementById('screen').onmouseover=function () {
//     clearInterval(timeId);
//   };
// document.getElementById("screen").onmouseout=function(){
// 	clearInterval(f1,50);
// };

//轮播图f2
    var num = 0;
    var box=$(".lunbo");
    var width = box.width();
    console.log(width);

 //设置点击时候图标的背景变化
    function ff(num){
    	$(".icon").each(function(index,element){
	    	if(num==index){
				$(this).css("background-color","#E39A29");
			}else{
				$(this).css("background-color","white");
			}	
    	});
    }
    
//定时轮播图片    
    var sid=setInterval(function(){
		num++;
		if(num>2){
			num=0;
		}
		// console.log(num);
		box.css("marginLeft",num*-600+"px");
		ff(num);
		},3000);

//点击小圆标时切换的轮播图
	$(".icon").click(function(){
		// console.log($(this).text());
		$(this).css("background-color","#E39A29");	
		clearInterval(sid);
		if($(this).text()==1){
			box.css("marginLeft",0+"px");
		}
		if($(this).text()==2){
			box.css("marginLeft",-600+"px");
		}
		if($(this).text()==3){
			box.css("marginLeft",-1200+"px");
		}
		var n=$(this).attr("n");
		ff(n);
		num=n;
		// console.log(n+"lll");
		sid=setInterval(function(){
		num++;
		if(num>2){
			num=0;
		}
		// console.log(num);
		box.css("marginLeft",num*-600+"px");
		ff(num);
		},3000);
	});

	//时间显示
	setInterval(function(){
		$(".time").text(new Date().toLocaleString());
		},1000)
		$(".time_1").text("星期:"+new Date().getDay());
		var week=new Date().getDay();
        // console.log(week);
	switch(week){
			case 1:
			$(".time_1").text("星期一");
			break;
			case 2:
			$(".time_1").text("星期二");
			break;
			case 3:
			$(".time_1").text("星期三");
			break;
			case 4:
			$(".time_1").text("星期四");
			break;
			case 5:
			$(".time_1").text("星期五");
			break;
			case 6:
			$(".time_1").text("星期六");
			break;
			case 0:
			$(".time_1").text("星期天");
			break;
		}



