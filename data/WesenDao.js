/**
 * Clase para persistir datos referentes a wesens
 */
class WesenDao {

    /**
     * Devuelve todos los wesens que se encuentran en local storage
     * si no hay ninguno devuelve un array vacio
     * 
     * @returns {Array<Wesen>} wesens 
     */
    getAllWesens() {
        const json = localStorage.getItem("wesen");
        let wesens = JSON.parse(json) || [];
        if (!Array.isArray(wesens)) {
            wesens = [wesens];
        }
        wesens = wesens.map(wesen => new Wesen(
            wesen.nombreApellidos,
            wesen.direccion,
            wesen.nacionalidad,
            wesen.tipo,
            wesen.crimenes,
            wesen.foto,
            wesen.apercibido,
            wesen.gravedadFaltas,
            wesen.wesenComplices,
            wesen.sicario,
            wesen.castigo,
            wesen.fechaCondena,
        ));
        return wesens;
    }

    /**
     * Devuelve todos los nombres de los wesens que se encuentran en local storage
     * si no hay ninguno devuelve un array vacio
     * 
     * @returns {Array<String>} wesens 
     */
    getNombreWesens() {
        const json = localStorage.getItem("wesen");
        let wesens = JSON.parse(json) || [];
        if (!Array.isArray(wesens)) {
            wesens = [wesens];
        }
        wesens = wesens.map(wesen => wesen.nombreApellidos);
        return wesens;
    }

    /**
     * Añade un nuevo wesen al local storage
     * 
     * @param {Wesen} wesen 
     */
    addWesen(wesen) {
        const wesens = this.getAllWesens();
        wesens.push(wesen);
        localStorage.setItem("wesen", JSON.stringify(wesens));
    }

    /**
     * Borra un wesen del local storage
     * 
     * @param {Wesen} wesen 
     */
    deleteWesen(wesenId) {
        const wesens = this.getAllWesens();
        newWesens = wesens.filter(wesen => wesen.getID() !== wesenId);
        localStorage.setItem("wesen", JSON.stringify(newWesens));
    }
}