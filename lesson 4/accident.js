
Object.defineProperty(Object.prototype, "extend",
	{
		writable: true,
		enumerable: false,
		configurable: true,
		value: function(o) {
			var name = Object.getOwnPropertyNames(o);
			for(var i = 0; i < name.length; ++i) {
				if(name[i] in this) continue;
				
				var desc = Object.getOwnPropertyDescriptor(o, name[i]);
				Object.defineProperty(this, name[i], desc);
				
			}
		}
	}
);


var accident = {
	__accidentType: "accident",
	accidentDate: new Date(),
	__transports: new Array(),
	set transports(transport) {
		if(transportation.isValid(this.__accidentType, transport)) {
			this.__transports.push(transport);
		} else {
			throw "Not Valid!!!"
		}
	},
	get transports() {
		return this.__transports;
	},
	peopleCount: new Number(),
	message: new String(),
	toString() {
		var msg;
		msg = this.message + " " + this.accidentDate + " " + this.countPeople + " " + this.__transports.toString();
		switch (this.__accidentType) {
			case "aviationAccident":
				msg += " altitude " + this.altitude;
				break;
			case "civilianAviation":
				msg += " name aviation " + this.nameAviation;
				break;
			case "militaryAccident":
				msg += " country- " + this.country + " involved countries- " + this.involvedCountries.toString();
				break;
		}
		return msg;
	}
}

var aviationAccident = {
	__accidentType: "aviationAccident",
	altitude: new Number()
}
aviationAccident.extend(accident) 


var civilianAviation = {
	__accidentType: "civilianAviation",
	nameAviation: new String()
}
civilianAviation.extend(aviationAccident);

var militaryAccident = {
	__accidentType: "militaryAccident",
	country: new String(),
	involvedCountries: new Array()
}
militaryAccident.extend(aviationAccident);

var transportation = {
	aviationAccident: ["boing 1"],
	civilianAviation: ["mig 2"],
	militaryAccident: ["test 3"],
	isValid: function(type, transport) {
		if(this[type].indexOf(transport) !== -1) {
			return true;
		}
		return false;
	}
}