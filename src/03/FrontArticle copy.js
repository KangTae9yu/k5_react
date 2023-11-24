
const FrontArticle = (probs) => {
  return (
    <article id="divHtml">
      <h2>{probs.title}</h2>
      <div>
        <div class="divimg">
          <img src={probs.href} alt={probs.title} />
        </div>
        <p>
          {probs.content}
        </p>
      </div>
    </article>
  )
}

export default FrontArticle
