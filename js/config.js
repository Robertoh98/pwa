function setConfig(){
	var texts = {
		"title":"Class of JS"
	}
	document.title = texts.title;
	document.getElementById("navTitle").innerHTML = texts.title;
}


setConfig();