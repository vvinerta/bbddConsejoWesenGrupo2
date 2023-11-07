## Base de datos Consejo Wesen (Grimm)

Integrantes:
- Guillermo Fabian Rodriguez
- Raul Moya Gimeno
- Victor Viñerta Crespo
- Diego Urmente Villarroya
- Sergio Alejaldre Zarza

### Introducción
El Consejo Wesen es una antigua institución que fue creada en la edad media para controlar a los wesen más violentos que atacaban los pueblos de kehrseiter (humanos normales), razón por la cual luego todos los wesen eran perseguidos en venganza por las matanzas. El Consejo tiene entre otras atribuciones: detectar a los wesen peligrosos y "eliminarlos", castigar a los wesen que se muestran públicamente sin razón alguna, y en general hacer cumplir las normas del Consejo, que tienen como intención principal conservar la paz entre wesen y kehrseiter. El Consejo Wesen tiene su sede en La Haya, junto a la Corte Internacional de Justicia.

### Requerimientos
Pero en el mundo hay millones de wesen y es difícil hacer un seguimiento, con lo que los miembros del consejo han encargado a uno de sus programadores wesen que realice una aplicación en Javascript que pueda accederse desde cualquier equipo informático y que permita realizar las siguientes operaciones:
- Listado de wesen peligrosos (los datos se almacenan de forma persistente usando LocalStorage).
- Cada wesen debe contener la siguiente información:
    - Nombre y apellidos.
    - Dirección y nacionalidad.
    - Tipo de wesen.
    - Listado de crímenes contra la ley wesen cometidos por el wesen.
    - Foto del wesen.
    - Indicación de si el wesen ya ha sido apercibido por sus faltas.
    - Gravedad de sus faltas (escala numérica).
    - Nombres de los wesen complices que se conozcan de ese wesen.
    - Nombre del sicario enviado para eliminarlos o castigarlos.
    - Tipo de castigo impuesto (listado de posibles castigos).
    - Fecha la condena por el Tribunal Wesen.
- Cada uno de los crímenes que se le atañen al wesen tendrá esta estructura:
    - Denominación del crimen.
    - Fecha aproximada de realización del crimen.
    - Si se han visto involucrados kehrseiter.
    - Víctimas si las hubo.
    - Descripción pormenorizada del crimen.
    
Se debe emitir un informe con los wesen registrados como criminales, ordenados por fecha de la condena, gravedad de las faltas y número de crímenes por los que se les persigue. Los datos que deben aparecen en el informe son el nombre y los apellidos, nacionalidad, tipo de wesen, fecha de la condena, la gravedad más alta de sus faltas y el número de crímenes cometidos.
