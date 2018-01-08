var alert_res_path = ".";

var window_alert = function(msg){
	var top = document.body.clientHeight;
	var left = document.body.clientWidth;

		
	var box_div = document.createElement("div");
	box_div.style.position = "absolute";
	box_div.style.top = (top/2-85)+"px";
	box_div.style.left = (left/2-100)+"px";
	
	var left_div = document.createElement("div");
	left_div.className = "alert_left";

	var body_div = document.createElement("div");
	body_div.className = "alert_body";
	
	var body_top_div = document.createElement("div");
	body_top_div.style.height = "54px";
	/*TOP BODY*/
	var close_top_img = document.createElement("img");
	close_top_img.style.float = "right";
	close_top_img.src = alert_res_path +"/alert_close_top.png";
	body_top_div.appendChild(close_top_img);

	/*MIDDLE BODY*/
	var body_mid_div = document.createElement("div");
	body_mid_div.style.height = "59px";
	
	var icon_div = document.createElement("div");
	icon_div.style.float = "left";

	var alert_icon_img = document.createElement("img");
	alert_icon_img.style.marginLeft = "26px";
	alert_icon_img.src = alert_res_path +"/alert_icon.png";	

	icon_div.appendChild(alert_icon_img);

	var text_div = document.createElement("div");
	text_div.className = "alert_content";

	var text_span = document.createElement("span");
	text_span.innerHTML = msg; // MESSAGE

	text_div.appendChild(text_span);

	body_mid_div.appendChild(icon_div);
	body_mid_div.appendChild(text_div);

	/*BOTTOM BODY*/
	var body_bottom_div = document.createElement("div");
	body_bottom_div.style.height = "57px";

	var close_img = document.createElement("img");
	close_img.style.float = "right";
	close_img.style.marginTop = "13px";
	close_img.style.marginRight = "10px";
	close_img.src = alert_res_path +"/alert_close.png";
	body_bottom_div.appendChild(close_img);

	
	body_div.appendChild(body_top_div);
	body_div.appendChild(body_mid_div); 
	body_div.appendChild(body_bottom_div);

	var right_div = document.createElement("div");
	right_div.className = "alert_right";

	box_div.appendChild(left_div);
	box_div.appendChild(body_div);
	box_div.appendChild(right_div);

	document.body.appendChild(box_div);
};