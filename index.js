function adicionar(){


	var id = document.getElementById("id");
	var title = document.getElementById("title");
	var link = document.getElementById("link");
	var desc = document.getElementById("desc")
	var tgs = document.getElementById("tgs");
	var dados = JSON.parse(localStorage.getItem("dadosferramentas"));
	
	if (dados == null){
		localStorage.setItem("dadosferramentas", "[]" );
		dados = [];
	}  
	var cadastro = {
		id  : id.value,
		title  : title.value,
		link : link.value,
		desc : desc.value,
		tags : tgs.value
		
	}
  dados.push(cadastro);
  dados.forEach(function (tools){
   document.body.innerHTML += "<div>"+tools.id+"</div>" ;
   document.body.innerHTML += "<div>"+tools.title+"</div>" ;
   document.body.innerHTML += "<div>"+tools.link+"</div>" ;
   document.body.innerHTML += "<div>"+tools.desc+"</div>" ;
   document.body.innerHTML += "<div>"+tools.tgs+"</div>" ;
  })
	  function remove(){
		var id = document.getElementById("id");  
		var dados = JSON.parse(localStorage.getItem("dadosferramentas"));
        var cadastro = {
			id  : id.value,
			title  : title.value,
			link : link.value,
			desc : desc.value,
			tags : tgs.value
			
		}
		dados.delete(cadastro.id);
		dados.forEach(function (tools){
		 document.body.innerHTML += "<div>"+tools.id+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.title+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.link+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.desc+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.tgs+"</div>" ;
		})
	}

}
