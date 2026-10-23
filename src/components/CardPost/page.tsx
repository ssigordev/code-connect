import { Avatar } from "../Avatar/page";
import Image from "next/image";
export const CardPost = ({post}) => {
    return (
    <article className="mt-6 ml-6">
        <header>
            <figure >
                <Image 
                width={438}
                height={133}
                src={post.cover}
                alt={post.title}
                className="rounded-lg"
                />
                
            </figure>
        </header>
        <section className= "text-white">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </section>
        <footer className= "text-white">
            <Avatar 
            name={post.author.username} 
            imageSrc={post.author.avatar} 
            />
        </footer>
    </article>
    );
};