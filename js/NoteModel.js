function getNote() {
	this.itens = [{nome: 'Item 01', finalizada: false}, {nome: 'Item 02', finalizada: false}, {nome: 'Item 01', finalizada: false}];

	this.remove = function(item) {

		var pos = this.itens.indexOf(item);
		this.itens.splice(pos, 1);
	};

	this.add = function(item){
      this.itens.push(item);
	};

}