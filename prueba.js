textos = [
    '03-Jun+Espectáculo "Alienación indebida" - Abubukaka',
    "10-Jun+Teatro: Bodas de sangre",
    "04-Jun+El Sueño y La Vigilia en ZALADEteatro",
    "02-Jun+Carnaval Santa Cruz 2022",
    "02-Jun+Carnaval Santa Cruz 2022",
    "11-Jun+Teatro Familiar: Musa Pelusa"
]

function ChangeNameEvent() {
    const categorias = ['Actividades para niños','Audiovisuales','Congreso/Conferencia','Cultura urbana','Deporte','Espectáculo','Exposiciones','Festivales', 'Feria/Mercado','Gastronomía','Literatura','Naturaleza','Música','Taller/Curso','Teatro','Visita guiada/Excursión','Otros']
    const capitalize = (string) => string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const deleteComillas = (string) => string?.replace(/['"]+/g, '');
    const Elemento = document.querySelector("#name")
    const Texto = Elemento?.value?.split('+');
    const Fecha = Texto[0].split('-');
    console.log(capitalize(deleteComillas(Texto[1])));
    Elemento.value = capitalize(deleteComillas(Texto[1]));
    return Fecha;
}

const capitalize = (string) => string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalize('mitad y mitad'));