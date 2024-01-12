import { useState, useRef, useLayoutEffect } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";
import gsap from "gsap";

// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

function Header() {
  const animaton = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(animaton.current, {
        opacity: 0,
        duration: 0.5,
      })
    })

    return () => ctx.revert();
  }, [])

  return (
    <header className="bg-[#87878713] backdrop-blur max-w-[1140px] fixed top-5 right-0 left-0 rounded-full z-20 lg-header:mx-auto mt-2 shadow-[inset_0px_1px_0px_0px_rgba(225,225,225,0.1)] mx-5" ref={animaton}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3"
        aria-label="Global"
      >
        <div className="flex me-5">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center justify-start">
            <span className="sr-only">Worko</span>
            <img
              className="h-8 w-auto rounded-full me-2"
              src="https://ugc.production.linktr.ee/83ebb150-33fc-4639-8f2b-0bd315a84a1b_Worko.jpeg?io=true&size=avatar-v1_0"
              alt=""
            />
            <div className="flex font-bold">
              Worko
            </div>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button className="px-3 py-2 bg-[#000] rounded-lg me-3">
            Get started
          </button>
          {mobileMenuOpen ? (
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : (
            <>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-8">
          {/* <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover> */}

          {/* <Link
            to="/"
            className="text-sm font-semibold leading-6 hover:text-white"
          >
            Home
          </Link> */}
          <Link
            to="/integration"
            className="text-sm font-semibold leading-6 hover:text-white"
          >
            Integrations
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-semibold leading-6 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            to="/docs"
            className="text-sm font-semibold leading-6 hover:text-white"
          >
            Docs
          </Link>
          <Link
            to="/changelog"
            className="text-sm font-semibold leading-6 hover:text-white"
          >
            Changelog
          </Link>
        </Popover.Group>
        <div className="hidden md:flex md:flex-1 md:justify-end items-center">
          <button className="px-3 py-2 bg-[#000] rounded-lg me-3">
            Get started
          </button>
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 hover:text-white me-2"
          >
            Login
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          className="md:hidden w-full absolute bottom-100 right-0 left-0 z-30"
          style={{ height: "calc(100vh - 125px)" }}
        >
          <div className="z-30 mt-5 divide-y divide-gray-500/10 bg-[#121218] rounded-3xl h-full flex justify-between flex-col overflow-auto">
            <div className="space-y-2 py-6">
              <Link
                to="/"
                className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/integration"
                className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                to="/pricing"
                className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/docs"
                className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                to="/changelog"
                className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Changelog
              </Link>
            </div>
            <div className="py-6">
              <Link
                to="/login"
                className="-mx-3 block rounded-lg mx-6 py-2.5 text-base font-semibold leading-7 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-30" />
                <Dialog.Panel className="fixed inset-0 right-5 z-30 w-full overflow-y-auto bg-[#121218] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  rounded-3xl">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Worko</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Integrations
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Docs
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Changelog
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-white"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog> */}
    </header>
  );
}

export default Header;
