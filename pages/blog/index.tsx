import WorkInProgress from "../../components/WIP"

function AllBlogPosts({ posts }) {
  return <WorkInProgress name={"The blog"}></WorkInProgress>
}

export async function getStaticProps() {
  return {
    props: {
      posts: []
    }
  }
}

export default AllBlogPosts