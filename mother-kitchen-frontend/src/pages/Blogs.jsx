import React from 'react'
import headBlog1 from '../assets/blogs/headBlog1.png'
import headBlog2 from '../assets/blogs/headBlog2.png'
import headBlog3 from '../assets/blogs/headBlog3.png'
import headBlog4 from '../assets/blogs/headBlog4.png'
import headBlog5 from '../assets/blogs/headBlog5.png'
import headBlog6 from '../assets/blogs/headBlog6.png'
import headBlog7 from '../assets/blogs/headBlog7.png'
import headBlog8 from '../assets/blogs/headBlog8.png'
import forwardIcon from '../assets/blogs/forwardIcon.png'
import { Link } from 'react-router-dom'
import LastSection from '../components/LastSection'

const blogData = [
  {
    title: 'Packaged Food Is Broken. Mother’s Kitchen Is Fixing It.',
    image: headBlog1,
    description: `Let’s be honest.
Most packaged food is a trade-off.
You either get...`,
    link: '/blog1',
    date: 'January 18, 2025',
  },
  {
    title: "From Ashes to Nourishment: The Mother's Kitchen Story",
    image: headBlog2,
    description: `In 2018, Shivani Malik faced a devastating setback—a fire that reduced her previous venture to ashes...`,
    link: '/blog2',
    date: 'January 15, 2025',
  },
  {
    title: 'Rediscovering Traditional Sweets: The Health Benefits of Turmeric Barfi',
    image: headBlog3,
    description: `There was a time when sweets weren’t just about indulgence...`,
    link: '/blog3',
    date: 'March 21, 2025',
  },
  {
    title: 'Guilt-Free Snacking: The Rise of Gluten-Free and Vegan Cookies',
    image: headBlog4,
    description: `Somewhere between chasing deadlines and juggling responsibilities...`,
    link: '/blog4',
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
  {
    title: 'Beyond Just a Side: The Magic of Mother’s Kitchen Pickles',
    image: headBlog7,
    description: `Pickles aren’t just condiments.
They’re stories. Memories. A legacy passed down...`,
    link: '/blog7',
    date: 'March 21, 2025',
  },
  {
    title: 'The Daily Elixir: Why You Need Mother’s Kitchen Sanjeevni Haldi Drink',
    image: headBlog8,
    description: `Some drinks refresh you. Some comfort you. And then there are drinks...`,
    link: '/blog8',
    date: 'March 21, 2025',
  },
]
function BlogGrid() {
  return (
    <div className="min-h-screen">
      {/* heading */}
      <h2 className="white-stroke white-shadow   text-center font-gluten text-2xl font-black text-red-base md:my-20 md:text-5xl">
        Blogs & <span className="black-shadow font-lexend text-white">Insights</span>
      </h2>

      <div>
        {/* Main Content */}
        <main className="pl-5 pr-5 pt-5 md:pl-20 md:pr-20 md:pt-10 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
        </main>
      </div>
      <LastSection />
    </div>
  )
}

export default BlogGrid
