const fs = require('fs');

const isDone = (script) => { 
	const data = JSON.parse(fs.readFileSync('done.json', 'utf8'));
	return data["Files"].filter( e => e["name"]==script).length>0;
}

const markDone = function(script) {
	const done = JSON.parse(fs.readFileSync('done.json', 'utf8'));
	done["Files"].push({"name" : script})
	fs.writeFileSync('done.json', JSON.stringify(done));
}

const init = function() {
	content = {"Files":[] }
	try{
            fs.writeFileSync('done.json', JSON.stringify(content), {flag : "ax" } );
	}catch (e){
	}
}

function run(script) {
	const shell = require('shelljs');
	shell.exec(script)
	markDone(script)
}

module.exports.markDone = markDone
module.exports.init = init
module.exports.isDone = isDone
module.exports.runScripts = function(scripts) {
	init()
	scripts.filter( script => !isDone(script)).forEach( script => run(script)  )  
}


