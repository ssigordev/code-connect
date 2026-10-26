import { Avatar } from "../Avatar/page"
import Image from "next/image"

export const CardPost = ({ post }) => {
  return (
    <article className="mt-6 ml-6">
      <header>
        <figure>
          <Image src={post.cover}
            alt={post.title}
            width={438}
            height={133}
            />
        </figure>
      </header>
      <section >
        <h2 className="text-white">{post.title}</h2>
        <p className="text-white">{post.body}</p>
      </section>
      <footer>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  )
}
