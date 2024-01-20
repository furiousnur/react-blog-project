import React from 'react';

const Home = () => {
    return (<div>
        <section className="relative pb-8 " style={{height: 750}}>
            <div>
                <img
                    src="https://i.postimg.cc/CKVZHhrQ/pexels-pixabay-256455-1.jpg"
                    className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75">
                    <div className="z-10 max-w-5xl px-4 mx-auto text-center">
                          <span className="text-xs font-semibold text-blue-400 uppercase">
                            Knowledge is power
                          </span>
                        <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                            Grow your career
                        </h2>
                        <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam
                        </p>
                        <a
                            className="block px-5 py-3 text-sm font-semibold text-center text-indigo-500 transition duration-200 bg-white border border-white rounded md:inline-block hover:bg-indigo-50 hover:border-indigo-50"
                            href="#"
                        >
                            {" "}
                            Learn More{" "}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-4 relative mt-0 lg:-mt-[90px] z-10 rounded">
            <div className="w-full p-8 mb-10 text-center transition-all bg-blue-900 shadow lg:mb-0">
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-8 h-8 text-blue-700 bi bi-people"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">
                    {" "}
                    Certified Teachers
                </h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    cupiditate similique, iure minus sed fugit obcaecati minima quam
                    reiciendis dicta!
                </p>
            </div>
            <div className="w-full p-8 mb-10 text-center transition-all bg-red-900 shadow lg:mb-0 ">
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-8 h-8 text-red-700 bi bi-book"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">
                    {" "}
                    Special Education
                </h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    cupiditate similique, iure minus sed fugit obcaecati minima quam
                    reiciendis dicta!
                </p>
            </div>
            <div className="w-full p-8 mb-10 text-center transition-all bg-blue-900 shadow lg:mb-0 ">
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-8 h-8 text-blue-700 bi bi-hdd-rack"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        <path
                            d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"/>
                    </svg>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">
                    {" "}
                    Book &amp; Library
                </h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    cupiditate similique, iure minus sed fugit obcaecati minima quam
                    reiciendis dicta!
                </p>
            </div>
            <div className="w-full p-8 mb-10 text-center transition-all bg-red-900 shadow lg:mb-0 ">
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-8 h-8 text-red-700 bi bi-mortarboard "
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                        <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                    </svg>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">
                    {" "}
                    Certification{" "}
                </h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    cupiditate similique, iure minus sed fugit obcaecati minima quam
                    reiciendis dicta!
                </p>
            </div>
        </div>
        <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
                        We are just getting started!
                    </h2>
                    <p className="mb-4">
                        We are creating a tool that helps you be more productive and efficient
                        when building websites and webapps
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    <div className="relative">
                        <div className="absolute -inset-1">
                            <div
                                className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                        </div>
                        <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                            <div className="p-9">
                                <svg
                                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 8L20 8"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 16L14 16"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={7}
                                        cy={8}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 7 8)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={17}
                                        cy={16}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 17 16)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                    Realtime Collaboration
                                </h3>
                                <p className="mt-6 text-base text-gray-600">
                                    Collaborate in realtime with other editors in a project. See what
                                    othe editors are doing and edit even a simple text together
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                        <div className="p-9">
                            <svg
                                className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x={13} y={14} width={2} height={2} rx={1} fill="#111827"/>
                                <rect x={7} y={11} width={2} height={6} rx={1} fill="#111827"/>
                                <rect
                                    x={11}
                                    y={13}
                                    width={2}
                                    height={6}
                                    rx={1}
                                    transform="rotate(90 11 13)"
                                    fill="#111827"
                                ></rect>
                                <rect x={16} y={12} width={2} height={2} rx={1} fill="#111827"/>
                                <path
                                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                                    stroke="#111827"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                                    stroke="#111827"
                                    strokeWidth={2}
                                />
                            </svg>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                History of Edits
                            </h3>
                            <p className="mt-6 text-base text-gray-600">
                                Go back and forth your history of changes and restore your designs
                                to any point in time
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1">
                            <div
                                className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                        </div>
                        <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                            <div className="p-9">
                                <svg
                                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 8L20 8"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 16L14 16"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={7}
                                        cy={8}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 7 8)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={17}
                                        cy={16}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 17 16)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                    Integrations
                                </h3>
                                <p className="mt-6 text-base text-gray-600">
                                    Step up your designs and workflow with integrations with your
                                    favourite tools such as mailchimp, slack, jira etc
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                        <div className="p-9">
                            <svg
                                className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x={13} y={14} width={2} height={2} rx={1} fill="#111827"/>
                                <rect x={7} y={11} width={2} height={6} rx={1} fill="#111827"/>
                                <rect
                                    x={11}
                                    y={13}
                                    width={2}
                                    height={6}
                                    rx={1}
                                    transform="rotate(90 11 13)"
                                    fill="#111827"
                                ></rect>
                                <rect x={16} y={12} width={2} height={2} rx={1} fill="#111827"/>
                                <path
                                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                                    stroke="#111827"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                                    stroke="#111827"
                                    strokeWidth={2}
                                />
                            </svg>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                Publish webpage online
                            </h3>
                            <p className="mt-6 text-base text-gray-600">
                                Effortlessly publish your webpages online and make it available to
                                the world with a click of a button
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1">
                            <div
                                className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                        </div>
                        <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                            <div className="p-9">
                                <svg
                                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 8L20 8"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M4 16L14 16"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={7}
                                        cy={8}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 7 8)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                    <ellipse
                                        cx={17}
                                        cy={16}
                                        rx={3}
                                        ry={3}
                                        transform="rotate(90 17 16)"
                                        stroke="#111827"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                    Forms and Data Collection
                                </h3>
                                <p className="mt-6 text-base text-gray-600">
                                    Collect data and information from users with forms built on
                                    windframe and sort through them in a nice interface
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                        <div className="p-9">
                            <svg
                                className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x={13} y={14} width={2} height={2} rx={1} fill="#111827"/>
                                <rect x={7} y={11} width={2} height={6} rx={1} fill="#111827"/>
                                <rect
                                    x={11}
                                    y={13}
                                    width={2}
                                    height={6}
                                    rx={1}
                                    transform="rotate(90 11 13)"
                                    fill="#111827"
                                ></rect>
                                <rect x={16} y={12} width={2} height={2} rx={1} fill="#111827"/>
                                <path
                                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                                    stroke="#111827"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                                    stroke="#111827"
                                    strokeWidth={2}
                                />
                            </svg>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                                Custom Domains
                            </h3>
                            <p className="mt-6 text-base text-gray-600">
                                Attach your own custom domain to your published projects or website
                                on windframe
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between py-12">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                <div className=" rounded-full border-8 border-amber-400 p-4 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-14 h-14"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                    </svg>
                </div>
                <h3 className="text-3xl font-bold">Safe</h3>
                <p>Our products are secure and private out-of-the-box</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                <div className=" rounded-full border-8 border-amber-400 p-4 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-14 h-14"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold">Efficient</h3>
                <p>Feel good about your wallet and the environment</p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
                <div className=" rounded-full border-8 border-amber-400 p-4 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-14 h-14"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        ></path>
                    </svg>
                </div>
                <h3 className="text-3xl font-bold">Proven</h3>
                <p>Leading the Smart Home world for 10 years</p>
            </div>
        </div>
        <section className="bg-white dark:bg-gray-900">
            <div
                className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Building digital <br/>
                        products &amp; brands.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        This free and open-source landing page template was built using the
                        utility classes from
                        <a target="_blank" className="hover:underline">
                            Tailwind CSS
                        </a>{" "}
                        and based on the components from the{" "}
                        <a href="#/" className="hover:underline" target="_blank">
                            Flowbite Library
                        </a>{" "}
                        and the
                        <a
                            href="https://flowbite.com/blocks/"
                            target="_blank"
                            className="hover:underline"
                        >
                            Blocks System
                        </a>
                        .
                    </p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://github.com/themesberg/landwind"
                            target="_blank"
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <svg
                                className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                            {" "}
                            View on GitHub
                        </a>
                        <a
                            href="https://www.figma.com/community/file/1125744163617429490"
                            target="_blank"
                            className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 200 300"
                                width={1667}
                                height={2500}
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: "\n                            .st0 {\n                                fill: #0acf83\n                            }\n\n                            .st1 {\n                                fill: #a259ff\n                            }\n\n                            .st2 {\n                                fill: #f24e1e\n                            }\n\n                            .st3 {\n                                fill: #ff7262\n                            }\n\n                            .st4 {\n                                fill: #1abcfe\n                            }\n                        "
                                    }}
                                />
                                <title>Figma.logo</title>
                                <desc>Created using Figma</desc>
                                <path
                                    id="path0_fill"
                                    className="st0"
                                    d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                                />
                                <path
                                    id="path1_fill"
                                    className="st1"
                                    d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                                />
                                <path
                                    id="path1_fill_1_"
                                    className="st2"
                                    d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                                />
                                <path
                                    id="path2_fill"
                                    className="st3"
                                    d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                                ></path>
                                <path
                                    id="path3_fill"
                                    className="st4"
                                    d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                                />
                            </svg>
                            Get Figma file
                        </a>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://demo.themesberg.com/landwind/images/hero.png"
                        alt="hero image"
                    />
                </div>
            </div>
        </section>
        <div className="bg-gray-100 dark:bg-gray-800" id="pricing">
            <div className="mx-auto pb-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-base font-semibold leading-7 text-indigo-400">
                        Pricing
                    </h1>
                    <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Whether it's just you, or your entire team - we've got you covered.
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Choose the product that works best
                </p>
                <div
                    className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {/* First Product */}
                    <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h2
                                id="product1"
                                className="text-lg font-semibold leading-8 text-white"
                            >
                                Product Type 1
                            </h2>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            Product details for Product Type 1
                        </p>
                        <p className="mt-6 flex items-baseline gap-x-1">
      <span className="text-4xl font-bold tracking-tight text-white">
        € 10 / unit
      </span>
                            <span className="text-sm font-semibold leading-6 text-gray-300"/>
                        </p>
                        <a
                            href="/order"
                            aria-describedby="product1"
                            className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Order Now
                        </a>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                        >
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                40 units
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                1 feature
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Fast delivery
                            </li>
                        </ul>
                    </div>
                    {/* Second Product */}
                    <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-baseline justify-between gap-x-4">
                            <h2
                                id="product2"
                                className="text-lg font-semibold leading-8 text-white"
                            >
                                Product Type 2
                            </h2>
                            <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                Most popular
                            </p>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            The most popular choice. Product details for Product Type 2
                        </p>
                        <p className="mt-6 flex items-baseline gap-x-1">
      <span className="text-4xl font-bold tracking-tight text-white">
        € 20 / unit
      </span>
                            <span className="text-sm font-semibold leading-6 text-gray-300"/>
                        </p>
                        <a
                            href="/order"
                            aria-describedby="product2"
                            className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Order Now
                        </a>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                        >
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                120 units
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                3 different features
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Fast delivery
                            </li>
                        </ul>
                    </div>
                    {/* Third Product */}
                    <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h2
                                id="product3"
                                className="text-lg font-semibold leading-8 text-white"
                            >
                                Product Type 3
                            </h2>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            Product details for Product Type 3
                        </p>
                        <p className="mt-6 flex items-baseline gap-x-1">
      <span className="text-4xl font-bold tracking-tight text-white">
        € 50 / unit
      </span>
                            <span className="text-sm font-semibold leading-6 text-gray-300"/>
                        </p>
                        <a
                            href="/order"
                            aria-describedby="product3"
                            className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Order Now
                        </a>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                        >
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                240 units
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                6 different features
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-5 flex-none text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Fast delivery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section className="flex items-center pt-5 bg-gray-900">
            <div className="p-4 mx-auto max-w-7xl">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl py-6">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
                        We are just getting started!
                    </h2>
                    <p className="mb-4">
                        We are creating a tool that helps you be more productive and efficient
                        when building websites and webapps
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
                        href="#" >
                        <div className="relative overflow-hidden h-72">
                            <img
                                className="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg"
                                alt=""
                            />
                        </div>
                        <div className="relative z-20 p-8 -mt-16 ">
                            <img
                                className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
                                alt="" />
                            <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                John Doe • 6th Jun, 2022
                              </span>
                            <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                                Lorem ipsum dolor sit amet, consectetur
                            </h2>
                            <p className="text-base leading-7 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam
                            </p>
                        </div>
                    </a>
                    <a
                        className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
                        href="#"
                    >
                        <div className="relative overflow-hidden h-72">
                            <img
                                className="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg"
                                alt=""
                            />
                        </div>
                        <div className="relative z-20 p-8 -mt-16 ">
                            <img
                                className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
                                alt=""
                            />
                            <span
                                className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                John Doe • 6th Jun, 2022
                              </span>
                            <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                                Lorem ipsum dolor sit amet, consectetur
                            </h2>
                            <p className="text-base leading-7 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam
                            </p>
                        </div>
                    </a>
                    <a
                        className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
                        href="#"
                    >
                        <div className="relative overflow-hidden h-72">
                            <img
                                className="object-cover w-full h-full transition-all hover:scale-110"
                                src="https://i.postimg.cc/J0czqNhX/pexels-pixabay-2097.jpg"
                                alt=""
                            />
                        </div>
                        <div className="relative z-20 p-8 -mt-16 ">
                            <img
                                className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500"
                                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
                                alt=""
                            />
                            <span
                                className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                John Doe • 6th Jun, 2022
                              </span>
                            <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                                Lorem ipsum dolor sit amet, consectetur
                            </h2>
                            <p className="text-base leading-7 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section className="flex items-center bg-gray-100 dark:bg-gray-800 py-6">
            <div className="p-4 mx-auto max-w-7xl">
                <div className="text-center mb-14">
                    <h1 className="mb-4 text-3xl font-bold dark:text-white">
                        {" "}
                        Testimonials{" "}
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-500">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam
                        nostrum harum non in at eaque quibusdam eum ratione.
                    </p>
                </div>
                <div className="flex ">
                    <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
                            <div className="relative z-20 p-8">
                                <div className="flex items-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                                        <img
                                            className="object-cover w-full h-full rounded-full"
                                            src="https://i.postimg.cc/gk8KvyTN/ehsan-ahmadi-vs-Wy6nchc-Os-unsplash.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-black dark:text-white">
                                            Hugh Denims
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                  Game Developer
                </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star"
                      viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </span>
                                    </div>
                                </div>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                                    quidem ea necessitatibus voluptates aliquid rerum officiis
                                    explicabo laborum molestiae id
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
                            <div className="relative z-20 p-8">
                                <div className="flex items-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                                        <img
                                            className="object-cover w-full h-full rounded-full"
                                            src="https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-black dark:text-white">
                                            Anthony Gabriel
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                  UI/UX Designer
                </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star"
                      viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </span>
                                    </div>
                                </div>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                                    quidem ea necessitatibus voluptates aliquid rerum officiis
                                    explicabo laborum molestiae id
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
                            <div className="relative z-20 p-8">
                                <div className="flex items-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                                        <img
                                            className="object-cover w-full h-full rounded-full"
                                            src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-black dark:text-white">
                                            Jori King
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                  Backend Developer
                </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-star"
                      viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </span>
                                    </div>
                                </div>
                                <p className="mb-4 text-base leading-7 text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                                    quidem ea necessitatibus voluptates aliquid rerum officiis
                                    explicabo laborum molestiae id
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
};

export default Home;