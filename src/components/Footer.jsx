import React from "react";

function Footer() {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-400 capitalize">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="block mt-2 capitalize text-zinc-500"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/4 ">
            <h4 className="mb-8 text-zinc-400 capitalize">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="block mt-2 capitalize text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right mt-15">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-32 mt-5 cursor-pointer"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-5">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a
              href="#"
              key={index}
              className="text-zinc-600 font-normal text-sm"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Footer;
