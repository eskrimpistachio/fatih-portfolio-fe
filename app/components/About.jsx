'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const texts =
  'Tech-savvy problem solver with 1 year of hands- on internship experience combining business sense, data insight, and software development skills \n Proven track record as led automation initiatives that achieved up to 88% time savings and reduced workflow processing time by 50%. Built business intelligence dashboards that helped reduce market complaints to under 1% and accelerated reporting processes by 70%. \n Developed scalable software platforms to enhance the digital experience for education clients. Passionate about leveraging technical expertise and data-driven insights to deliver innovative, high-impact solutions. I help companies bridge the gap between business operations and digital transformation by building systems that save time, enhance decision-making, and improve product quality \n';

const skills = [
  {
    title: 'Programming Language',
    desc: 'SQL, Python, R, Javascript, Java, HTML, CSS, React',
  },
  {
    title: 'Database',
    desc: 'Google Cloud Storage, AWS S3, SQL, Supabase, MongoDB, Firebase',
  },
  {
    title: 'Tools',
    desc: 'PowerBI, Tableau, Power Automate, Power Apps, MS Excel, MS Word, MS Sharepoint MS Powerpoint, Github, Git, GCP, AWS, Vercel, Jira, Windows, Linux',
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
                <p key={t.id}>{t}</p>
              ))}
              <div className="flex flex-col gap-8 md:gap-4">
                {skills.map((s) => (
                  <div key={s.id} className="flex flex-row text-left">
                    <div className="flex-wrap">
                      <h1 className="font-bold">{s.title} : </h1>
                      <p className="">{s.desc}</p>
                    </div>
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
