import type { NewArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query NewArticlesQuery {
    Articles: posts {
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

export const Success = ({ Articles }: CellSuccessProps<NewArticlesQuery>) => {
  return (
    <ul>
      {Articles.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
