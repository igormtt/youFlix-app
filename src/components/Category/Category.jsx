/* eslint-disable react-refresh/only-export-components */
import videos from '../../json/videos.json'
import styles from './Category.module.css'

export const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Geologia e Hidrografia"
  ]
  
  export function filterCategory (id) {
    return videos.filter( video => video.category === categories[id])
  }

// eslint-disable-next-line react/prop-types
export default function Category ({ category, children }) {
    return(
    <section className={styles.category}>

        <h2>{category}</h2>
        <div>
        
       {children}

        </div>

    </section>
 
    )
}