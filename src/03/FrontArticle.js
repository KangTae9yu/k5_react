import style from './ForntEnd.module.css' ;
import Like from "../04/Like";

const FrontArticle = ({ title, href, content}) => {
    return (
        <>
        <article className={style.divArticle} id="divHtml">
            <h2>{title}</h2>
            <div>
                <div className={style.divimg}>
                    <img src={href} alt={title} />
                </div>
                <p>
                    {content}
                </p>
            </div>
        </article>
        <Like />
        </>
    )
}

export default FrontArticle
