const fs = require("fs");
fs.readFile('provinces.json', 'utf8', function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
});

const contenu_objet_json = (obj)=>{
	let trace = '';
	obj.provinces.forEach((elm,i)=>{
		trace += "<tr><td>" + elm.acronyme + '</td><td>' + elm.nom + '</td></tr>';
	})
	return trace;
}

const http = require("http"); 
http.createServer((request, response)=>{ 
	response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
	response.write('<!DOCTYPE "html">');
	response.write('<html>');
	response.write('<head>');
	response.write('<title>Vive Node.js</title>');
	response.write('</head>');
	response.write('<body>');
	response.write('<table><thead><tr><th>Acronyme</th><th>Nom</th></tr></thead><tbody>');
	response.write(contenu_objet_json(obj));
	response.write('</tbody></table>');
	response.write('</body>');
	response.write('</html>');
	response.end();
}).listen(3000);