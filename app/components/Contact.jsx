export default function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-col gap-16 satoshi justify-center">
        <h1 className="text-5xl text-center font-bold">
          I WOULD LIKE TO{' '}
          <span className="playfair font-normal">COLLABORATE</span>, SO PLEASE{' '}
          <span className="playfair font-normal">CONTACT ME</span>
        </h1>
        <div className="flex justify-center">
          <a
            className="rounded-2xl p-4 bg-[#ff7a00] text-black font-medium hover:scale-110"
            href="mailto:alfatihrizqialfian@gmail.com"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </>
  );
}
