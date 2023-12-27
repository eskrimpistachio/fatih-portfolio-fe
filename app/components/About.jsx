'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const texts =
  'Full Stack Developer with 2+ years experience in website development. I led events and organizations on my campus for building a website with 1000+ users and 3000+ visits every month. \n I help software house develop and maintain web applications for  for clients like Healthcare websites, Online Course platforms, and Social Organization websites to profitably add 5000+ total users. \n As a versatile full stack developer, I bring proficiency in an extensive range of technical skills crucial for web development and software engineering.\n';

const skills = [
  {
    title: 'Programming Language',
    desc: 'Javascript, Typescript, Java, Python, C++, PHP',
  },
  {
    title: 'Frontend',
    desc: ' HTML, CSS, JQuery, React.js, Next.js Tailwind, Laravel, SASS, Bootstrap',
  },
  {
    title: 'Backend',
    desc: 'Node.js, Express.js, SQL, Supabase, MongoDB, Firebase',
  },
  {
    title: 'Tools',
    desc: 'Docker, Kubernetes, Github, Git, GCP, AWS Vercel, Jira, Linux Ubuntu, CentOS, MS Office',
  },
];

const text = texts.split('\n');

export default function About() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-16 md:w-3/4 satoshi">
        <div className="flex flex-col gap-4 text-justify">
          {show ? (
            <>
              {text.map((t) => (
                <p>{t}</p>
              ))}
              <div className="flex flex-col gap-8 md:gap-2">
                {skills.map((s) => (
                  <div className="flex flex-row text-left flex-wrap gap-2">
                    <h1 className="font-bold">{s.title} : </h1>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            text[0]
          )}
        </div>
        <button
          className={`transition-all duration-300 ${!show ? '' : 'hidden'}`}
          onClick={() => {
            setShow(!show);
          }}
        >
          {!show ? (
            <div className="flex flex-row playfair gap-2 hover:font-bold">
              <h6>READ MORE</h6>
              <FaArrowRight className="text-lg" />
            </div>
          ) : (
            ' '
          )}
        </button>
      </div>
    </>
  );
}
