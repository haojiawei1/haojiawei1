/**
 * Created by 郝 on 2016/11/8.
 */
$(function(){
   $(".banner-img div").css({"z-index":0}).eq(0).css({"z-index":1});
   var num=0;
   var now=0;
   var t=setInterval(move,3000)
   var flag=false;
   function move(type){
  if(flag){
     return
  }

      flag=true;
       type=type||"now"
      if(type=="now"){
         num++;
         if(num>=3){
            num=0
         }
      $(".banner-img div").eq(num).css({left:0,"z-index":1});
      $(".banner-img div").eq(now).css({"z-index":2}).animate({left:1349},1000,function(){
         $(".banner-img div").eq(num).css({"z-index":2})
         $(".banner-img div").eq(now).css({"z-index":1})
         flag=false
      })
   }else if(type=="pre"){
         num--;
         if(num<0){
            num=2
         }
         $(".banner-img div").eq(num).css({left:0,"z-index":1});
         $(".banner-img div").eq(now).css({"z-index":2}).animate({left:-1349},1000,function(){
            $(".banner-img div").eq(num).css({"z-index":2})
            $(".banner-img div").eq(now).css({"z-index":1})
            flag=false
      })
      }
      $(".btn .btn1").removeClass("active").eq(num).addClass("active")
      now=num;

}
   $(".btn .btn1").click(function(){
      num=$(this).index();
      if(num>now){
         num=$(this).index()-1
          $(".btn .btn1").removeClass("active").eq(num).addClass("active")
         move("now")
      }else if(num<now){
         num=$(this).index()+1
          $(".btn .btn1").removeClass("active").eq(num).addClass("active")
         move("pre")
      }
   })
    $(".banner").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,2000)
    })

})