import { useState } from "react";
import { categories } from "../Category/Category";
import styles from "./Form.module.css";

export default function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [ videos, setVideos ] = useState([]);
  const [ errors, setErrors ] = useState('');

  function valideUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

    if(!regex.test(url) || url.length < 43) {
      setErrors('ERRO: URL inválida!')
      return false
    } else {
      return url.substring(32, 43) // id do video
    }
}

  function onSave(e) {
    e.preventDefault();
    console.log(url, category);

    // validar url e category 
    if(!category || category === '-') {
      setErrors('ERRO: Escolha uma categoria!')
      return
    } else {
      setErrors('')
    }
    
    const urlVideo = valideUrl(url)
    if(urlVideo && category) {
      // Guardar a URL e a category
      const newVideo = { url, category }
      setVideos([...videos, newVideo])
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
    } else {
      setErrors('ERRO: URL inválida!')
    }

    
    // Limpar o form
    setUrl('')
    setCategory('')

  }

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeos</h2>
      <form onSubmit={onSave}>
        <div>
          <div className={styles.group}>
            <label htmlFor="URL do video">URL do vídeo</label>
          </div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Digite a URL do vídeo"
            required
            maxLength="43"
            minLength="43"
          />
        </div>

        <div>
          <div className={styles.group}>
            <label htmlFor="Categorias">Categoria</label>
          </div>
          <select
            required="required"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-" >Selecione uma categoria</option>
            {categories.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button>Cadastrar</button>
        </div>
        <div>
          {errors}
        </div>
      </form>
    </section>
  );
}
