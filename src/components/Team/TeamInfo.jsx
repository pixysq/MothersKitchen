import React from 'react';
import BorderDiv from '../custom/BorderDiv';
import ImageBox from '../custom/ImageBox';
import TeamInfoCard from './TeamInfoCard';
import {
  Shivani,
  TeamHeading,
  bhavna,
  joshua,
  mrunalini,
  satyam,
  shifali,
  shrikumar,
  stuart,
  abhishek,
} from '../../assets';

const teamDetails = [
  {
    name: 'Joshua Morgolis',
    desc: 'Professor of Business Administration at <strong>Harvard Business School</strong>, Business Administration',
    image: joshua,
  },
  {
    name: 'Stuart Gates',
    desc: 'The Seasoned Grocer | College for the Distributive Trades Management. Ex Harrods. Over 30 years into food industry',
    image: stuart,
  },
  {
    name: 'Bhawna Agarwal',
    desc: 'Country Head HPE, CEO at NDTV Gadget360.com, Harvard Business School, Co-Founder of OYO',
    image: bhavna,
  },
  {
    name: 'Satyam Kumar',
    desc: 'Director & Head- City Group Global Markets India',
    image: satyam,
  },
  {
    name: 'Mrunalini Deshmukh',
    desc: 'Lawyer (22 Yrs Exp). Experienced in Handling Most high-profile cases',
    image: mrunalini,
  },
  {
    name: 'Shrikumar Unnithan',
    desc: 'General Manager- BharatBenz & Mercedes Benz',
    image: shrikumar,
  },
  {
    name: 'Shifali Singh',
    desc: 'Director at RP-Sanjiv Goenka Group SVP – Operations & E commerce : Apparel Ex Vice President : International Brands at Flipkart',
    image: shifali,
  },
  {
    name: 'Abhishek Singh',
    desc: 'Tata Tea & Tata Coffee ( Now Tata Global Beverage):2000 to 2009 <br/> <br/>  2009 till date : Britannia Industries Ltd.',
    image: abhishek,
  },
];

const TeamInfo = () => {
  return (
    <div>
      <div className="relative mx-auto mb-[0.3px] w-[90%] rounded-b-3xl rounded-t-3xl border-b-[6px] border-l-4 border-r-[12px] border-t-4 border-black bg-[#BB48CE] px-5 py-4 text-center font-lexend text-[10px] font-semibold text-white shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-b-2xl before:rounded-t-2xl before:rounded-tl-2xl before:border-[3px] before:border-white md:mb-0 md:w-[80%] md:rounded-b-none md:border-b-0 md:px-20 md:text-[10px] md:text-sm md:before:rounded-b-none md:before:border-b-0">
        We are proud to introduce you to the members of our board, a group of dedicated individuals who share a passion
        for our mission and work tirelessly to advance it.
      </div>
      <BorderDiv className="bg-[#D07D41] p-5 md:p-10">
        <div className="mt-3 flex justify-center md:mt-5">
          <img src={TeamHeading} alt="heading" className="absolute -mt-2 h-10 md:-mt-5 md:h-20" />
          <h3 className="black-shadow z-10 text-center font-lexend text-sm font-semibold text-white md:text-3xl">
            Executive Team
          </h3>
        </div>
        <div className="mx-10 mt-10 grid grid-cols-1 gap-8 md:mx-10 md:gap-10 lg:mx-40 lg:gap-20">
          <div className="flex flex-1 flex-col items-center font-gluten text-white lg:p-10">
            <ImageBox image={Shivani} className={'!rounded-sm lg:!w-80'} />
            <h5 className="mt-4 text-center text-sm md:text-3xl">SHIVANI MALIK</h5>
            <p className="my-1 text-[10px] md:my-3 md:text-2xl">Founder & CEO</p>
            <p className="text-center font-lexend text-[8px] font-light md:text-sm lg:text-lg">
              Founder Director - Infomerics Rating, with over 25+ years of experience in food and other verticals.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <img src={TeamHeading} alt="heading" className="absolute -mt-2 h-10 md:-mt-5 md:h-20" />
          <h3 className="black-shadow z-10 text-center font-lexend text-sm font-semibold text-white md:ml-5 md:text-3xl">
            Advisory Board
          </h3>
        </div>
        <div className="hidden md:block">
          <div className="mt-7 grid grid-cols-3 gap-5 md:m-10 md:grid-cols-4 md:gap-x-16 md:gap-y-10">
            {teamDetails.map((teamMem) => (
              <TeamInfoCard key={teamMem.name} {...teamMem} />
            ))}
          </div>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-7 md:hidden">
          {teamDetails.map((teamMem) => (
            <TeamInfoCard key={teamMem.name} {...teamMem} />
          ))}
        </div>
      </BorderDiv>
    </div>
  );
};

export default TeamInfo;
