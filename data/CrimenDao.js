/**
 * Clase para persistir datos referentes a crimenes
 */
class CrimenDao {

    /**
     * Devuelve todos los crimenes que se encuentran en local storage
     * si no hay ninguno devuelve un array vacio
     * 
     * @returns crimenes Array[Crimen]
     */
    getAllCrimenes() {
        const json = localStorage.getItem("crimen");
        let crimenes = JSON.parse(json) || [];

        if (!Array.isArray(crimenes)) {
            crimenes = [crimenes];
        }

        console.log(crimenes);
        return crimenes;
    }

    /**
     * Añade un nuevo crimen al local storage
     * 
     * @param {Crimen} wesen 
     */
    addCrimen(crimen) {
        const crimenes = this.getAllCrimenes();
        crimenes.push(crimen);
        localStorage.setItem("crimen", JSON.stringify(crimen));
    }
}