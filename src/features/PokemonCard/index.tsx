import { Pokemon } from "@/types/Types";
import Link from "next/link"
import styles from "./PokemonCard.module.css"

type Props ={ 
    poke: Pokemon
}

const PokemonCard = ({poke} : Props) => {
    const { id, name } = poke;
    const baseImgUrl = process.env.NEXT_PUBLIC_POKE_API_IMG_URL || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    const image = `${baseImgUrl}/${id}.png`

    return (
        <div className={styles.card}>
            <Link  className={styles.card__name} href={`/pokemon/${id}`}>
                <div>
                    <h3>{name}</h3>
                    <img className={styles.card__img} loading="lazy" src={image} alt={`Nome do Pokemon: ${name}`} />
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard;
