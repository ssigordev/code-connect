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
  const { data: posts, prev, next } = await getAllposts(2);
  return (
    <main>
      <div>
        <div className="flex  gap-4 flex-wrap justify-center w-1/2 ">
          {posts.map(post => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
        <div className=" flex ml-6">
          {prev && <Link href={`/?page=${prev}`} className="bg-blue-500 text-white justify-center items-center px-4 flex h-10 w-70  rounded-md">Anterior</Link>}
          {next && <Link href={`/?page=${next}`} className="bg-blue-500 text-white justify-center items-center px-4 flex h-10 w-70  rounded-md">Próximo</Link>}
        </div>
      </div>

    </main>
  );
}
