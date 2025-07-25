export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center pb-8 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <a href="#"><XIcon className="h-6 w-6" /></a>
            <a href="#"><InstagramIcon className="h-6 w-6" /></a>
            <a href="#"><FacebookIcon className="h-6 w-6" /></a>
            <a href="#"><PinterestIcon className="h-6 w-6" /></a>
          </div>
          <div className="flex justify-center">
            <img src="/logo.png" alt="Berenice London logo" className="h-16" />
          </div>
          <div className="flex justify-end items-center space-x-4">
            {/* Placeholder for Klarna, Humm, etc. */}
          </div>
        </div>

        <div className="py-8 border-b border-gray-700">
          <form action="mailto:info@berenicelondon.co.uk" method="post" encType="text/plain" className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="text" name="name" placeholder="Your name" className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full md:w-auto text-white placeholder-gray-400" />
            <input type="email" name="email" placeholder="Your email address" className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full md:w-auto text-white placeholder-gray-400" />
            <button type="submit" className="bg-white text-black px-6 py-2 rounded-md font-semibold">Subscribe</button>
          </form>
        </div>

        <div className="py-8 flex justify-center">
          <img src="https://ps.w.org/showcase-payment-options-icons/assets/banner-1544x500.png?rev=3070358" alt="Payment methods" className="h-6" />
        </div>

        <div className="text-center text-xs text-gray-400">
          <p className="max-w-3xl mx-auto">
            Berenice London provides high quality, ethically sourced 100% European and South American human hair wigs and hairpieces in Ealing, West London. Contact our London wigmakers and discuss with us to find your new look today, or contact us to learn more.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:underline">How to Measure</a>
            <a href="#" className="hover:underline">About Berenice</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">FAQ's</a>
          </div>
          <p className="mt-6">&copy; 2024 by Berenice London. All rights reserved. Designed, Produced and Powered by Telemedia.</p>
        </div>
      </div>
    </footer>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4a8 8 0 0 0-8 8c0 3.5 2.5 6.5 6 7.5v-5.5H8v-3h2V9.5C10 7.5 11.5 6 13.5 6H16v3h-1.5a1.5 1.5 0 0 0-1.5 1.5V12h3l-.5 3h-2.5V20c3.5-1 6-4 6-7.5a8 8 0 0 0-8-8z" />
    </svg>
  );
}
