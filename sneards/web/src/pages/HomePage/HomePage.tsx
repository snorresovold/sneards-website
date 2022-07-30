import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import Navbar from 'src/components/Navbar/Navbar'

const HomepagePage = () => {
  return (
    <>
      <MetaTags title="Homepage" description="Homepage page" />
      <Navbar />
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Sneards Blog.

              <span className="sm:block">
                IT Development.
             </span>

              <span className='sm:block'>
                New posts.
              </span>

            </h1>
            <ArticlesCell />
          </div>
        </div>
      </section>


      <section className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Sneards Blog statistics
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
            laborum labore provident impedit esse recusandae facere libero harum
            sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Youtube subs
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                4.8m
              </dd>
            </div>

            <div
              className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Videos
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
            </div>

            <div
              className="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Blog posts
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>


    </>
  )
}

export default HomepagePage
