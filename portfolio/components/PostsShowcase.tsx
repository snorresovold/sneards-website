import React from 'react'
import PostCard from './PostCard'

function PostsList() {
  return (
    <div>
        <section className="dark:text-white dark:bg-gray-900 bg-white text-gray-900">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                <p className="mt-4 dark:text-gray-300 text-gray-900">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                    saepe laborum.
                </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">

                </div>

                <div className="mt-12 text-center">
                <a
                    className="inline-flex items-center px-8 py-3 mt-8 dark:text-white text-gray-900 bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent active:text-indigo-500 focus:outline-none focus:ring"
                    href="/Projects"
                >
                    <span className="text-sm font-medium"> Prosjekter </span>

                    <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </a>
                </div>
            </div>
            </section>
    </div>
  )
}

export default PostsList


