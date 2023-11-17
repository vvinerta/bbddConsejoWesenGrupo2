class Wesen {  
    constructor(nombreApellidos, direccion, nacionalidad, tipo, crimenes, foto, 
        apercibido, gravedadFaltas, wesenComplices, sicario, castigo, fechaCondena) {
        this.id = crypto.randomUUID();
        this.nombreApellidos = nombreApellidos;
        this.direccion = direccion;
        this.nacionalidad = nacionalidad;
        this.tipo = tipo;
        this.crimenes = crimenes;
        this.foto = foto;
        this.apercibido = apercibido;
        this.gravedadFaltas = gravedadFaltas;
        this.wesenComplices = wesenComplices;
        this.sicario = sicario;
        this.castigo = castigo;
        this.fechaCondena = fechaCondena;
    }
    getID(){
        return this.id;
    }

    setID(nuevoID) {
        this.id = nuevoID;
    }

    getNombre() {
        return this.nombreApellidos;
    }

    setNombre(nuevoNombre) {
        this.nombreApellidos = nuevoNombre;
    }
    getDireccion() {
        return this.direccion;
    }

    setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }

    getNacionalidad() {
        return this.nacionalidad;
    }

    setNacionalidad(nuevaNacionalidad) {
        this.nacionalidad = nuevaNacionalidad;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(nuevoTipo) {
        this.tipo = nuevoTipo;
    }

    getCrimenes() {
        return this.crimenes;
    }

    setCrimenes(nuevosCrimenes) {
        this.crimenes = nuevosCrimenes;
    }

    getFoto() {
        return this.foto;
    }

    setFoto(nuevaFoto) {
        this.foto = nuevaFoto;
    }

    getApercibido() {
        return this.apercibido;
    }

    setApercibido(nuevoApercibido) {
        this.apercibido = nuevoApercibido;
    }

    getGravedadFaltas() {
        return this.gravedadFaltas;
    }

    setGravedadFaltas(nuevaGravedadFaltas) {
        this.gravedadFaltas = nuevaGravedadFaltas;
    }

    getWesenComplices() {
        return this.wesenComplices;
    }

    setWesenComplices(nuevosWesenComplices) {
        this.wesenComplices = nuevosWesenComplices;
    }

    getSicario() {
        return this.sicario;
    }

    setSicario(nuevoSicario) {
        this.sicario = nuevoSicario;
    }

    getCastigo() {
        return this.castigo;
    }

    setCastigo(nuevoCastigo) {
        this.castigo = nuevoCastigo;
    }

    getFechaCondena() {
        return this.fechaCondena;
    }

    setFechaCondena(nuevaFechaCondena) {
        this.fechaCondena = nuevaFechaCondena;
    }

}

   