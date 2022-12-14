function get_text_file(address_url, get_text_callback){
	var xml_http = new XMLHttpRequest();
	
	xml_http.onreadystatechange = function(){
		if (xml_http.readyState==4){
			if ((xml_http.status==200) || (xml_http.status==0)){
				get_text_callback(xml_http.responseText, xml_http.status);
				xml_http.onreadystatechange = function(){};
			}
		}
	}
	
	//xml_http.open('GET', 'http://test2.vectoss.pl/simple_text.txt');
	xml_http.open('GET', address_url, true);
	xml_http.send();
}

/* Example of use */
/*
get_text_file('index.php', function(text, status){
	if(status==200){
		alert(text);
	}
});
*/