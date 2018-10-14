/*
* @Author: YaYu
* @Date:   2017-10-23 10:37:20
* @Last Modified by:   YaYu
* @Last Modified time: 2017-10-25 15:55:18
*/
$(function(){
	$(".search").focus(function() {
		$(".searchView").animate({"width":"240px"},"slow");
		$(this).animate({"width":"240px"},"slow");
		$(".searBtn").css({"background":"rgba(0,0,0,0.5)"});
		$(".icon-sousuo").css({"color":"#ffffff"});
	}).blur(function(event) {
		$(".searchView").animate({"width":"162px"},"slow");
		$(this).animate({"width":"162px"},"slow");
		$(".searBtn").css({"background":"rgba(0,0,0,0)"});
		$(".icon-sousuo").css({"color":"#acacac"});
	});
})