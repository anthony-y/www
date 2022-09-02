import Link from "next/link"
import WorkInProgress from "../../components/WorkInProgress"
import { BlogPost, getAllBlogPosts } from '../../lib/blog'

function PostCard({ post }: { post: BlogPost} ) {
  return <div className="rounded-lg flex flex-col gap-4 items-center border border-1 border-gray-200 p-8 shadow-sm">
    <h1 className="text-3xl"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h1>
    <p className="text-gray-400">
      {post.brief}
    </p>
  </div>
}

function AllBlogPosts({ posts }: { posts: BlogPost[] }) {
  return <section className="dark:bg-dark h-[100vh] flex items-center flex-col pt-12">

    <h1 className="text-6xl dark:text-white">Blog Posts</h1>

    <div className="flex justify-center pt-12">
      <ul>
        {posts.map((p,i) => <div className="dark:text-white">
          <li>
            <PostCard post={p}></PostCard>
          </li>
        </div>)}
      </ul>
    </div>
  </section>
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllBlogPosts()
    }
  }
}

export default AllBlogPosts