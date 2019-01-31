$(".start").click(function(){
	 var name = "";
	 while(name==""){
		name = window.prompt("请输入你的名字","");
	 }
			location.href="tests.html?name="+name;
		})