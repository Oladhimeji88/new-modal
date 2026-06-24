import svgPaths from "../../imports/ContactUsPage/svg-q7igkv02dk";
import imgImage1 from "../../imports/ContactUsPage/5000c8a4382a2876cfc8b59f531fa7684d837897.png";

const FOOTER_LINKS: Record<string, string> = {
  Personal: "/personal",
  Business: "/business-app",
  Enterprise: "/enterprise",
  Pricing: "/pricing",
  FAQs: "/faq",
  "Q&A Forum": "/faq",
  Terms: "/terms",
  Privacy: "/privacy",
  "About Us": "/about",
  Contact: "/contact",
  Blog: "/blog",
  Cookies: "/privacy",
};

// ── Logo ─────────────────────────────────────────────────────────────────────

function FooterLogoSvg() {
  return (
    <div className="h-[38px] relative shrink-0 w-[132.055px]" data-name="NativeTalkSvgLogoWhite.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.055 38">
        <g clipPath="url(#clip0_footer_logo)" id="NativeTalkSvgLogoWhite.svg">
          <path d={svgPaths.p1605ba80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f80180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3efa4f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p33b8700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1cec5c00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3098ec00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p13a8cdf0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2f112880} fill="var(--fill-0, #3EBF0F)" id="Vector_8" />
          <path d={svgPaths.p230cb600} fill="var(--fill-0, #3EBF0F)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_footer_logo">
            <rect fill="white" height="38" width="132.055" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterLogo() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Link - NativeTalk home"
    >
      <div className="aspect-[132.0552520751953/38] content-stretch flex flex-col items-center justify-center max-w-[398.989990234375px] overflow-clip relative shrink-0">
        <FooterLogoSvg />
      </div>
    </div>
  );
}

// ── Social icons ──────────────────────────────────────────────────────────────

function IconX() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p1139ba70} fill="var(--fill-0, #CDD6CD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkX() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-px py-[10.5px] relative rounded-[10px] shrink-0 size-[38px]"
      data-name="Link - X"
    >
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <IconX />
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p17ab5080} id="Vector" stroke="var(--stroke-0, #CDD6CD)" strokeWidth="1.275" />
          <path d={svgPaths.p38a98100} id="Vector_2" stroke="var(--stroke-0, #CDD6CD)" strokeWidth="1.275" />
          <path d={svgPaths.p16b58ec0} fill="var(--fill-0, #CDD6CD)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-px py-[10.5px] relative rounded-[10px] shrink-0 size-[38px]"
      data-name="Link - Instagram"
    >
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <IconInstagram />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <LinkX />
      <LinkInstagram />
    </div>
  );
}

// ── Column 1 – Brand ──────────────────────────────────────────────────────────

function BrandDescription() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[280px] relative shrink-0 w-[280px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] whitespace-nowrap">
        <p className="leading-[21.75px] mb-0">The cloud phone system for modern</p>
        <p className="leading-[21.75px] mb-0">business. Virtual numbers, smart calling</p>
        <p className="leading-[21.75px]">and a full call center — no SIM required.</p>
      </div>
    </div>
  );
}

function FooterCol1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[29px] relative size-full">
        <FooterLogo />
        <BrandDescription />
        <SocialLinks />
      </div>
    </div>
  );
}

// ── Column 2 – Products ───────────────────────────────────────────────────────

function FooterCol2() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
          <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
            <p className="leading-[22.5px]">Products</p>
          </div>
        </div>
        {["Personal", "Business", "Enterprise"].map((item) => (
          <a key={item} href={FOOTER_LINKS[item] ?? "/"} className="content-stretch flex flex-col items-start py-[6px] first:pt-[21px] relative shrink-0 w-full cursor-pointer no-underline" data-name="Link">
            <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
              <p className="leading-[21.75px]">{item}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Column 3 – Site ───────────────────────────────────────────────────────────

function FooterCol3() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
          <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
            <p className="leading-[22.5px]">Site</p>
          </div>
        </div>
        {["Pricing", "FAQs", "Q&A Forum", "Terms", "Privacy"].map((item) => (
          <a key={item} href={FOOTER_LINKS[item] ?? "/"} className="content-stretch flex flex-col items-start py-[6px] first:pt-[21px] relative shrink-0 w-full cursor-pointer no-underline" data-name="Link">
            <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
              <p className="leading-[21.75px]">{item}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Column 4 – Company ────────────────────────────────────────────────────────

function FooterCol4() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
          <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
            <p className="leading-[22.5px]">Company</p>
          </div>
        </div>
        {["About Us", "Contact", "Blog"].map((item) => (
          <a key={item} href={FOOTER_LINKS[item] ?? "/"} className="content-stretch flex flex-col items-start py-[6px] first:pt-[21px] relative shrink-0 w-full cursor-pointer no-underline" data-name="Link">
            <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
              <p className="leading-[21.75px]">{item}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Grid ──────────────────────────────────────────────────────────────────────

function FooterGrid() {
  return (
    <div
      className="gap-x-[40px] gap-y-[40px] grid grid-cols-[minmax(0,1.80fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[206.25px_206.25px] h-[503.3px] pb-[50.8px] relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.12)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <FooterCol1 />
      <FooterCol2 />
      <FooterCol4 />
      <FooterCol3 />
    </div>
  );
}

// ── Brand logos strip ─────────────────────────────────────────────────────────

function BrandLogos() {
  return (
    <div
      className="content-stretch flex flex-col h-[182px] items-center overflow-clip pt-[40px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="aspect-[782/100] relative shrink-0 w-full" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.5%] left-[0.03%] max-w-none top-[0.11%] w-[99.94%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

// ── Bottom bar ────────────────────────────────────────────────────────────────

function FooterBottom() {
  return (
    <div
      className="content-center flex flex-wrap items-center justify-between pt-[26px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap">
          <p className="leading-[20.25px]">© 2026 NativeTalk. All rights reserved.</p>
        </div>
      </div>
      <div className="content-stretch flex font-['Outfit:Regular',sans-serif] gap-[8px] items-center relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap" data-name="Container">
        <a className="leading-[20.25px] no-underline text-inherit cursor-pointer" data-name="Link" href="/privacy">Privacy</a>
        <span aria-hidden>·</span>
        <a className="leading-[20.25px] no-underline text-inherit cursor-pointer" data-name="Link" href="/terms">Terms</a>
        <span aria-hidden>·</span>
        <a className="leading-[20.25px] no-underline text-inherit cursor-pointer" data-name="Link" href="/privacy">Cookies</a>
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export function SharedFooter() {
  return (
    <div
      className="bg-[#103a2c] content-stretch flex flex-col items-center pb-[36px] pt-[80px] px-[100px] relative shrink-0 w-full"
      data-name="SharedFooter"
    >
      <div className="max-w-[1240px] relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[28px] relative size-full">
          <FooterGrid />
          <BrandLogos />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}
