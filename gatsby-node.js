exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  // pagination

  const postsPerPage = 3
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve('./src/templates/allPosts.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  // create blog posts
  data.allMdx.edges.forEach(edge => {
    const {
      frontmatter: { slug },
      id
    } = edge.node
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id }
    })
  })
}
