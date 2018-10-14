/*
* @Author: YaYu
* @Date:   2017-11-06 17:17:58
* @Last Modified by:   YaYu
* @Last Modified time: 2017-11-06 18:01:22
*/
$(function(){
	$(".conIndexLi").click(function(){
		let index = $(this).index();
		$(".conIndexA").removeClass('conIndexAJS');
		$(".conIndexA").eq(index).addClass('conIndexAJS');
		$(".attention").css({"display":"none","z-indexs":"1"});
		$(".attention").eq(index).css({"display":"block","z-indexs":"9"});
		$(".conIndexLi").removeClass('hoverLine')
		$(this).addClass('hoverLine');
	})
})