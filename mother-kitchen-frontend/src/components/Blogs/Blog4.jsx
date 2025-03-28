import React from 'react'
import headBlog4 from '../../assets/blogs/headBlog4.png'
import BlogHeadCard from './BlogHeadCard'
import LastSection from '../LastSection'
import forwardIcon from '../../assets/blogs/forwardIcon.png'
import headBlog8 from '../../assets/blogs/headBlog8.png'
import headBlog5 from '../../assets/blogs/headBlog5.png'
import headBlog6 from '../../assets/blogs/headBlog6.png'
import { Link } from 'react-router-dom'

const blogData = [
  {
    title: 'The Daily Elixir: Why You Need Mother’s Kitchen Sanjeevni Haldi Drink',
    image: headBlog8,
    description: `Some drinks refresh you. Some comfort you. And then there are drinks...`,
    link: '/blog8',
    date: 'March 21, 2025',
  },
  {
    title: 'Chocolate That Heals: The Power of Mother’s Kitchen Sanjivani Haldi Chocolates',
    image: headBlog5,
    description: `Chocolate is a guilty pleasure. Or at least, that’s what we’ve been...`,
    link: '/blog5',
    date: 'March 21, 2025',
  },
  {
    title: 'The Superfood Laddoo: Why Mother’s Kitchen Sanjivani Haldi Laddoo is a Must-Have',
    image: headBlog6,
    description: `There’s something about a laddoo that feels like home. Maybe...`,
    link: '/blog6',
    date: 'March 21, 2025',
  },
]

function Blog4() {
  return (
    <div>
      <BlogHeadCard imageSrc={headBlog4} heading="Guilt-Free Snacking: The Rise of Gluten-Free and Vegan Cookies" />

      {/* read more */}
      <div style={{ borderTop: '4px dotted black' }} className="mb-10 ml-10 mr-10 md:mb-20 md:ml-20 md:mr-20 "></div>
      <h2 className="white-stroke white-shadow mb-10  ml-10  font-gluten text-2xl font-black text-red-base md:ml-20 md:text-3xl">
        Blogs & <span className="black-shadow font-lexend text-white">Insights</span>
      </h2>

      <div className="ml-20 mr-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        {blogData.map((blog) => (
          <article
            key={blog.title}
            className="border-lg overflow-hidden rounded-2xl border border-b-8 border-l-4 border-r-8 border-t-4 border-black bg-[#7561D9] shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="h-full overflow-hidden rounded-2xl border border-4 border-white">
              {/* Wrap the image and button in a relative container */}
              <div className="relative m-4 overflow-hidden rounded-lg">
                <img src={blog.image} alt={blog.title} className="h-50 w-full object-cover" />
                {/* Position the button absolutely at the bottom right */}
                <div className="absolute bottom-2 right-2 flex  w-fit rounded-lg border-[2px] border-black bg-[#039860] p-1">
                  <Link to={blog.link} onClick={() => onscroll(0, 0)} className="flex justify-center ">
                    <img src={forwardIcon} className="w-3/4 " alt="Go forward" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col pl-4 pr-4 text-white">
                <h2 className="mb-2 font-gluten text-lg font-semibold leading-tight">{blog.title}</h2>
                <p className="whitespace-pre-line font-lexend text-xs leading-tight">{blog.description}</p>
                <p className="mb-2 mt-2 font-lexend text-xs text-[#FFFFFF80]">{blog.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <LastSection />
    </div>
  )
}

export default Blog4
