var x = document.getElementById('x');
var y = document.getElementById('y');

var u = document.getElementById('u');
var v = document.getElementById('v');

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');

function addNew(){
	var inp = document.createElement('input');
	inp.className = 'a';
	x.appendChild(inp);
	var nl = document.createElement('br');
	x.appendChild(nl);
}

function processRecords(){
	b1.className = 't d';
	b2.className = 't';

	u.style.display = 'block';
	v.style.display = 'none';

	var recs = document.querySelectorAll('.a');
	u.innerHTML = '';
	v.innerHTML = '';
	for(i=0;i<recs.length;i++){
		var val = parseInt(recs[i].value);
		if(val%2!=0){
			var dv1 = document.createElement('div');
			dv1.className = 'z b';
			dv1.innerHTML = val;
			u.appendChild(dv1);
			continue;
		}
		
		var dv2 = document.createElement('div');
		dv2.className = 'z c';
		dv2.innerHTML = val
		v.appendChild(dv2);
	}
}

function showOdd(){
	b1.className = 't d';
	b2.className = 't';

	u.style.display = 'block';
	v.style.display = 'none';
}

function showEven(){
	b1.className = 't';
	b2.className = 't d';

	u.style.display = 'none';
	v.style.display = 'block';
}