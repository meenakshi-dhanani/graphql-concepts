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
          Collect 5 unique concept cards at the GraphQL Conf to claim some cool Postman swag! 
        </p>
        <iframe className="airtable-embed" 
        src="https://airtable.com/embed/appHEZBQajKXcPlrg/shr18BuXdjn4AdZIn?backgroundColor=red&viewControls=on"
        style={{'background': 'transparent', 'border': '1px solid #ccc'}}>
        </iframe>
        <p className="description">
          Share your feedback with us on <a href=''>#graphql-concepts</a> Discord channel 
        </p>
      </main>
    </div>
  )
}
