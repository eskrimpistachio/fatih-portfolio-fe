import { TiStarburst } from 'react-icons/ti';

const workexp = [
  {
    id: 1,
    startDate: 'DEC 2022',
    endDate: 'MAR 2023',
    role: 'Frontend Developer Intern at Kawan Kerja',
    desc: [
      'Develop an Online Course Platform that suits the requirements of clients with 2500+ users and ensures all functionality integrate seamlessly.',
      'Utilized Github and Jira as a primary collaboration tool, completing all tasks assigned.',
      'Collaborated with Backend Developers and System Analysts to built an Online Course Platform that is intuitive, functional, and meets client requirements, profitability 5000+ visits per month using React, Golang, Typescript, MySQL, and Tailwind CSS.',
    ],
  },
];

const orgexp = [
  {
    id: 1,
    startDate: 'JAN 2023',
    endDate: 'DEC 2023',
    role: 'Vice Chief of IT Department at BEM FILKOM UB ',
    desc: [
      'Led IT Department to build a website for BEM FILKOM UB.',
      'Create requirements, determine the tech stack, and assign tasks for the IT Department Staff of BEM FILKOM UB.',
      'Develop an IT Partnership website to help people build website infrastructure such as UI Design, UI Implementation, and Design database architecture. We increased the number of customers by 5000+ for clients from the healthcare sector and social organizations.',
      'Develop a website for registration needs for events and committees on campus, thereby increasing the number of registrants by 55%+ compared not using the website platform.',
      'Develop an Administrative System website for the administrative needs of BEM FILKOM that contributed 95% to the effectiveness of time and administrative management compared to without using website platform.',
    ],
  },
  {
    id: 2,
    startDate: 'FEB 2022',
    endDate: 'DEC 2022',
    role: 'IT Development Staff at BEM FILKOM UB',
    desc: [
      'Develop and maintain the BEM FILKOM Aryakarsa website with 800+ users using React.js, Node.js, Golang, Tailwind CSS, andSupabase.',
      'Develop a website for open recruitment events and committees on campus, thereby increasing the number of registrants by 55%+ compared to not using the website platform.',
      'Build SJW FILKOM website to protect against bullying and sexual violence that take place on campus. It has visitors from 100+ users every month and has reduced the number of bullying and sexual violence incidents by 35%.',
    ],
  },
  {
    id: 3,
    startDate: 'MAY 2022',
    endDate: 'DEC 2022',
    role: 'Vice Chief of IT Development Department at Hology UB',
    desc: [
      'Led the IT Development Department to develop and maintain websites for event needs using Scrum and Agile methods.',
      'Create requirements and choose the tech stack to use and assign task to each IT Development Department staff.',
      'Develop Hology website for national seminars and competitions with 1000+ users and 3000+ visitors on a monthly basis using React.js, Sass, Tailwind CSS, Node.js, and MySQL.',
    ],
  },
  {
    id: 4,
    startDate: 'OCT 2021',
    endDate: 'JAN 2022',
    role: 'IT Development Staff Intern at BEM FILKOM UB',
    desc: [
      'Learn basic Typescript and Go.',
      'Redesign UI Application from Google Play Store',
      'Build Simple Portofolio Website using HTML and Tailwind CSS',
    ],
  },
];

export default function Experience() {
  return (
    <>
      <div id="experience" className="satoshi pb-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center pb-8">
          WORK <span className="playfair font-normal">EXPERIENCE</span>
        </h1>
        {workexp.map((w) => (
          <div
            className="flex flex-col gap-4 md:gap:0 md:flex-row justify-between py-16 border-b-2 border-[#A6A6A6]"
            key={w.id}
          >
            <div className="flex flex-row gap-2">
              <TiStarburst className="text-lg md:text-xl" />
              <div className="flex flex-row gap-2 text-2xl md:text-4xl playfair">
                <h1>{w.startDate}</h1>
                <h1>-</h1>
                <h1>{w.endDate}</h1>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-8">
              <h3 className="font-medium">{w.role}</h3>
              <ol className="text-[#A6A6A6] list-disc pl-4 flex flex-col gap-2">
                {w.desc.map((d) => (
                  <li key={d.id}>{d}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="satoshi pb-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center pb-8">
          ORGANIZATION <span className="playfair font-normal">EXPERIENCE</span>
        </h1>
        {orgexp.map((w) => (
          <div
            className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between py-16 border-b-2 border-[#A6A6A6]"
            key={w.id}
          >
            <div className="flex flex-row gap-2">
              <TiStarburst className="text-lg md:text-xl" />
              <div className="flex flex-row gap-2 text-2xl md:text-4xl playfair">
                <h1>{w.startDate}</h1>
                <h1>-</h1>
                <h1>{w.endDate}</h1>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-8">
              <h3 className="font-medium">{w.role}</h3>
              <ol className="text-[#A6A6A6] list-disc pl-4 flex flex-col gap-2">
                {w.desc.map((d) => (
                  <li key={d.id}>{d}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
