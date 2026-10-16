import svgPaths from "./svg-q7igkv02dk";
import imgRectangle from "./d73aa0733b0057ecbb44ff284c4886ba221f2bd8.png";
import imgRectangle1 from "./121682fa8a2c84ad4711f542288f88fe4ec79847.png";
import imgImage1 from "./5000c8a4382a2876cfc8b59f531fa7684d837897.png";

function Group1() {
  return (
    <div className="absolute inset-[22.68%_55.19%_28.51%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2499 18.1857">
        <g id="Group">
          <path d={svgPaths.p1f075af0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16e7b000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3a471370} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2566100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p7f66880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p164d0190} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[22.68%_55.19%_28.51%_0]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_0_48.46%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0067 37.2611">
        <g id="Group">
          <path d={svgPaths.p1a9441b0} fill="var(--fill-0, #3EBF0F)" id="Vector" />
          <path d={svgPaths.p40cf100} fill="var(--fill-0, #3EBF0F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-white inset-[11.02%_8.12%_19.7%_57.55%]" />
      <Group />
      <Group2 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[37.261px] relative shrink-0 w-[130px]" data-name="Component 3">
      <Group3 />
    </div>
  );
}

function Links() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Outfit:Medium',sans-serif] gap-[32px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-name="Links">
      <p className="opacity-90 relative shrink-0">Products</p>
      <p className="opacity-90 relative shrink-0">About us</p>
      <p className="opacity-90 relative shrink-0">Blog</p>
      <p className="opacity-90 relative shrink-0">Pricing</p>
      <p className="opacity-90 relative shrink-0">FAQ</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-center px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Download App</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#0a211f] content-stretch flex h-[80px] items-center justify-between px-[112px] relative shrink-0 w-[1440px]" data-name="Navbar">
      <Component />
      <Links />
      <Button />
    </div>
  );
}

function Eyebrow() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Eyebrow">
      <div aria-hidden className="absolute border border-[#3ebf0f] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3ebf0f] text-[13px] tracking-[2.1px] uppercase whitespace-nowrap">GET IN TOUCH</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] not-italic relative shrink-0 text-[80px] text-white tracking-[-2px]">{`Let's start a`}</p>
      <p className="font-['Instrument_Serif:Italic',sans-serif] italic relative shrink-0 text-[#3ebf0f] text-[92px]">Conversation</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[20px] text-white w-[560px]">Our team is ready to help you find the perfect solution for your business or personal communication needs.</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a211f] content-stretch flex flex-col gap-[40px] items-start px-[112px] py-[120px] relative shrink-0 w-[1440px]" data-name="Hero">
      <Eyebrow />
      <Frame />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="shopping-cart">
          <path d={svgPaths.p10be4300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Frame">
      <ShoppingCart />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] relative shrink-0 text-[#12151c] text-[24px]">Sales Enquiries</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b665f] text-[16px]">sales@nativetalk.io</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#3ebf0f] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3ebf0f] text-[15px] whitespace-nowrap">Chat with Sales</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Frame3 />
        <Frame4 />
        <Frame5 />
      </div>
    </div>
  );
}

function Headphones() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="headphones">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="headphones">
          <path d={svgPaths.pdc49900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Frame">
      <Headphones />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] relative shrink-0 text-[#12151c] text-[24px]">Customer Support</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b665f] text-[16px]">+234 (0) 815 020 1188</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#3ebf0f] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3ebf0f] text-[15px] whitespace-nowrap">Call Support</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Frame6 />
        <Frame7 />
        <Frame8 />
      </div>
    </div>
  );
}

function Handshake() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="handshake">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="handshake">
          <path d={svgPaths.p37d17358} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Frame">
      <Handshake />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] relative shrink-0 text-[#12151c] text-[24px]">Partnership</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b665f] text-[16px]">partners@nativetalk.io</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#3ebf0f] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Outfit:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3ebf0f] text-[15px] whitespace-nowrap">Partner with us</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <Frame9 />
        <Frame10 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function ContactCards() {
  return (
    <div className="bg-[#f7f9f2] content-stretch flex flex-col items-start px-[112px] py-[100px] relative shrink-0 w-[1440px]" data-name="Contact-Cards">
      <Frame2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[54px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5b665f] text-[15px]">Enter your name</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#12151c] text-[14px] whitespace-nowrap">Full Name</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[54px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5b665f] text-[15px]">you@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#12151c] text-[14px] whitespace-nowrap">Email Address</p>
      <Frame18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[54px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5b665f] text-[15px]">How can we help?</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#12151c] text-[14px] whitespace-nowrap">Subject</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[160px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5b665f] text-[15px]">Tell us more about your inquiry...</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#12151c] text-[14px] whitespace-nowrap">Message</p>
      <Frame22 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex gap-[8px] items-center px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Send message</p>
      <ArrowRight />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0" data-name="Frame">
      <Button1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <Frame19 />
      <Frame21 />
      <Frame23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#12151c] text-[40px] whitespace-nowrap">Send us a message</p>
      <Frame13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.6] relative shrink-0 text-[#5b665f] text-[16px]" data-name="Frame">
      <p className="relative shrink-0">123 Innovation Way, Victoria Island</p>
      <p className="relative shrink-0">Lagos, Nigeria</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#12151c] text-[32px]">Our Office</p>
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#0a211f] content-stretch flex h-[300px] items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle} />
          <div className="absolute bg-[rgba(10,33,31,0.4)] inset-0" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Outfit:SemiBold',sans-serif] leading-[normal] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">VIEW ON GOOGLE MAPS</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[440px]" data-name="Frame">
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function FormSection() {
  return (
    <div className="bg-white content-stretch flex gap-[80px] items-start px-[112px] py-[120px] relative shrink-0 w-[1440px]" data-name="Form-Section">
      <Frame12 />
      <Frame24 />
    </div>
  );
}

function Eyebrow1() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Eyebrow">
      <div aria-hidden className="absolute border border-[#3ebf0f] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3ebf0f] text-[13px] tracking-[2.1px] uppercase whitespace-nowrap">FREQUENTLY ASKED</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-baseline leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] not-italic relative shrink-0 text-[#12151c] text-[48px]">Got</p>
      <p className="font-['Instrument_Serif:Italic',sans-serif] italic relative shrink-0 text-[#3ebf0f] text-[56px]">Questions?</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Eyebrow1 />
      <Frame29 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a211f] text-[20px] whitespace-nowrap">What is a virtual phone system?</p>
      <Frame33 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4e1d4] border-b border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a211f] text-[20px] whitespace-nowrap">How does NativeTalk work?</p>
      <Frame36 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4e1d4] border-b border-solid inset-0 pointer-events-none" />
      <Frame35 />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus2 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a211f] text-[20px] whitespace-nowrap">How does NativeTalk help businesses?</p>
      <Frame39 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4e1d4] border-b border-solid inset-0 pointer-events-none" />
      <Frame38 />
    </div>
  );
}

function Plus3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus3 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a211f] text-[20px] whitespace-nowrap">Can I get international numbers on NativeTalk?</p>
      <Frame42 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4e1d4] border-b border-solid inset-0 pointer-events-none" />
      <Frame41 />
    </div>
  );
}

function Plus4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #3EBF0F)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e4e1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plus4 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between py-[32px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a211f] text-[20px] whitespace-nowrap">How much does it cost to use NativeTalk?</p>
      <Frame45 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e4e1d4] border-b border-solid inset-0 pointer-events-none" />
      <Frame44 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[800px]" data-name="Frame">
      <Frame31 />
      <Frame34 />
      <Frame37 />
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#f7f9f2] content-stretch flex flex-col gap-[64px] items-center px-[112px] py-[120px] relative shrink-0 w-[1440px]" data-name="FAQ">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline relative shrink-0" data-name="Frame">
      <p className="font-['Outfit:ExtraBold',sans-serif] not-italic relative shrink-0 text-[64px] tracking-[-2px]">You value your</p>
      <p className="font-['Instrument_Serif:Italic',sans-serif] italic relative shrink-0 text-[72px]">customers</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] relative shrink-0 text-white w-[800px] whitespace-nowrap" data-name="Frame">
      <Frame47 />
      <p className="font-['Outfit:ExtraBold',sans-serif] not-italic relative shrink-0 text-[64px] text-center tracking-[-2px]">{`Let's help you prove it.`}</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#3ebf0f] content-stretch flex gap-[8px] items-center px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Get started</p>
      <ArrowRight1 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[14px] relative rounded-[999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Talk to sales</p>
      <ArrowRight2 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#0a211f] content-stretch flex flex-col gap-[48px] items-center overflow-clip px-[112px] py-[160px] relative shrink-0 w-[1440px]" data-name="CTA">
      <div className="absolute bottom-0 left-0 top-0 w-[1440px]" data-name="Rectangle">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle1} />
          <div className="absolute bg-[rgba(10,33,31,0.85)] inset-0" />
        </div>
      </div>
      <Frame46 />
      <Frame48 />
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

function Container2() {
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

function Svg() {
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
      <Svg />
    </div>
  );
}

function Svg1() {
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
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <LinkX />
      <LinkInstagram />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[29px] relative size-full">
        <LinkNativeTalkHome />
        <Container2 />
        <Container3 />
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

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Business</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">CRM</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">VoIP</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <Heading />
        <Link />
        <Link1 />
        <Link2 />
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

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">About Us</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Contact</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Blog</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[67.5px] relative size-full">
        <Heading1 />
        <Link3 />
        <Link4 />
        <Link5 />
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

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[21px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Pricing</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">FAQs</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">{`Q&A Forum`}</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Terms</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start py-[6px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[14.5px] w-full">
        <p className="leading-[21.75px]">Privacy</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[____minmax(0,1.80fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[__206.25px_206.25px] h-[503.3px] pb-[50.8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.12)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
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

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap">
        <p className="leading-[20.25px]">© 2026 NativeTalk. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9cb4a7] text-[13.5px] whitespace-nowrap">
        <p className="leading-[20.25px]">Privacy · Terms · Cookies</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between pt-[26px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[28px] relative size-full">
        <HorizontalBorder />
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#103a2c] content-stretch flex flex-col items-start pb-[36px] pt-[80px] px-[100px] relative shrink-0 w-[1440px]" data-name="Footer">
      <Container />
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="bg-[#f7f9f2] content-stretch flex flex-col items-start relative size-full" data-name="contact-us-page">
      <Navbar />
      <Hero />
      <ContactCards />
      <FormSection />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}