import Link from "next/link";
import Image from "next/image";
import userimg from "../public/images/user.bmp";
import { useState } from "react";

import LeftSidebar from "../components/inbox_components/LeftSidebar";
import RightSidebarnew from "../components/inbox_components/RightSidebarnew";

import EmailList from "../components/inbox_components/EmailList";
import FooterFixNav from "../components/common_elements/FooterFixNav";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl: "/public/images/user.bmp",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

// const message = {
//   subject: 'Re: New pricing for existing customers',
//   sender: 'joearmstrong@example.com',
//   status: 'Open',
// items: [
//   {
//     id: 1,
//     author: 'Joe Armstrong',
//     date: 'Yesterday at 7:24am',
//     datetime: '2021-01-28T19:24',
//     body: "<p>Thanks so much! Can't wait to try it out.</p>",
//   },
//   {
//     id: 2,
//     author: 'Monica White',
//     date: 'Wednesday at 4:35pm',
//     datetime: '2021-01-27T16:35',
//     body: `
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
//       <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
//       <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
//     `,
//   },
//   {
//     id: 3,
//     author: 'Joe Armstrong',
//     date: 'Wednesday at 4:09pm',
//     datetime: '2021-01-27T16:09',
//     body: `
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
//       <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
//       <p>– Joe</p>
//     `,
//   },
// ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Inboxnew() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-full flex-col mb-40 lg:mb-0">
        {/* Top nav*/}
        {/* <header className="relative flex h-16 flex-shrink-0 items-center bg-white md:ml-60">
          <div className="mx-auto lg:hidden">
            <div className="relative">
              <label htmlFor="inbox-select" className="sr-only">
                Choose inbox
              </label>
              <select
                id="inbox-select"
                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                <option value="/open">Open</option>
                <option value="/archived">Archived</option>
                <option value="/assigned">Assigned</option>
                <option value="/flagged">Flagged</option>
                <option value="/spam">Spam</option>
                <option value="/drafts">Drafts</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden">
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
                <label htmlFor="desktop-search" className="sr-only">
                  Search all inboxes
                </label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search all inboxes"
                  className="block w-full bg-white border-transparent pl-12 placeholder-gray-500 focus:border-transparent focus:ring-0 sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
              <nav aria-label="Global" className="flex space-x-10">
                {navigation.map((item) =>
                  item.children.length ? (
                    <Menu
                      as="div"
                      key={item.name}
                      className="relative text-left"
                    >
                      <Menu.Button className="flex items-center rounded-md text-sm font-medium text-gray-900">
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Menu.Item key={child.name}>
                                {({ active }) => (
                                  <a
                                    href={child.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {child.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-900"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </nav>
              <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a
                    href="#"
                    className="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </span>

                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="flex rounded-full bg-white text-sm">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8 rounded-full"
                      src={userimg}
                      alt="image"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                  enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                  enterTo="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                  leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leaveTo="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                >
                  <Dialog.Panel
                    className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                    aria-label="Global"
                  >
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                      <a href="#">
                        <Image
                          width={500}
                          height={500}
                          className="block h-8 w-auto"
                          src={userimg}
                          alt="Your Company"
                        />
                      </a>
                      <button
                        type="button"
                        className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                      <div className="relative text-gray-400 focus-within:text-gray-500">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search all inboxes
                        </label>
                        <input
                          id="mobile-search"
                          type="search"
                          placeholder="Search all inboxes"
                          className="block w-full rounded-md border-gray-200 pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                      {navigation.map((item) => (
                        <Fragment key={item.name}>
                          <a
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                            >
                              {child.name}
                            </a>
                          ))}
                        </Fragment>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                      <div className="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <Image
                            width={500}
                            height={500}
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3 min-w-0 flex-1">
                          <div className="truncate text-base font-medium text-gray-800">
                            {user.name}
                          </div>
                          <div className="truncate text-sm font-medium text-gray-500">
                            {user.email}
                          </div>
                        </div>
                        <a
                          href="#"
                          className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </header> */}

        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <LeftSidebar />

          {/* Main area */}
          <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex lg:ml-52 xl:ml-60 lg:mr-64 xl:mr-80 px-3 lg:px-0">
            <div className="flex flex-col w-full">
              {/* Email List component */}
              <EmailList />
            </div>

            {/* Message list*/}
            {/* Right sidebar */}
            <aside className="hidden lg:block xl:flex-shrink-0 lg:w-64 xl:w-80 fixed right-0 top-0 bottom-0 ">
              <RightSidebarnew />
            </aside>
          </main>
        </div>
      </div>
      {/* Mobile Footer Nav */}
      <FooterFixNav />
    </>
  );
}

export default Inboxnew;
