import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomepagePage = () => {
  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Sneards Blog.

              <span className="sm:block">
                IT Development.
              </span>

              <span className='sm:block'>
                New posts
              </span>

            </h1>
            <ArticlesCell />
          </div>
        </div>
      </section>

    </>
  )
}

export default HomepagePage
