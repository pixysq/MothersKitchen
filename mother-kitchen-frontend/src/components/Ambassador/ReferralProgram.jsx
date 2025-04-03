import React from 'react'
import Button from '../custom/Button'
const ReferralProgram = () => {
  return (
    <>
      <div className="m-5 rounded-3xl bg-[#FBD68C] p-4 font-lexend text-black md:m-20 md:p-8">
        {/* Heading Section */}
        <h2 className="mb-2 font-gluten text-2xl font-bold md:text-2xl">Referral Program</h2>
        <p className="mb-6 font-lexend text-base md:text-sm">Turn your influence into earnings!</p>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* 
            colgroup for column widths + vertical line on the first column 
            (border-r-2 border-black).
          */}
            <colgroup>
              <col className="w-1/2 border-r-2 border-black md:w-1/3" />
              <col className="w-1/2 md:w-2/3" />
            </colgroup>

            <thead>
              {/* 
              Top & bottom border on the header row. 
              This creates the horizontal line across the top before the columns. 
            */}
              <tr className="border-b-2 border-t-2 border-black">
                <th className="px-4 py-4 text-left font-lexend font-semibold">Referrals</th>
                <th className="px-4 py-4 text-left font-lexend font-semibold">Rewards</th>
              </tr>
            </thead>

            <tbody>
              {/* For Retail Orders */}
              <tr className="border-b-2 font-bold border-black ">
                <td className="px-4 py-10 align-top font-lexend font-bold">For Retail Orders:</td>
                <td className="px-4 py-3 align-top">
                  <ul className="list-inside list-disc space-y-6 font-lexend">
                    <li>Earn 15% commission on every purchase made through your referral link.</li>
                    <li>Unlimited earning potential—refer as many people as you like!</li>
                  </ul>
                </td>
              </tr>

              {/* For Corporate Orders (Bulk Purchases) */}
              <tr className="border-b-2 font-bold border-black">
                <td className="px-4 py-10 align-top font-lexend font-bold">For Corporate Orders (Bulk Purchases):</td>
                <td className="px-4 py-3 align-top">
                  <ul className="list-inside list-disc  space-y-8 font-lexend">
                    <li>Enjoy customized incentives based on order size and volume.</li>
                    <li>Higher order values mean higher rewards!</li>
                    <li>
                      Special partnerships available for event planners, gifting specialists, and bulk purchasers.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Bonus Perks */}
              <tr className="border-b-2 font-bold border-black">
                <td className="px-4 py-10 align-top font-lexend font-semibold ">Bonus Perks:</td>
                <td className="px-4 py-3 align-top">
                  <ul className="list-inside list-disc  space-y-8 font-lexend">
                    <li>Monthly payouts directly to your account.</li>
                    <li>Performance-based bonuses for top ambassadors.</li>
                    <li>Personal dashboard to track your referrals, sales, and earnings.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* how to join */}
        <p className="mb-5 mt-5 font-gluten text-xl font-bold text-[#000000] ">How to Join</p>

        <p className="mb-5 font-lexend text-sm text-black md:text-base ">
          <span className="font-bold">1. Apply – </span>Fill out our Ambassador Application Form with details about your
          audience and passion for food.
        </p>

        <p className="mb-5 font-lexend text-sm  text-black md:text-base ">
          <span className="font-bold">2. Get Approved – </span>Our team will review your application and send you a
          welcome kit if selected.
        </p>

        <p className="mb-5  font-lexend text-sm text-black md:text-base ">
          <span className="font-bold">3. Start Earning – </span>Share your unique referral link, promote Mother’s
          Kitchen products, and watch your earnings grow!
        </p>

        {/* Ambassador Expectations */}
        <div className="mt-10  rounded-xl bg-[#FEC66B] pb-8 pl-4 pr-4 pt-8">
          <p className="font-gluten text-xl font-extrabold text-black">Ambassador Expectations</p>
          <p className="mt-5 font-lexend text-sm">
            {' '}
            <span className="font-bold">Content Creation: </span> Share authentic posts, reels, and videos featuring
            Mother's Kitchen products on your social media, blogs, or YouTube.
          </p>

          <p className="mt-5 font-lexend text-sm">
            <span className="font-bold">Engagement: </span> Interact with your audience, answer questions, and promote
            our brand values.
          </p>

          <p className="mt-5 font-lexend text-sm">
            <span className="font-bold">Feedback: </span> Share insights and suggestions to help us improve our products
            and services.
          </p>
        </div>

        {/*join */}
        <p className="mt-10 md:pl-10 md:pr-10 pl-5 pr-5 text-center font-gluten text-2xl font-[900] text-[#A11506] ">
          Join today and turn your love for homemade flavors into a rewarding experience!
        </p>

        <div className='flex justify-center mt-5 mb-5' >
          <Button className="justify-center  !bg-[#8E1736] !py-[11px] font-lexend text-sm font-semibold hover:!bg-green-base">
            Join us Today
          </Button>
        </div>
        <p className="text-center font-lexend mb-10 text-sm text-[#181818]">
          Note: Open to residents of India. Terms and conditions apply.
        </p>
      </div>
    </>
  )
}

export default ReferralProgram
