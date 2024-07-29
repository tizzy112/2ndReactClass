interface GreetProps{
    name: string;
    time : string;
     mornringOrAternoon: string;
     children: React.ReactNode
}
const Greet = (props: GreetProps) =>{
    const {name,time,mornringOrAternoon} = props
    return <div>
        <h1>good {mornringOrAternoon} {name}, the time you came in was {time}</h1>
        {props.children}
    </div>
}
export default Greet;