import svgPaths from "./svg-ufm1dvs2im";
import imgImage1 from "./5000c8a4382a2876cfc8b59f531fa7684d837897.png";
import { PricingFaq } from "../../app/components/PricingFaq";

function Logo() {
  return (
    <div className="h-[37px] relative shrink-0 w-[130px]" data-name="Logo">
      <div className="absolute inset-[0_0_-2.7%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 38">
          <g id="Logo">
            <path d={svgPaths.p12ce8580} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2ae63c00} fill="var(--fill-0, #3EBF0F)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Outfit:SemiBold',sans-serif] gap-[32px] items-start leading-[22.5px] not-italic relative shrink-0 text-[#f7f9f2] text-[15px] whitespace-nowrap" data-name="NavLinks">
      <p className="opacity-80 relative shrink-0">Products</p>
      <p className="opacity-80 relative shrink-0">About us</p>
      <p className="opacity-80 relative shrink-0">Blog</p>
      <p className="opacity-80 relative shrink-0">Contact us</p>
      <p className="relative shrink-0">Pricing</p>
      <p className="opacity-80 relative shrink-0">FAQ</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Download App</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[1216px]" data-name="Container">
      <Logo />
      <NavLinks />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#0a211f] content-stretch flex h-[78px] items-start justify-center left-0 right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Instrument_Serif:Italic',sans-serif] italic relative shrink-0 text-[#3ebf0f] text-[76px]">Every</p>
      <p className="font-['Outfit:ExtraBold',sans-serif] not-italic relative shrink-0 text-[66.2px] text-white tracking-[-1.9px]">Business</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[80px] relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] mb-[-8px] min-w-full not-italic relative shrink-0 text-[66.2px] text-white tracking-[-1.9px] w-[min-content]">Flexible Plans for</p>
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-[800px]" data-name="Content">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3ebf0f] text-[14px] tracking-[2.4px] whitespace-nowrap">SIMPLE PRICING</p>
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic opacity-80 relative shrink-0 text-[#f7f9f2] text-[16.2px] w-[600px]">{`No hidden fees, no SIM card needed. Scale your communications as your team grows with Africa's most reliable virtual phone network.`}</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a211f] content-stretch flex flex-col items-center overflow-clip pb-[120px] pt-[160px] relative shrink-0 w-full" data-name="Hero">
      <Content />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold','Noto_Sans:Black','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Black','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#12151c] text-[48px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 900' }}>
        ₦2,500
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#5b665f] text-[16.2px]">/mo</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Outfit:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#12151c] text-[24px] whitespace-nowrap">Personal</p>
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-full not-italic relative shrink-0 text-[#5b665f] text-[16.2px] w-[min-content]">Ideal for solo entrepreneurs and individuals looking for a professional extension.</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">1 Virtual Number</p>
    </div>
  );
}

function CheckCircle1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">100 Minutes/month</p>
    </div>
  );
}

function CheckCircle2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Call Forwarding</p>
    </div>
  );
}

function CheckCircle3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Personal Voicemail</p>
    </div>
  );
}

function CheckCircle4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">NativeTalk Mobile App</p>
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function TopGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="TopGroup">
      <Header1 />
      <Features />
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border-[#0a211f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#0a211f] text-[15px] whitespace-nowrap">Get Started</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Footer">
      <Link />
    </div>
  );
}

function PricingCardPersonal() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="PricingCard-Personal">
      <div aria-hidden className="absolute border border-[rgba(10,33,31,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <TopGroup />
        <Footer />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">Most Popular</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold','Noto_Sans:Black','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Black','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 900' }}>
        ₦8,500
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#9cb4a7] text-[16.2px]">/mo</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame10 />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Business</p>
      <Frame11 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-full not-italic relative shrink-0 text-[#9cb4a7] text-[16.2px] w-[min-content]">Scale your small team and manage business communications professionally.</p>
    </div>
  );
}

function CheckCircle5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">5 Virtual Numbers</p>
    </div>
  );
}

function CheckCircle6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">Unlimited Local Calls</p>
    </div>
  );
}

function CheckCircle7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">Shared Team Inbox</p>
    </div>
  );
}

function CheckCircle8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle8 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">{`IVR & Call Routing`}</p>
    </div>
  );
}

function CheckCircle9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle9 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">CRM Integration</p>
    </div>
  );
}

function CheckCircle10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1893)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1893">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle10 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[15px] text-white">Call Analytics</p>
    </div>
  );
}

function Features1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function TopGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="TopGroup">
      <Header2 />
      <Features1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p27dda300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#3ebf0f] relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Join Waitlist</p>
          <Svg />
        </div>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Footer">
      <Link1 />
    </div>
  );
}

function PricingCardBusiness() {
  return (
    <div className="bg-[#0a211f] drop-shadow-[0px_20px_20px_rgba(0,0,0,0.13)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="PricingCard-Business">
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <TopGroup1 />
        <Footer1 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#12151c] text-[48px]">Custom</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#5b665f] text-[16.2px]">​</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Header">
      <p className="font-['Outfit:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#12151c] text-[24px] whitespace-nowrap">Enterprise</p>
      <Frame18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#5b665f] text-[16.2px] w-[min-content]">Customized solutions for large organizations needing high-volume throughput.</p>
    </div>
  );
}

function CheckCircle11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle11 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Unlimited Numbers</p>
    </div>
  );
}

function CheckCircle12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle12 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">White-label Options</p>
    </div>
  );
}

function CheckCircle13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle13 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Developer API Access</p>
    </div>
  );
}

function CheckCircle14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle14 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Dedicated Support</p>
    </div>
  );
}

function CheckCircle15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle15 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">99.9% Uptime SLA</p>
    </div>
  );
}

function CheckCircle16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1890)" id="check-circle">
          <path d={svgPaths.p2ce74680} id="Vector" stroke="var(--stroke-0, #0A211F)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1890">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <CheckCircle16 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-px not-italic relative text-[#12151c] text-[15px]">Volume Discounts</p>
    </div>
  );
}

function Features2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function TopGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="TopGroup">
      <Header3 />
      <Features2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border-[#0a211f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#0a211f] text-[15px] whitespace-nowrap">Talk to Sales</p>
        </div>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Footer">
      <Link2 />
    </div>
  );
}

function PricingCardEnterprise() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="PricingCard-Enterprise">
      <div aria-hidden className="absolute border border-[rgba(10,33,31,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <TopGroup2 />
        <Footer2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] h-[688px] items-start max-w-[1216px] relative shrink-0 w-full" data-name="Frame">
      <PricingCardPersonal />
      <PricingCardBusiness />
      <PricingCardEnterprise />
    </div>
  );
}

function Pricing() {
  return (
    <div className="bg-[#f7f9f2] relative shrink-0 w-full" data-name="Pricing">
      <div className="content-stretch flex flex-col items-start px-[112px] py-[120px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-baseline justify-center relative shrink-0 text-[#0a211f] text-[54px] text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] leading-[55px] not-italic relative shrink-0 tracking-[-2.16px]">Common</p>
      <p className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[64px] relative shrink-0">Questions</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #0A211F)" strokeOpacity="0.121569" width="31" x="0.5" y="0.5" />
          <path d="M16 9V23M9 16H23" id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FaqRow() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="FAQRow">
      <div aria-hidden className="absolute border-[rgba(10,33,31,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0a211f] text-[19px]">What is a virtual phone system?</p>
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #0A211F)" strokeOpacity="0.121569" width="31" x="0.5" y="0.5" />
          <path d="M16 9V23M9 16H23" id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FaqRow1() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="FAQRow">
      <div aria-hidden className="absolute border-[rgba(10,33,31,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0a211f] text-[19px]">How does billing work for NativeTalk?</p>
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #0A211F)" strokeOpacity="0.121569" width="31" x="0.5" y="0.5" />
          <path d="M16 9V23M9 16H23" id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FaqRow2() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="FAQRow">
      <div aria-hidden className="absolute border-[rgba(10,33,31,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0a211f] text-[19px]">Can I cancel my subscription at any time?</p>
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #0A211F)" strokeOpacity="0.121569" width="31" x="0.5" y="0.5" />
          <path d="M16 9V23M9 16H23" id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FaqRow3() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="FAQRow">
      <div aria-hidden className="absolute border-[rgba(10,33,31,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0a211f] text-[19px]">Do I need a physical SIM to use NativeTalk?</p>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <rect height="31" rx="15.5" stroke="var(--stroke-0, #0A211F)" strokeOpacity="0.121569" width="31" x="0.5" y="0.5" />
          <path d="M16 9V23M9 16H23" id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FaqRow4() {
  return (
    <div className="content-stretch flex items-center justify-between py-[24px] relative shrink-0 w-full" data-name="FAQRow">
      <div aria-hidden className="absolute border-[rgba(10,33,31,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0a211f] text-[19px]">What are the rates for international calls?</p>
      <Frame32 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Frame">
      <FaqRow />
      <FaqRow1 />
      <FaqRow2 />
      <FaqRow3 />
      <FaqRow4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[820px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3ebf0f] text-[14px] tracking-[2.4px] whitespace-nowrap">FAQ</p>
      <Frame26 />
      <PricingFaq />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="FAQ">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[112px] py-[120px] relative size-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function NativeTalkSvgLogoWhiteSvg() {
  return (
    <div className="h-[38px] relative shrink-0 w-[132.055px]" data-name="NativeTalkSvgLogoWhite.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.055 38">
        <g clipPath="url(#clip0_1_1081)" id="NativeTalkSvgLogoWhite.svg">
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
          <clipPath id="clip0_1_1081">
            <rect fill="white" height="38" width="132.055" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NativeTalk() {
  return (
    <div className="aspect-[132.0552520751953/38] content-stretch flex flex-col items-center justify-center max-w-[398.989990234375px] overflow-clip relative shrink-0" data-name="NativeTalk">
      <NativeTalkSvgLogoWhiteSvg />
    </div>
  );
}

function LinkNativeTalkHome() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link - NativeTalk home">
      <NativeTalk />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[280px] relative shrink-0 w-[280px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] whitespace-nowrap">
        <p className="leading-[21.75px] mb-0">The cloud phone system for modern</p>
        <p className="leading-[21.75px] mb-0">business. Virtual numbers, smart calling</p>
        <p className="leading-[21.75px]">and a full call center — no SIM required.</p>
      </div>
    </div>
  );
}

function Svg1() {
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
    <div className="content-stretch flex flex-col items-center px-px py-[10.5px] relative rounded-[10px] shrink-0 size-[38px]" data-name="Link - X">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Svg1 />
    </div>
  );
}

function Svg2() {
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
    <div className="content-stretch flex flex-col items-center px-px py-[10.5px] relative rounded-[10px] shrink-0 size-[38px]" data-name="Link - Instagram">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Svg2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <LinkX />
      <LinkInstagram />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[29px] relative size-full">
        <LinkNativeTalkHome />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[22.5px]">Products</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Business</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">CRM</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">VoIP</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <Heading />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[22.5px]">Company</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">About Us</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Contact</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Blog</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <Heading1 />
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white w-full">
        <p className="leading-[22.5px]">Site</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Pricing</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">FAQs</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">{`Q&A Forum`}</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Terms</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Privacy</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[____minmax(0,1.80fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[__206.25px_206.25px] h-[503.3px] pb-[50.8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.12)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[182px] items-center overflow-clip pt-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="aspect-[782/100] relative shrink-0 w-full" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.5%] left-[0.03%] max-w-none top-[0.11%] w-[99.94%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap">
        <p className="leading-[20.25px]">© 2026 NativeTalk. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap">
        <p className="leading-[20.25px]">Privacy · Terms · Cookies</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between pt-[26px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[28px] relative size-full">
        <HorizontalBorder />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="bg-[#103a2c] content-stretch flex flex-col items-start pb-[36px] pt-[80px] px-[100px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Container1 />
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="pricing-page">
      <Header />
      <Hero />
      <Pricing />
      <Faq />
      <Footer3 />
    </div>
  );
}