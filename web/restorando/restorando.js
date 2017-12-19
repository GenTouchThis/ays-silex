function abrirFrame(w, h, src) {
	
	// Verifica si ya existe un contenedor y un fondo
	var control1 = document.getElementById('Pop'); 
	var control2 = document.getElementById('fondoPop');
	
	// Crea el fondo si no existe
	if (control1 == null) {

		var fondoPop = document.createElement("DIV");
		fondoPop.id = 'fondoPop';
		fondoPop.style.width = '100%';
		fondoPop.style.height = '100%';
		fondoPop.style.position = 'fixed';
		fondoPop.style.backgroundColor="#000000";
		fondoPop.style.opacity = .80;
		fondoPop.style.filter = 'alpha(opacity=' + 80 + ')';
		fondoPop.style.zIndex = 1001;
		fondoPop.style.left = 0;
		fondoPop.style.top = 0;
		fondoPop.style.display ='block';
		
		document.body.appendChild(fondoPop);
	}
	
	// Crea el contenedor si no existe
	if (control2 == null) {
		
		var Pop = document.createElement("DIV");
		Pop.id = 'Pop';
		Pop.style.position = 'fixed';
		Pop.style.backgroundColor="transparent";
		Pop.style.zIndex = 1002;
		Pop.style.left = '50%';
		Pop.style.top = '50%';
		Pop.style.borderRadius = '0em'; // standard
		Pop.style.MozBorderRadius = '0em'; // Mozilla
		Pop.style.WebkitBorderRadius = '0em'; // WebKit
		
		document.body.appendChild(Pop);
	}

	//	Crea el iFrame
	var framePopup = document.createElement("IFRAME");
    framePopup.id = 'framePopup';
	framePopup.frameBorder = 0;
	framePopup.scrolling = 'no';
	framePopup.src = src;
	framePopup.width = w;
	framePopup.height = h;
	framePopup.style.borderRadius = '0em'; // standard
	framePopup.style.MozBorderRadius = '0em'; // Mozilla
	framePopup.style.WebkitBorderRadius = '0em'; // WebKit
	
	// Agrega el iFrame y hace visible el contenedor
  	a = document.getElementById('Pop');
  	a.appendChild(framePopup);
	a.style.visibility = 'visible';
	a.style.width = w + 'px';
	a.style.height = h + 'px';
	a.style.marginLeft = (Math.round(w / 2) * -1 ) + 'px';
	a.style.marginTop = (Math.round(h / 2) * -1 ) + 'px';
	
	// Hace visible el fondo
	b = document.getElementById('fondoPop');
	b.style.visibility = 'visible';
}

function cerrarFrame() {
	
	// Elimina el iFrame
	var d = document.getElementById('Pop'); 
	var d_remover = document.getElementById('framePopup'); 
	var removido = d.removeChild(d_remover);
	
	// Oculta el fondo y el contenedor
	document.getElementById('fondoPop').style.visibility = 'hidden';
	document.getElementById('Pop').style.visibility = 'hidden';
}