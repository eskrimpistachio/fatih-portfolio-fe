export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between satoshi pt-32 pb-8 gap-16 md:gap-0">
        <div className="flex text-center md:text-left flex-col gap-8">
          <h1>
            Currently based in Bekasi, I am available for both permanent and
            freelance work.
          </h1>
          <p className="text-[#A6A6A6]">© Design by Mizuki. All rights reserved</p>
        </div>
        <div className="flex flex-row justify-center md:justify-normal md:flex-col gap-4">
          <a href="https://www.linkedin.com/in/alfatih-rizqi-alfian/">
            Linkedin
          </a>
          <a href="https://www.instagram.com/alfatihrizqii/">Instagram</a>
          <a href="https://twitter.com/alfathriz">Twitter</a>
        </div>
      </div>
    </>
  );
}
