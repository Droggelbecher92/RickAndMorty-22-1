import CharacterCard from "./CharacterCard";
import "./Gallery.css"
import {useEffect, useState} from "react";

interface MortyData {
    name : string,
    id : number,
    image : string,
    location : {
        name : string
    },
    status: string,
    species : string
}

interface MortyInfo {
    next: string | null,
    prev: string | null
}

export default function Gallery() {

    const [filter,setFilter] = useState('')
    const [page , setPage] = useState(1)
    const [characters,setCharacters] = useState([] as Array<MortyData>)
    const [info,setInfo] = useState({} as MortyInfo)

    useEffect(()=>getChars()
        ,[page])

    const getChars = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                setInfo(data.info)
                setFilter('')
            })
            .catch(()=>console.log('blöd'))
    }

    return <div>
            <input type="text" placeholder='search' value={filter} onChange={ev=> {setFilter(ev.target.value)}} className={'gallerySearch'}/>
            {info.next && <button onClick={() => setPage(page+1)}>next</button>}
            {info.prev && <button onClick={() => setPage(page-1)}>back</button>}
            <div className={'galleryBox'}>
                {characters.length>0
                    ?
                    characters
                    .filter(char => char.name.toLowerCase().includes(filter.toLowerCase()) )
                    .map(character => <CharacterCard
                                                key={character.id}
                                                name={character.name}
                                                pic={character.image}
                                                location={character.location.name}
                                                status={character.status}
                                                species={character.species}/>)
                    :
                    <div>loading...</div>
                }
            </div>
        </div>
}