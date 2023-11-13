/**
 * Clase para persistir datos referentes a wesens
 */
class WesenDao {

    /**
     * Devuelve todos los wesens que se encuentran en local storage
     * si no hay ninguno devuelve un array vacio
     * 
     * @returns wesens Array[Wesen]
     */
    getAllWesens() {
        const json = localStorage.getItem("wesen");
        const wesens = JSON.parse(json) || [];
        if (!Array.isArray(wesens)) {
            wesens = [wesens];
        }
        console.log(wesens);
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
        localStorage.setItem("wesen", JSON.stringify(wesen));
    }
}