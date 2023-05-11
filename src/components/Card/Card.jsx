/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import iconFavorite from './favorite.png'
import { useFavoriteContext } from '../../contexts/Favorites'
import iconUnfavorite from './unfavorite.png'

export default function Card ({ id }) {

    const { favorite, addFavorite } = useFavoriteContext()

    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconFavorite  : iconUnfavorite

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa} />
            </Link>

            <figure onClick={()=> addFavorite({ id })} className={styles.icon}>
                <img src={icone} alt="Ícone " />
            </figure>

        </section>
    )
}