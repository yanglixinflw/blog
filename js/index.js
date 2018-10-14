/*
* @Author: YaYu
* @Date:   2017-10-22 10:35:14
* @Last Modified by:   YaYu
* @Last Modified time: 2017-10-25 23:31:07
*/
$(function(){
	$(".readMore").hover(function(){
		$(this).animate({"width":"500px"},"500");
	},function(){
		$(this).animate({"width":"100%"},"500");
	})
	$('.shutter').shutter({
        shutterW: 960, // 容器宽度
        shutterH: 358, // 容器高度
        isAutoPlay: true, // 是否自动播放
        playInterval: 3000, // 自动播放时间
        curDisplay: 3, // 当前显示页
        fullPage: false // 是否全屏展示
    });
})
