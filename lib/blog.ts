import { loadFront } from 'yaml-front-matter'
import { marked } from 'marked'

export type BlogPost = {
  title: string
  slug: string
  brief: string
  sanitizedHtml: string
}

interface GitHubContentsRes {
  name: string
  download_url: string
  type: string
}

export async function getAllBlogPosts() {
  const res = await fetch("https://api.github.com/repos/anthony-y/blog/contents", {
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  })

  const allContentsJson = await res.json() as GitHubContentsRes[]

  let output = new Array<BlogPost>()
    
  for (let i = 0; i < allContentsJson.length; i++) {
    let content = allContentsJson[i]

    const fileDataRes = await fetch(content.download_url)
    const fileData    = await fileDataRes.text()

    const parsedFileData = loadFront(fileData)

    const sanitizedHtml = marked.parse(parsedFileData.__content)
    
    output.push({
      title: parsedFileData.title,
      slug: parsedFileData.slug,
      brief: parsedFileData.brief,
      sanitizedHtml: sanitizedHtml
    })
  }

  return output
}