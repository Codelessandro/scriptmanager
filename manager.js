let scripts=['/scripts/scriptA.sh','/scripts/scriptB.sh']
const fs = require('fs')


let isDone = (script) => { 
	data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
	return data["Files"].filter( e => e["name"]==script).length>0
}


function run(script) {
	data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
	console.log(data)
	console.log("--")
	//run script here
	data = data["Files"].push({"name" : script})
	console.log(data)
	console.log(typeof(data))
	//fs.writeFileSync('data.json', data)
}


function runScripts() {
	scripts.filter( script => !isDone(script)).forEach( script => run(script)  )  
	//run scripts
		//if done > save to .json
}

runScripts()


