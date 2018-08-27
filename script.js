	var botao = document.getElementById("btn");
	var url = document.getElementById("pesquisa");

	botao.addEventListener('click', function(e){
		e.preventDefault();
		var request = new XMLHttpRequest();

		request.open('GET', 'http://127.0.0.1:8080/Desktop/urls.json', true);

		request.onload = function() {
			if (this.status === 200){
				const urls = JSON.parse(this.responseText);

				for(var i = 0; i < urls.length; i++){
					if(url.value == urls[i].url){
						url.value = urls[i].shortUrl;
					}
				}

			}
		};

		request.send();
	});
