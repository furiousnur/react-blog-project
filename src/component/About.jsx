import React from 'react';
const About = () => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="bg-black">
                    <section
                        id="features"
                        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
                    >
                        <div className="relative mx-auto max-w-5xl text-center">
      <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
        Why choose us
      </span>
                            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                                Build a Website That Your Customers Love
                            </h2>
                            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                                Our templates allow for maximum customization. No technical skills
                                required – our intuitive design tools let you get the job done easily.
                            </p>
                        </div>
                        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                                        borderColor: "rgb(93, 79, 240)"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-color-swatch"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                                        <line x1={17} y1={17} x2={17} y2="17.01" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Customizable</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    Tailor your landing page's look and feel, from the color scheme to the
                                    font size, to the design of the page.
                                </p>
                            </div>
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                                        borderColor: "rgb(93, 79, 240)"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-bolt"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Fast Performance</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    We build our templates for speed in mind, for super-fast load times so
                                    your customers never waver.
                                </p>
                            </div>
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div
                                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                                        borderColor: "rgb(93, 79, 240)"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-tools"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                        <polyline points="12 8 7 3 3 7 8 12" />
                                        <line x1={7} y1={8} x2="5.5" y2="9.5" />
                                        <polyline points="16 12 21 17 17 21 12 16" />
                                        <line x1={16} y1={17} x2="14.5" y2="18.5" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Fully Featured</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    Everything you need to succeed and launch your landing page, right out
                                    of the box. No need to install anything else.
                                </p>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                                borderColor: "rgba(92, 79, 240, 0.2)"
                            }}
                        ></div>
                        <div
                            className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                                borderColor: "rgba(92, 79, 240, 0.2)"
                            }}
                        ></div>
                    </section>
                </div>
            </div> 
            <div className="container mx-auto my-16 p-9 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1">
                        <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                About Us
                            </h1>
                        </div>
                        <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
                            sit
                            amet.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                             fill="currentColor" className="bi bi-file-earmark-text w-10 h-10"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                            <path
                                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                             fill="currentColor" className="bi bi-people-fill w-10 h-10" viewBox="0 0 16 16">
                                            <path
                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fill-rule="evenodd"
                                                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,590
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                             fill="currentColor" className="bi bi-person-fill w-10 h-10" viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white dark:bg-gray-900">
                                    <span className="text-blue-500 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                             fill="currentColor" className="bi bi-alarm-fill w-10 h-10" viewBox="0 0 16 16">
                                            <path
                                                d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100
                                    </p>
                                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Timing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <img src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg" alt=""
                             className="relative z-40 object-cover w-full h-full rounded" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-16 p-9 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1">
                        <div className="lg:max-w-md"> 
                            <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                                We are the large business expert in Europe and Asia</h2>
                            <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                isopinus ipaino amet Lorem ipsum dor amet is a dummy text orem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                isopinus ipaino amet Lorem ipsum dor amet is a dummy text</p>
                            <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                isopinus ipaino amet Lorem ipsum dor amet is a dummy text</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex mb-4">
                                <span
                                    className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                        <path
                                            d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                        <path
                                            d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"/>
                                    </svg>
                                </span>
                            <div>
                                <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Design
                                </h2>
                                <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                    isopinus
                                    ipaino
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                        <span
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </span>
                            <div>
                                <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Strategy
                                </h2>
                                <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                    isopinus
                                    ipaino
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                        <span
                            className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                <path
                                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                </path>
                            </svg>
                        </span>
                            <div>
                                <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                    Develop
                                </h2>
                                <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem ipsum dor amet
                                    isopinus
                                    ipaino
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default About;