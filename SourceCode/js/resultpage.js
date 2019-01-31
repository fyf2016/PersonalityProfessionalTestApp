	function GetQueryString(name)
		{
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		}
		C=GetQueryString("C");
		R=GetQueryString("R");
		I=GetQueryString("I");
		E=GetQueryString("E");
		S=GetQueryString("S");
		A=GetQueryString("A");
		
		var arr=[[C,"C","常规型"],[R,"R","实际型"],[I,"I","调研型"],[E,"E","企业型"],[S,"S","社会型"],[A,"A","艺术型"]];
				console.log(arr);
				for(i=0;i<6;i++){
					for(j=i+1;j<6;j++){
						if (arr[i][0]*1<arr[j][0]*1) {
							t=arr[i];
							arr[i]=arr[j];
							arr[j]=t;
						}
					}
				}
		var ResultStr=arr[0][1]+arr[1][1]+arr[2][1];
		
		$("#score").html("<center><table border='1' cellspacing='0'><tr><td>指数</td><td>类型</td><td>得分</td></tr><tr><td>"+arr[0][1]+"</td><td>"+arr[0][2]+"</td><td>"+arr[0][0]+"</td></tr>"
		+"<tr><td>"+arr[1][1]+"</td><td>"+arr[1][2]+"</td><td>"+arr[1][0]+"</td></tr>"
		+"<tr><td>"+arr[2][1]+"</td><td>"+arr[2][2]+"</td><td>"+arr[2][0]+"</td></tr>"
		+"<tr><td>"+arr[3][1]+"</td><td>"+arr[3][2]+"</td><td>"+arr[3][0]+"</td></tr>"
		+"<tr><td>"+arr[4][1]+"</td><td>"+arr[4][2]+"</td><td>"+arr[4][0]+"</td></tr>"
		+"<tr><td>"+arr[5][1]+"</td><td>"+arr[5][2]+"</td><td>"+arr[5][0]+"</td></tr><table></center>");

		$("#recommend").html("推荐职业 ("+ResultStr+"): <br><br>"+results(ResultStr));
