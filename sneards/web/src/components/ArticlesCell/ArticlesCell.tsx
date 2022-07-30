import Article from 'src/components/Article'

import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">

      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}