/*
* @Author: YaYu
* @Date:   2017-10-29 19:38:38
* @Last Modified by:   YaYu
* @Last Modified time: 2017-10-29 19:48:22
*/
$(function(){
	$(".likeClick>.iconfont").click(function(){
		$(this).css({"color":"#ea6f5a"});
	})
	$(".replyClick>.iconfont").click(function(){
		$(".replyArea").css({"display":"block"});
	})
	$(".replyBtn>a").click(function(){
		$(".replyArea").css({"display":"none"});
	})
})