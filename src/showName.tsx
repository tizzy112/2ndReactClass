import ShowMyFriendName from "./showMyFriendName";
const ShowName = (props) =>{
    console.log('props',props)

    const myFriendName = 'oloyede';

    return (
        <>
        <div>my name is {props.myName}</div>
        <ShowMyFriendName myFriendName={myFriendName}/>
        </>
    ) 
}

export default ShowName;