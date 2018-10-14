/*
* @Author: YaYu
* @Date:   2017-10-30 13:18:57
* @Last Modified by:   YaYu
* @Last Modified time: 2017-10-30 13:35:43
*/
$(function(){
	let aFlag = true;
	$(".titleImg>a").click(function(){
		if(aFlag){
			$(".titleInfo").animate({"bottom":"-170px","opacity":"1"},600,function(){
				aFlag = false;
			});
		}else{
			$(".titleInfo").animate({"bottom":"0px","opacity":"0"},600,function(){
				aFlag = true;
			});
		}
	})
	console.log($(".titlePhoto>a"));
})