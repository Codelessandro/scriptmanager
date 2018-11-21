const fs = require('fs');

const isDone = (script) => { 
	const data = JSON.parse(fs.readFileSync('done.json', 'utf8'));
	return data["Files"].filter( e => e["name"]==script).length>0;
}


const init = function() {
	content = {"Files":[] }
	try{
            fs.writeFileSync('done.json', JSON.stringify(content));
	}catch (e){
	}
}

function run(script) {
	const done = JSON.parse(fs.readFileSync('done.json', 'utf8'));
	const shell = require('shelljs');
	console.log(script)
	shell.exec(script)
	done["Files"].push({"name" : script})
	fs.writeFileSync('done.json', JSON.stringify(done));
}

module.exports.init = init

module.exports.runScripts = function(scripts) {
	init()
	scripts.filter( script => !isDone(script)).forEach( script => run(script)  )  
}


