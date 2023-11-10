class Crimen {
    constructor(denominacion, fechaRealizacion, involucradosKehrseiter, victimas, descripcion) {
        this.denominacion = denominacion;
        this.fechaRealizacion = fechaRealizacion;
        this.involucradosKehrseiter = involucradosKehrseiter;
        this.victimas = victimas;
        this.descripcion = descripcion;
    }

    getDenominacion(){
        return this.denominacion;
    }

    setDenominacion(nuevaDenominacion){
        this.denominacion = nuevaDenominacion;
    }

    getFechaRealizacion(){
        return this.fechaRealizacion;
    }

    setFechaRealizacion(nuevaFechaRealizacion){
        this.fechaRealizacion = nuevaFechaRealizacion;
    }

    getInvolucradosKehrseiter(){
        return this.involucradosKehrseiter;
    }

    setInvolucradosKehrseiter(nuevaInvolucradosKehrseiter){
        this.involucradosKehrseiter = nuevaInvolucradosKehrseiter;
    }

    getVictimas(){
        return this.victimas;
    }

    setVictimas(nuevaVictima){
        this.victimas = nuevaVictima;
    }

    getDescripcion(){
        return this.descripcion;
    }

    setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }
}

