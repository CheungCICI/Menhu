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
	function startTime()  
{  
var today=new Date()  
var years=today.getFullYear();  
var months=today.getMonth();  
var d=today.getDate()  
var h=today.getHours()  
var m=today.getMinutes()  
var s=today.getSeconds()   
months=months+1  
months=checkTime(months)  
d=checkTime(d)  
m=checkTime(m)  
s=checkTime(s)  
var weekday=new Array(7)  
weekday[0]="星期日"  
weekday[1]="星期一"  
weekday[2]="星期二"  
weekday[3]="星期三"  
weekday[4]="星期四"  
weekday[5]="星期五"  
weekday[6]="星期六"  
var w=weekday[today.getDay()]  
document.getElementById('ShowTime').innerHTML=years+"-"+months+"-"+d+" "+" "+h+":"+m+":"+s+" "+w;  
t=setTimeout('startTime()',500)  
}  


function checkTime(i)  
{  
if (i<10)  
{i="0" + i}  
return i  
}  

//导航栏下拉菜单
    $(".navigation li").hover(function () {
        $(this).children("ul").slideToggle(200);
    });



    


