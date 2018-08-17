 //分页
//           function pag(){
//               
//           }
//          var serve="http://45.125.216.42:9388/index/";           
//           $.ajax({
//             url: serve + 'index/ff',
//               type:"get",
//               data:{
//  			 'count':"1"
//   		 },
//              success: function(data) {
//                           console.log(data)
//                       }
//           })
        
 

            var serve="http://45.125.216.42:9388/index/";
               $('.pag').pagination({   
                dataSource: function(done) {
                    $.ajax({
                        url: serve + 'index/ff',
                        success: function(data) {
                            done(data);
//                            console.log(data)
                        }
                    });
             },
                pageSize: 10,
                // pageCount:10,
                autoHidePrevious: true,
                autoHideNext: true,
                callback: function(data) {
                   for(var i=0; i<data.length;i++){
//                       console.log(data.length);
//                        $(".cc").text(data[i].title);
                        $(".cc").append("<li><a href=news_show?id="+data[i].id+">"+data[i].title+"</a> <span>"+data[i].publishtime+"</span></li>");
//                       $(".cc").html("<li><a href=news_show?id="+data[i].id+">"+data[i].title+"</a> <span>"+data[i].publishtime+"</span></li>"));
     
                   }
          
       
     
               
                       $(".paginationjs a").click(function(){
//                       console.log($(this).text());
                         $(".yeshu").text($(this).text()); 
                          $(".cc li").remove(); 
//                          $.ajax({
//                            url: serve + 'index/ff',
//                             data:{
//                                'count':$(this).text()
//                              },
//                            success: function(data) {
//                                         console.log(data)
//                                     }
//                         })
                       })
                }
                
              
})
                       


