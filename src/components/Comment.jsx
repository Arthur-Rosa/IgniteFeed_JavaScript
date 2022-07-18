import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, WhenDeleteComment }) {
  //A informação passada no useState deve ser sempre a mesma do conteudo do variavel
  //Nesse caso é um numero
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    WhenDeleteComment(content);
  }

  function handleLikeComment() {
    //setLikeCount(likeCount + 1) outra possibilidade
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/94193637?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Zacarias</strong>
              <time
                title="Publicado 11 de julho ás 16:29"
                dateTime="2022-05-11 04:29:3"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
