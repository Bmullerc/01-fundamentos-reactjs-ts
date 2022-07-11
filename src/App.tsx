import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/bmullerc.png',
      name: 'Bernardo Müller',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Eae colegas,' },
      { type: 'paragraph', content: 'Novo projeto upado pro meu git, foi um projeto tanto pra praticar como pra uso real assim que completar com informações reais.' },
      { type: 'paragraph', content: 'Segue o Repo:' },
      { type: 'link', content: 'https://github.com/Bmullerc/engenheiros-site' },
    ],
    publishedAt: new Date('2022-06-07 18:13:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bmullerc.png',
      name: 'Cleiton Silva',
      role: 'Professional Snooker Player',
    },
    content: [
      { type: 'paragraph', content: 'Opa amigo,' },
      { type: 'paragraph', content: 'Que legal esse projeto' },
      { type: 'paragraph', content: 'Se quiser conferir o meu git:' },
      { type: 'link', content: 'https://github.com/Bmullerc/' },
    ],
    publishedAt: new Date('2022-06-09 13:07:45')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
