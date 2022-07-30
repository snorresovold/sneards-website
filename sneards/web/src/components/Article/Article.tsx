import { Link, routes } from '@redwoodjs/router'

import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <div>
        <li className="swiper-slide">
          <a
            href="/product/smart-watch"
            className="block"
          >
            <div>
              <p className="text-xs text-indigo-500">
                placeholder
              </p>

              <h5 className="font-bold">
                {article.title}

              </h5>
            </div>

            <p className="mt-1 text-sm font-medium text-gray-700">
              {article.createdAt}
            </p>
          </a>
        </li>

       
    </div>
  )
}

export default Article