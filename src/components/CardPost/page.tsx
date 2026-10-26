import { Avatar } from "../Avatar/page"
import Image from "next/image"

export const CardPost = ({ post }) => {
  return (
    <article className="w-80 mt-6 mb-6 ml-6 flex flex-col bg-gray-800 rounded-lg shadow-md">
      <header>
        <figure>
          <Image src={post.cover}
            alt={post.title}
            width={438}
            height={133}
            className="rounded-t-lg"
            />
        </figure>
      </header>
      <section className="p-4">
        <h2 className="text-white">{post.title}</h2>
        <p className="text-white">{post.body}</p>
      </section>
      <footer className="p-4">
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  )
}
