let scripts=['/scripts/scriptA.sh','/scripts/scriptB.sh']
const fs = require('fs')


let isDone = (script) => { 
	data = JSON.parse(fs.readFileSync('done.json', 'utf8'))
	return data["Files"].filter( e => e["name"]==script).length>0
}


function run(script) {
	done = JSON.parse(fs.readFileSync('done.json', 'utf8'))
	//run script here
	done["Files"].push({"name" : script})
	console.log(typeof(done))
	fs.writeFileSync('done.json', done);
	//fs.writeFileSync('data.json', data)
}


function runScripts() {
	scripts.filter( script => !isDone(script)).forEach( script => run(script)  )  
	//run scripts
		//if done > save to .json
}

runScripts()


