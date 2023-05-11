import './ScrollToTop.css'

export default function ScrollToTop() {
  
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={handleClick}>
      &#9650;
    </button>
  )
}