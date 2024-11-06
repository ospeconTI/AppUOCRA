export const validaMail = (email) => {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
};

export const ValidateCUITCUIL = (cuit) => {
	if (cuit.length != 11) return 0;

	var rv = false;
	var resultado = 0;
	var cuit_nro = cuit;
	var codes = "6789456789";
	var cuit_long = parseInt(cuit_nro);
	var verificador = parseInt(cuit_nro[cuit_nro.length - 1]);
	var x = 0;

	while (x < 10) {
		var digitoValidador = parseInt(codes.substring(x, x + 1));
		if (isNaN(digitoValidador)) digitoValidador = 0;
		var digito = parseInt(cuit_nro.substring(x, x + 1));
		if (isNaN(digito)) digito = 0;
		var digitoValidacion = digitoValidador * digito;
		resultado += digitoValidacion;
		x++;
	}
	resultado = resultado % 11;
	rv = resultado == verificador;
	return rv;
};

export const getDistance = (lat1, lon1, lat2, lon2) => {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1); // deg2rad below
	var dLon = deg2rad(lon2 - lon1);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d;
};

function deg2rad(deg) {
	return deg * (Math.PI / 180);
}
