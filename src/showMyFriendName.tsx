import Instructor from "./instructorName";
const ShowMyFriendName =(props) =>{

    const instructorName = 'usman oni';

    return(<>
     <div>my friend name {props.myFriendName}</div>
     <Instructor instructorName={instructorName}/>
    </>)
}
export default ShowMyFriendName;