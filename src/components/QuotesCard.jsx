import "./QuotesCard.css"


const QuotesCard = ({quote, handleChangeQuote}) => {

  return (
    <section className='quoteCard'>

      <article className="quoteCard__container">
        <p className="quoteCard__punch">{quote.punch_line}</p>

        <h3 className="quoteCard__artist">{quote.artist}</h3>

        <button 
          className="quoteCard__btn" 
          onClick={handleChangeQuote}
          >
          <img 
          className="quoteCard__btn__img" 
          src="/1.png" alt="" 
          title="Change"
          />
        </button>

      </article>

      <footer className="quoteCard_footer">

       
        <h1>Track: {quote.name}</h1> <br />
        <span>Video: <a href='${quote.link}'>&#9834;&#9835;&#9836;</a></span> 
        
      </footer>

    </section>
  )
}

export default QuotesCard
