import Link from "next/link"
import WorkInProgress from "../../components/WorkInProgress"
import { BlogPost, getAllBlogPosts } from '../../lib/blog'

function AllBlogPosts({ posts }: { posts: BlogPost[] }) {
  return <WorkInProgress name="The blog"/>

  return <section className="dark:bg-dark h-[100vh]">
    <ul>
      {posts.map((p) => <div className="dark:text-white">
        <li>
          <Link href={`/blog/${p.slug}`}>{p.title}</Link>
        </li>
      </div>)}
    </ul>
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