var alert_cnt = 0;

var custom_alert = function(msg){

	var left="520";
	var top="600";

	var box_div = document.createElement("div");
	box_div.className ="ubi_alert box";
	box_div.style.position = "absolute";
	box_div.style.left = left-75+"px";
	box_div.style.top = top-65+"px";
	box_div.style.zIndex = "5";

	var head_div = document.createElement("div");
	head_div.className ="ubi_alert head";
	head_div.innerHTML ="경고";

	var body_div = document.createElement("div");
	body_div.className ="ubi_alert body";
	//body_div.innerHTML = msg;

	var img = document.createElement("img");
	img.src = "./images/important.gif";
	var span = document.createElement("sapn");
	span.style.verticalAlign = "10px";
	span.innerHTML = msg;

	body_div.appendChild(img);
	body_div.appendChild(span);

	var foot_div = document.createElement("div");
	foot_div.className ="ubi_alert foot";

	var close_btn = document.createElement("input");
	close_btn.className ="ubi_alert close";
	close_btn.type="button";
	close_btn.value="확인";
	close_btn.onclick = function(){
		document.body.removeChild(this.parentElement.parentElement);
		alert_cnt--;
		if(alert_cnt < 1) this.ownerDocument.parentWindow.parent.document.getElementById("ubi_alert_div").style.display="none";
	};

	foot_div.appendChild(close_btn);
	box_div.appendChild(head_div);
	box_div.appendChild(body_div);
	box_div.appendChild(foot_div);

	jQuery(box_div).draggable({containment: "document"});

	this.document.body.appendChild(box_div);

	alert_cnt++;
}
	//#0058EA - 경고창 머리/테두리
	//#EDE4DD - 경고창 몸통
	//#E66231 - 경고창 닫기 버튼
	//allowTransparency="true"
window.alert = custom_alert;