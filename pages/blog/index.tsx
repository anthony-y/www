function AllBlogPosts({ posts }) {
  return <section className="container mx-auto flex justify-center items-center p-12 h-[100vh]">
    <article className="my-auto flex gap-6 flex-col">
      <h1 className="text-7xl">The blog isn't ready just yet 😔</h1>
      <p>You can watch <a href="https://github.com/anthony-y/www"><span className="underline">the repository</span></a> to see when it will be, though.</p>
    </article>
  </section>
}

export async function getStaticProps() {
  return {
    props: {
      posts: []
    }
  }
}

export default AllBlogPosts