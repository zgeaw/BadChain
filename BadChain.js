//32237384@qq.com
//检测图片坏链
var BadChain = function(id) {
	var _sel = $(id);
		_sel.each(function() {//执行遍历
			if ($(this).attr('src') == '') {//判断src属性是否为空
				$(this).attr("src", "nopic.jpg");//设置src属性
			}
			$(this).error(function() {//加载错误执行
				$(this).attr("src", "nopic.jpg");
			});
		});
}