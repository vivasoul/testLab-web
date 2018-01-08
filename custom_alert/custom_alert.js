var custom_alert = function(msg){
	var left = window.clientWidth == undefined ? window.innerWidth/2 : window.clientWidth/2;
	var top = window.clientHeight == undefined ? window.innerHeight/2 : window.clientHeight/2;

	var box_div = document.createElement("div");
	box_div.className ="ubi_alert box";
	box_div.style.position = "fixed";
	box_div.style.left = left-75+"px";
	box_div.style.top = top-65+"px";
	box_div.style.zIndex = "9999";

	var head_div = document.createElement("div");
	head_div.className ="ubi_alert head";
	head_div.innerHTML ="경고";
	head_div.onmousedown = console.log;

	var body_div = document.createElement("div");
	body_div.className ="ubi_alert body";
	body_div.innerHTML = msg;

	var foot_div = document.createElement("div");
	foot_div.className ="ubi_alert foot";

	var close_btn = document.createElement("input");
	close_btn.className ="ubi_alert close";
	close_btn.type="button";
	close_btn.value="확인";
	close_btn.onclick = function(e){
		document.body.removeChild(this.parentElement.parentElement);
	};

	foot_div.appendChild(close_btn);
	box_div.appendChild(head_div);
	box_div.appendChild(body_div);
	box_div.appendChild(foot_div);
	
	jQuery(box_div).draggable({containment: "document"});

	document.body.appendChild(box_div);
}
	//#0058EA - 경고창 머리/테두리
	//#EDE4DD - 경고창 몸통
	//#E66231 - 경고창 닫기 버튼

window.alert = custom_alert;