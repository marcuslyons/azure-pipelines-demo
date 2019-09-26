import React from 'react'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO
      title="Travis Loves This"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>All The Pretty Paintings</h1>
    <ProductGrid />
  </>
)

export default IndexPage
