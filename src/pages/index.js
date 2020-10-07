import React from "react"
import logo from "./../images/logo.svg"

import { Link } from "gatsby"

import SEO from "../components/seo"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

// TODO: Add font for blog pages - https://fonts.google.com/specimen/Domine

const CTA = () => {
  return (
    <div class="bg-gray-900">
      <div class="max-w-screen-xl mx-auto py-12 px-6 sm:px-10 text-center">
        <div className="flex flex-col items-center justify-center mt-0 sm:mt-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Get notified about new content?
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Sign up for the newsletter and receive it straight in to your inbox.
          </p>
        </div>
        <div class="sm:flex items-center justify-center mt-8">
          <form class="sm:flex">
            <input
              aria-label="First name"
              type="name"
              required
              class="w-full appearance-none sm:w-2/3 px-3 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Your first name"
            />
            <input
              aria-label="Email address"
              type="email"
              required
              class="w-full mt-2 sm:mt-0 ml-0 sm:ml-3 appearance-none sm:w-full px-3 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Your email"
            />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:bg-orange-400 focus:border-3 focus:border-orange-100 transition duration-150 ease-in-out">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-sm leading-5 text-gray-300 opacity-50">
          <span>{"Make the email templates go <brrrrrr>"}</span>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="relative px-4 pb-20 sm:px-6 lg:pb-28 lg:px-8">
      <div className="fixed top-0 left-0 z-50 w-full px-4 pb-20 sm:px-6 lg:pb-28 lg:px-8">
        <div className="flex justify-start mx-auto max-w-7xl">
          <div className="block" />
          <img
            className="relative top-0 left-0 w-16 h-16 mt-6 bg-white border-4 border-white rounded-full shadow-lg"
            src={logo}
          />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 w-full pb-8 sm:pb-16 md:pb-10">
          <nav
            className="relative flex items-center justify-end w-full text-gray-900 sm:h-10"
            style={{
              height: "75px",
            }}
          >
            <div className="hidden md:block">
              <a
                href="#"
                className="font-medium transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                Learn
              </a>
              <a
                href="#"
                className="ml-10 font-medium transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                Hire
              </a>
              <a
                href="#"
                className="ml-10 font-medium transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                Courses
              </a>
            </div>
          </nav>

          <div className="mx-auto mt-24 sm:px-6 lg:px-8 xl:mt-36">
            <div className="flex justify-center">
              <h2 className="inline-block text-3xl font-extrabold leading-10 tracking-normal text-left text-gray-900 transition-all sm:text-4xl md:text-5xl">
                Hi, I'm <span className="text-orange-500">Aiden</span>. <br /> I
                help front-end developers level up
                <br className="hidden lg:block" /> their{" "}
                <span className="text-orange-500">knowledge</span> and{" "}
                <span className="text-orange-500">skills</span>
                <br className="hidden lg:block" /> through deep understanding
                <span className="text-orange-500">.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogSection = () => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span className="mx-1 text-orange-500">&middot;</span>
            Learn
            <span className="mx-1 text-orange-500">&middot;</span>
          </h2>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <span className="inline-block w-4 h-1 bg-orange-500" />
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    Artikel Titel
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto accusantium praesentium eius, ut atque fuga
                    culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="flex text-sm leading-5 text-gray-500">
                  <span className="mx-1 text-orange-500">&middot;</span>
                  <span>6 min read</span>
                  <span className="mx-1 text-orange-500">&middot;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <span className="inline-block w-4 h-1 bg-orange-500" />
                <a href="#" className="block">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">
                    How to use search engine optimization to drive sales
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="flex text-sm leading-5 text-gray-500">
                  <span className="mx-1 text-orange-500">&middot;</span>
                  <span>6 min read</span>
                  <span className="mx-1 text-orange-500">&middot;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <span className="inline-block w-4 h-1 bg-orange-500" />
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                    Improve your customer experience
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="flex text-sm leading-5 text-gray-500">
                  <span className="mx-1 text-orange-500">&middot;</span>
                  <span>6 min read</span>
                  <span className="mx-1 text-orange-500">&middot;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  const { title, siteUrl } = useSiteMetadata()
  return (
    <>
      <SEO title="Home" />
      <Header />
      <BlogSection />
      <CTA />
      <Footer />
    </>
  )
}
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8">
          <a
            href="https://twitter.com/aidenbuis"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
        <div className="mt-8">
          <p className="text-base leading-6 text-center text-gray-400">
            &copy; 2020 Aiden Buis. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
