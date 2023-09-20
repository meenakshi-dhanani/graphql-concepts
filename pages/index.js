import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GraphQL Concepts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GraphQL Concepts" />
        <p className="description">
        These concepts are the fundamental building blocks of modern GraphQL APIs. Many of them come from the GraphQL Specification, tagged spec, and the others don’t, tagged non-spec. Breaking down complex technology structures into singular concepts is an important technique for simplifying technology, making it more accessible to a wider audience, and improving communication and collaboration across the technology community.
        </p>
        <p className='cta'>          
        Collect 3 unique concept cards at the GraphQL Conf to claim some cool Postman swag!
        </p>
        <iframe className="airtable-embed" 
        src="https://airtable.com/embed/appHEZBQajKXcPlrg/shr18BuXdjn4AdZIn?backgroundColor=red&viewControls=on"
        style={{'background': 'transparent', 'border': '1px solid #ccc'}}>
        </iframe>
        <p className="description">
          Share your feedback with us by creating an issue on <a href='https://github.com/postman-open-technologies/graphql-concepts'>https://github.com/postman-open-technologies/graphql-concepts</a>
        </p>
      </main>
    </div>
  )
}
