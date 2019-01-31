
		var i=1;
		var C=0,R=0,I=0,E=0,S=0,A=0;
		var sum=1;
		$('#box').on('click','.answer',function(){
			char=$(this).data("id");
			sum++;
			switch(char){
				case 'c':
					C++;
					break;
				case 'r':
					R++;
					break;
				case 'i':
					I++;
					break;
				case 'e':
					E++;
					break;
				case 's':
					S++;
					break;
				case 'a':
					A++;
					break;
			}
			i++;	
			if (sum>60) 
			{
				var c="result.html?C="+C+"&R="+R+"&I="+I+"&E="+E+"&S="+S+"&A="+A;
				var page1=plus.webview.create(c);
				page1.show();	
				
			}else{
			$("#title").html(questions(i));
			$("#buttons").html(buttons(i));
		}
	})
	
	function GetQueryString(name)
		{
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		}
