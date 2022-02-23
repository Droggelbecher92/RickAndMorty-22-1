import './CharacterCard.css'

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
        <div className={'card'}>
            <h1 className={'cardHeader'}>{props.name}</h1>
            <img src={props.pic} alt="Pic of char" className={'cardPic'}/>
            <ul>
                <li>Location: {props.location}</li>
                <li>Species: {props.species}</li>
                <li>Status: {props.status}</li>
            </ul>
        </div>
    )
}