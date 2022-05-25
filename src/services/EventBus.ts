import Event from "../interfaces/Event";

class _EventBus {

    bus: Event[]

    constructor() {
        this.bus = [];
    }

    $off(id: number) {
       this.bus.filter( Element => Element.id != id )
    }

    $on(evento: Event) {
        let conteo = this.bus.length
        evento.id = conteo
        this.bus.push(evento)
        return conteo
    }

    $emit(event: string, ...params: any | any[]) {
        return (this.bus.filter((element) => element.EventName == event ))
            .forEach(evento => {
                evento.fn(...params)
            })
    }
}

export default new _EventBus();