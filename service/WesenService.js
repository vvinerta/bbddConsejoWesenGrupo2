/**
 * Clase para filtrar y ordenar la lista de wesens peligrosos
 */
class WesenService {
    #dao;

    constructor() {
        this.#dao = new WesenDao();
    }

    getAllWesens() {
        return this.#dao.getAllWesens();
    }

    getWesensByName(name) {
        const wesens = this.#dao.getAllWesens();
        return wesens.filter(wesen => wesen.nombreApellidos.startsWith(name));
    }

    getWesensByPais(pais) {
        const wesens = this.#dao.getAllWesens();
        return wesens.filter(wesen => wesen.nacionalidad.startsWith(pais));
    }

    getWesensByType(type) {
        const wesens = this.#dao.getAllWesens();
        return wesens.filter(wesen => wesen.tipo == type);
    }

    getWesensByCrimen(crimen) {
        const wesens = this.#dao.getAllWesens();
        return wesens.filter(wesen => wesen.crimenes.includes(crimen));
    }

    getWesensByGravedadMayorA(gravedad) {
        const wesens = this.#dao.getAllWesens();
        return wesens.filter(wesen => wesen.gravedadFaltas > gravedad);
    }

    sortByGravedadFaltas(wesens) {
        return this.#sortBy(wesens, "gravedadFaltas");
    }

    sortByFechaCondena(wesens) {
        return this.#sortBy(wesens, "fechaCondena");
    }

    sortByNumeroCrimenes(wesens) {
        return this.#sortBy(wesens, "crimenes");
    }

    /**
     * Método privado para ordenar un array de wesens por una propiedad 
     * 
     * @param {Array<Wesen>} wesens lista de wesens a ordenar
     * @param {String} propiedad propiedad por la que se ordena
     * @returns Array<Wesen> lista con los wesens de manera ordenada
     */
    #sortBy(wesens, propiedad) {
        return wesens.sort((wesen1, wesen2) => {
            const prop1 = wesen1[propiedad];
            const prop2 = wesen2[propiedad];
            const tipo = typeof prop1;

            if (tipo === "number") {
                console.log("Soy un numero");
                return prop1 - prop2;

            } else if (tipo === "string" && this.#isValidDate(prop1)) {
                console.log("Soy una fecha");
                const fecha1 = new Date(prop1);
                const fecha2 = new Date(prop2);
                return fecha1 - fecha2;
                
            } else if (tipo === "string") {
                console.log("Soy un string");
                return prop1.localeCompare(prop2);
            } else if (Array.isArray(prop1)) {
                console.log("Soy un array");
                return prop1.length - prop2.length;
            } else {
                console.log("err");
                return 1;
            }
        });
    }

    #isValidDate(dateString) {
        const date = new Date(dateString);
        return date.toString() !== 'Invalid Date';
    }
}