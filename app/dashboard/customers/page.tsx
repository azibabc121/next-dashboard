import React from 'react'

const Page = ({ searchParams }: { searchParams?: { query?: string, page?: string } }) => {
  const query = searchParams?.query
  const page = searchParams?.page

  console.log(`Query : ${query}`)
  console.log(`Page : ${page}`)
  return (
    <div>customers page</div>
  )
}

export default Page