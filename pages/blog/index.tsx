import WorkInProgress from "../../components/WorkInProgress"

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