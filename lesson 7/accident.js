(function(that) {

    function extendsMethod(construct, ext) {
        construct.prototype = new ext;
        construct.prototype.constructor = construct;
    }

    Accident = function(people, message) {
        this.accidentDate = new Date();
        this.peopleCount = people;
        this.message = message;
    }

    Accident.prototype.setTransports = function (transport) {
        if(transportation.isValid(this.__accidentType, transport)) {
            this.__transports.push(transport);
        } else {
            throw "Not Valid!!!"
        }
    }

    Accident.prototype.getTransports = function (transport) {
        return this.__transports
    }

    Accident.prototype.toString = function() {
        var msg;
        msg = "message - " + this.message + ", accidentDate - " + this.accidentDate + ", countPeople - " + this.peopleCount;
        return msg;
    }

    that.AviationAccident = function (altitude, people, message) {
        this.__accidentType = "aviationAccident";
        this.altitude = altitude;
        this.__Accident = new Accident(people, message);
        this.__transports = new Array();
    }

    extendsMethod(that.AviationAccident, Accident);

    that.AviationAccident.prototype.toString = function() {
        var msg = this.__Accident.toString();
        msg += ", altitude -" + this.altitude + ", transports - " + this.__transports.toString();
        return msg;
    }

    that.CivilianAviation = function (name, people, message) {
        this.__accidentType = "civilianAviation";
        this.nameAviation = name;
        this.__Accident = new Accident(people, message);
        this.__transports = new Array();
    }

    extendsMethod(that.CivilianAviation, Accident);

    that.CivilianAviation.prototype.toString = function() {
        var msg = this.__Accident.toString();
        msg += ", name -" + this.nameAviation + ", transports - " + this.__transports.toString();
        return msg;
    }

    that.MilitaryAccident = function (country, people, message) {
        this.__accidentType = "militaryAccident";
        this.country = country;
        this.__Accident = new Accident(people, message);
        this.__transports = new Array();
    }

    extendsMethod(that.MilitaryAccident, Accident);

    that.MilitaryAccident.prototype.toString = function() {
        var msg = this.__Accident.toString();
        msg += ", country -" + this.country + ", transports - " + this.__transports.toString();
        return msg;
    }

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

}(window))
