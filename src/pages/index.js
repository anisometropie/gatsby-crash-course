import React from 'react'
import { Container, FeatureImage, Content, ContentCard } from 'components'

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22"
          title="Michou"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci, orci in congue cursus nulla tincidunt facilisi."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
