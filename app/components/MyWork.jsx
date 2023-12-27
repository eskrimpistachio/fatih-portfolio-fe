import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const data = [
  {
    id: 1,
    img: '/instantkit.png',
    title: 'INSTANT KIT',
    desc: 'IT infrastructure development services and UI Library website. We can build UI design, illustration design, website development, and database design services. UI Library that we sell is icons, illustrations, website components, and website templates based on subscriptions. ',
    techstack: 'Tech Stack: React.js, Tailwind CSS, Redux, Nest.js, EC2 AWS',
    link: 'https://instantkit.co/',
  },
  {
    id: 2,
    img: '/homeinfusion.png',
    title: 'HOME INFUSION',
    desc: 'A medical service website that provides medical service calls to patients homes.',
    techstack: 'Tech Stack: Next.js, Typescript, Tailwind CSS, Vercel',
    link: 'https://homeinfusionclinic.com/',
  },
  {
    id: 3,
    img: '/rentapp.png',
    title: 'RENT APP',
    desc: 'Simple full-stack website for renting a car',
    techstack:
      'Tech Stack: React.js, Typescript, Node.js, Vercel, Firebase, Docker, EC2, Elastic Load Balancer',
    link: 'https://github.com/eskrimpistachio/rentapp-docker',
  },
  {
    id: 4,
    img: '/wealthease.png',
    title: 'WEALTH EASE',
    desc: 'simple bank website that can send dummy money, add dummy money, view mutations, and add accounts.',
    techstack: 'Tech Stack: PHP, Laravel, SQL',
    link: 'https://github.com/eskrimpistachio/WealthEase',
  },
];

export default function MyWork() {
  return (
    <>
      <div id="projects" className="py-16">
        <div className="flex flex-col-reverse md:flex-row gap-4 satoshi">
          <p className="py-2 md:w-[10%]">More experience I have worked on</p>
          <h1 className="font-bold text-7xl">
            MY <span className="playfair font-normal">PROJECTS</span>
          </h1>
        </div>
        <div className="my-16 flex flex-col gap-24">
          {data.map((d) =>
            d.id % 2 != 0 ? (
              <>
                <div className="flex flex-col md:flex-row gap-8" key={d.id}>
                  <Image
                    src={d.img}
                    width={600}
                    height={400}
                    alt="missing img"
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col gap-10 satoshi">
                    <div>
                      {' '}
                      <h1 className="text-6xl playfair">{d.title}</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                      {' '}
                      <p>{d.desc}</p>
                      <h6 className="font-bold">{d.techstack}</h6>
                      <a
                        className="flex flex-row playfair gap-2 hover:font-bold"
                        href={d.link}
                      >
                        <h6>SEE DETAILS</h6>
                        <FaArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex flex-col md:flex-row-reverse gap-8"
                  key={d.id}
                >
                  <Image
                    src={d.img}
                    width={700}
                    height={500}
                    alt="missing img"
                    className="rounded-2xl"
                  />
                  <div className="flex flex-col gap-10 satoshi">
                    <div className="flex md:justify-center">
                      <h1 className="md:text-center text-6xl playfair w-1/2 justify-center">
                        {d.title}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p>{d.desc}</p>
                      <h6 className="font-bold">{d.techstack}</h6>
                      <a
                        className="flex flex-row playfair gap-2 hover:font-bold"
                        href={d.link}
                      >
                        <h6>SEE DETAILS</h6>
                        <FaArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
