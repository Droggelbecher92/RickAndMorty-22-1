interface CharacterCardProps{
    name : string,
    key : number,
    pic : string,
    location : string,
    status : string,
    species : string
}

export default function CharacterCard(props : CharacterCardProps){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.pic} alt="Pic of char"/>
            <ul>
                <li>Location:{props.location}</li>
                <li>Species: {props.species}</li>
                <li>Status: {props.status}</li>
            </ul>
        </div>
    )
}