/*
* @Author: YaYu
* @Date:   2017-10-29 15:31:58
* @Last Modified by:   YaYu
* @Last Modified time: 2017-10-29 15:41:06
*/
$(function(){
	$(".changeList>li").click(function(){
		let cNum = $(this).index();
		$(".changeList>li").removeClass('changeClick');
		$(this).addClass('changeClick');
		$(".changeCate").css({"display":"none","z-index":"1"});
		$(".changeCate").eq(cNum).css({"display":"block","z-index":"10"});
	})
})