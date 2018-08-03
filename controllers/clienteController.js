"USE STRICT";
app.controller("clienteController", function($scope, $location, dbService){
	//Listando
	$scope.listaclientes = function(){
		dbService.runAsync("SELECT * FROM clientes WHERE ativo = 1", function(data){
			$scope.clientes = data;
		});
	}

	//Salvando
	$scope.salvar = function(){
		if($scope.cliente.id){
			//Editar
			var id = $scope.cliente.id;
			delete $scope.cliente.id;
			delete $scope.cliente.$$hashKey; //Apaga elemento $$hashKey do objeto
			dbService.update('clientes', $scope.cliente, {id: id}); //entidade, dados, where
		}else{
			//nova
			dbService.insert('clientes', $scope.cliente); // entidade, dados
		}
		$scope.cliente = {};
		$scope.listaclientes();
		$('#modalcliente').modal('hide');
	}

	//Abrindo para editar
	$scope.editar = function(dados){
		$scope.cliente = dados;
		$scope.original = JSON.parse(JSON.stringify(dados));
		$('#modalcliente').modal('show');
	}

	//Excluindo
	$scope.excluir = function(dados){
		if(confirm("Deseja realmente apagar o cadastro de "+dados.nome+"?")){
			dbService.update('clientes', {ativo:0}, {id: dados.id});
			$scope.listaclientes();
		}
	}

	$scope.cancelar = function(){
		$scope.cliente.nome = $scope.original.nome;
		$scope.cliente.cpf = $scope.original.cpf;
	}
});