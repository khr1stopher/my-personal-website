export default interface Event{
    id?: number,
    EventName: string,
    fn: (...args: any[]) => void
}