"USE STRICT";
app.factory("dbService", function($http){
	var basepath = require('electron').remote.app.getAppPath();
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect(require('path').join(require('electron').remote.app.getAppPath(), 'model', 'database.db'));
	return db;
});