import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Produtos.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Produtos() {
  return (
    
      
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
           Os melhores produtos.sempre!
            <code className={styles.code}></code>
          </p>
          <div>
            <a
              href="/aliex.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
             andrecorreiadev
            </a>
          </div>
</div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/relogio.jpg"
            alt="Next.js Logo"
            width={250}
            height={180}
            priority
          />
</div>

        <div className={styles.grid}>
          <a
            href="/produtos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Amigos do pet <span>-&gt;</span>
            </h2>
            <p>
              Cuide bem do seu bichinho!
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Automotivos <span>-&gt;</span>
            </h2>
            <p>
              As melhores marcas!
            </p>
          </a>

          <a
            href="/contatos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Para sua casa <span>-&gt;</span>
            </h2>
<p>
              Entre e compre a vontade!! 
            </p>
          </a>

          <a
            href="/quemsomos"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Bebidas <span>-&gt;</span>
            </h2>
           <p>
           Venha conferir!
            </p>
          </a>
        </div>
      </main>
    
  )
}
