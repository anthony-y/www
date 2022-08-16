function BlogPost({ post }) {
  return <>
    <div className="container mx-auto flex justify-center items-center p-20">
      <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{__html: post }}></div>
    </div>
  </>
}

export async function getStaticProps({ params }) {
  
}

export default BlogPost