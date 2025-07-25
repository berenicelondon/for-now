import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white">
      <div className="flex items-center space-x-4">
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-[#1A1A1A] text-white">
            <nav className="flex flex-col space-y-4 text-lg p-4">
              <a href="#" className="hover:text-primary">
                SHOP
              </a>
              <a href="#" className="hover:text-primary">
                BESPOKE
              </a>
              <a href="#" className="hover:text-primary">
                ABOUT | CONTACT
              </a>
              <a href="#" className="hover:text-primary">
                EDUCATION
              </a>
              <a href="#" className="hover:text-primary">
                MEMBERSHIP | BLOG
              </a>
              <a href="#" className="hover:text-primary">
                INVESTMENT
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <img src="/placeholder.svg" alt="Berenice London logo" className="h-8" />
      </div>
      <div className="hidden md:flex items-center space-x-2 text-sm">
        <p>Welcome to Berenice London</p>
      </div>
      <div className="flex items-center space-x-4">
        <SearchIcon className="h-5 w-5" />
        <HeartIcon className="h-5 w-5" />
        <UserIcon className="h-5 w-5" />
      </div>
    </header>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
