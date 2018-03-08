function setConfig(){
	var texts = {
		"title":"Class of JS"
	}
	document.title = texts.title;
	document.getElementById("IdNavTitle").innerHTML = texts.title;
}


setConfig();