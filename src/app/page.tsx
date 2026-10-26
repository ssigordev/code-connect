import { CardPost } from "@/components/CardPost/page";
import logger from "@/logger";

const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
    "id": 101,
    "name": "Ana Beatriz",
    "username": "mariajamilly_dev",
    "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}

async function getAllposts() {

  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error('ops, ocorreu um erro ao buscar os posts');
  }
  logger.info('Posts buscados com sucesso');
  return response.json();
}

export default async function Home() {
  const posts = await getAllposts();
  return (
    <main >
      <div className="flex flex-wrap justify-center">
        {posts.map(post => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>

    </main>
  );
}
