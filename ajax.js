function initLoad(){

	var xhr = new XMLHttpRequest();
	var url = "./data.json";
	xhr.open("GET",url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			document.getElementById("loading").style.display = "none";
			var data = JSON.parse(xhr.responseText);
			
			data.forEach(function(value,index){
				var animal = {};
				animal.image = data[index].ImageName;
				animal.name = data[index].Name||"未命名";
				animal.sex = data[index].Sex;
				animal.place = data[index].Resettlement;
				console.log(animal);
				$("#result").append(
					`<div class="card" style="width: 20rem;">
			  			<img class="card-img-top" src="${animal.image}" alt="Card image cap">
						<div class="card-body">
					    	<h4 class="card-title">${animal.name}</h4>
					    	<p class="card-text">性別：${animal.sex}</p>
					    	<p class="card-text">${animal.place}</p>
					    </div>
					</div>`
				);
			});
		}
	};
	xhr.send();
}

initLoad();