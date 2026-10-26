import { CardPost } from "@/components/CardPost/page";
import logger from "@/logger";
import Link from "next/link";

async function getAllposts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error('ops, ocorreu um erro ao buscar os posts');
  }
  logger.info('Posts buscados com sucesso');
  return response.json();
}

export default async function Home() {
  const { data: posts, prev, next } = await getAllposts(1);
  return (
    <main >
      <div className="flex flex-wrap justify-center w-1/2 ">
        {posts.map(post => (
          <CardPost key={post.id} post={post} />
        ))}
        {prev && <Link href={`/?page=${prev}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Anterior</Link>}
        {next && <Link href={`/?page=${next}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Próximo</Link>}
      </div>

    </main>
  );
}
