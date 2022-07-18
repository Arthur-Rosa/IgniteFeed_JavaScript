import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/93738072?v=4",
      name: "Arhur",
      role: "Full-Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          'Acabei de subir mais um projeto no meu git, é um projeto que fiz para o Senai "Ricardo Lerner"',
      },
      {
        type: "link",
        content: "Agenda - Auditório",
        hrfe: "https://github.com/ArthurCorpO/FrontEnd-JS",
      },
    ],
    publishedAt: new Date("2022-07-07 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/82879012?v=4",
      name: "José Roberto",
      role: "Instrutor de formação profissional - Senai",
    },
    content: [
      { type: "paragraph", content: "Oi pro ceis" },
      {
        type: "paragraph",
        content:
          "Dêm uma olhada no projeto que foi desenvolvido no segundo semestre. É um projeto bem simples em android que explora conceitos como intent, paginação e binding",
      },
      {
        type: "link",
        content: "Jogo da velha",
        hrfe: "https://github.com/jsilvasenai/jogodavelha",
      },
    ],
    publishedAt: new Date("2022-07-02 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
