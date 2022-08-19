import { BlogPost, getAllBlogPosts } from '../../lib/blog'

function BlogPost({ post }: { post: BlogPost }) {
  return <section className="dark:bg-dark dark:text-white h-[100vh]">

    <div className="container mx-auto">
      <article className="flex flex-col justify-center items-center pt-20 gap-6 pb-16">
        <h1 className="text-7xl">{post.title}</h1>
        <p className="text-gray-500">{post.brief}</p>
      </article>


      <div className="dark:bg-gray-800 bg-gray-100 rounded-lg shadow-md p-10 flex flex-col gap-4 lg:w-[50vw] mx-auto">
        <div className="dark:text-white" dangerouslySetInnerHTML={{__html: post.sanitizedHtml }}></div>
      </div>

    </div>
  </section>
}

export async function getStaticProps({ params }) {
  const posts = await getAllBlogPosts()

  return {
    props: {
      post: posts.find((v) => v.slug == params.slug)
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllBlogPosts()
  const arr = posts.map((p,i) => ({ params: { slug: p.slug }}))
  console.log(arr)
  return {
    paths: arr,
    fallback: false,
  }
}

export default BlogPost