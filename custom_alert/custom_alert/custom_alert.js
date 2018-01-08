var alert_cnt = 0;

var close_btns = [];

var custom_alert = function(msg, time, callback){	
	msg = msg.replace(/\n/, "<br/>");
	
	var left = 0;
	var top = 0;

	try{
		left = document.parentWindow.parent.document.body.clientWidth;
	}catch(e){
		left = 500;
	}
	try{
		top = document.parentWindow.parent.document.body.clientHeight;
	}catch(e){
		top = 500;
	}
	
	var closableBtn;
	
	if(top < 150)
	{
		var box_div = document.createElement("div");
		box_div.style.position = "absolute";
		box_div.style.left = "0px";
		box_div.style.top = "0px";
		box_div.style.zIndex = "10";		
		box_div.style.width = (left - 20) + "px";
		box_div.style.backgroundColor = "#FFF";
		
		var text_div = document.createElement("div");
		
		text_div.style.margin = "10px";
		text_div.style.fontFamily = "Malgun Gothic";
		text_div.style.fontSize = "0.7em";
		text_div.innerHTML = msg;
		
		var close_div = document.createElement("div");
		close_div.style.marinRight = "10px";
		close_div.style.textAlign = "center";
		
		if(time > 0)
		{
			setTimeout(function(){
				document.body.removeChild(box_div);
				alert_cnt--;
				if(alert_cnt < 1)
				{
					document.parentWindow.parent.document.getElementById("ubi_alert_div").style.display="none";
					document.parentWindow.parent.document.getElementById("ubi_screen").style.display="none";
					try{ callback(); }catch(e){ };
				}
			}, time);
		}
		else
		{
			var close_btn = document.createElement("input");
			close_btn.type="button";
			close_btn.value="확인";
			close_btn.style.marginBottom = "5px";
			close_btn.onclick = function(){
				document.body.removeChild(this.parentElement.parentElement);
				alert_cnt--;
				if(alert_cnt < 1)
				{
					this.ownerDocument.parentWindow.parent.document.getElementById("ubi_alert_div").style.display="none";
					this.ownerDocument.parentWindow.parent.document.getElementById("ubi_screen").style.display="none";
					try{ callback(); }catch(e){ };
				}
			};			
			close_div.appendChild(close_btn);	

			closableBtn = close_btn;
		}
		
		box_div.appendChild(text_div);
		box_div.appendChild(close_div);		

		this.document.body.appendChild(box_div);
	}
	else
	{
	
		var box_div = document.createElement("div");
		box_div.className ="ubi_alert box";
		box_div.style.position = "absolute";
		//box_div.style.left = (left/2)-left_offset+"px";
		
		//box_div.style.top = (top/2)-65+"px";
		//box_div.style.top = "50px";
		box_div.style.zIndex = "10";
		//box_div.style.width =(msg.length*12+100)+"px";
		
		var head_div = document.createElement("div");
		head_div.className ="ubi_alert head";
		head_div.innerHTML ="경고";
	
		var body_div = document.createElement("div");
		body_div.className ="ubi_alert body";		
	
		var img = document.createElement("img");
		img.src = "./images/important.gif";
		var span = document.createElement("sapn");
		span.style.verticalAlign = "10px";
		span.innerHTML = msg;
	
		body_div.appendChild(img);
		body_div.appendChild(span);
		
		var foot_div = document.createElement("div");
		foot_div.className ="ubi_alert foot";
		
		var close_div = document.createElement("div");
		close_div.style.marinRight = "10px";
		close_div.style.textAlign = "center";
		
		if(time > 0)
		{
			setTimeout(function(){
				document.body.removeChild(box_div);
				alert_cnt--;
				if(alert_cnt < 1)
				{
					document.parentWindow.parent.document.getElementById("ubi_alert_div").style.display="none";
					document.parentWindow.parent.document.getElementById("ubi_screen").style.display="none";
					try{ callback(); }catch(e){ };
				}
			}, time);
		
		}
		else
		{
			var close_btn = document.createElement("input");
			close_btn.className ="ubi_alert close";
			close_btn.type="button";
			close_btn.value="확인";
			close_btn.onclick = function(e){
				
				document.body.removeChild(this.parentElement.parentElement.parentElement);
				alert_cnt--;
				if(alert_cnt < 1)
				{
					this.ownerDocument.parentWindow.parent.document.getElementById("ubi_alert_div").style.display="none";
					this.ownerDocument.parentWindow.parent.document.getElementById("ubi_screen").style.display="none";
					try{ callback(); }catch(e){ };
				}				
			};
			close_div.appendChild(close_btn);	
			
			closableBtn = close_btn;
		}
		
		foot_div.appendChild(close_div);
		box_div.appendChild(head_div);
		box_div.appendChild(body_div);
		box_div.appendChild(foot_div);	
		//jQuery(box_div).draggable({containment: "document"});	
		this.document.body.appendChild(box_div);
		
		box_div.style.left = ((left-box_div.clientWidth)/2)+"px";
		box_div.style.top = ((top-box_div.clientHeight)/2)+"px";
	}
	
	if(closableBtn) {
		close_btns.push(closableBtn);
		closableBtn.focus();	
	}
	
	alert_cnt++;	
};

var closable_keyCode = {
	"13" : "enter",
	"27" : "esc",
	"32" : "spacebar"
};	

document.onkeypress = function(e){
	
	e = e || window.event;
	
	if(e.keyCode in closable_keyCode)
	{
		
		if(close_btns.length > 0)
		{
			var close_btn = close_btns.pop();	
			if(close_btn) close_btn.click();			
		}
		
		try{
			if(e.stopPropagation)	e.stopPropagation();
			else 					e.cancelBubble = true;
		}catch(e){}
	}		
};

	//#0058EA - 경고창 머리/테두리
	//#EDE4DD - 경고창 몸통
	//#E66231 - 경고창 닫기 버튼
//window.alert = custom_alert;