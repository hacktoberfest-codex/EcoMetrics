export function Details() {
    return (
        <>
            <article>
                <header className="mx-auto mt-40 max-w-screen-lg bg-green-50 rounded-t-lg  pt-16 text-center shadow-lg bg-cover bg-no-repeat  " style={{ backgroundImage: 'url(https://i.ibb.co/MSQ6NzK/india.png)' }}>
                    <p className="text-gray-500">Published April 4, 2022</p>
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">How we Calculate Air Quality Index
                        & Water Quality Index ?</h1>
                    <p className="mt-6 text-lg text-gray-700">Air Quality Index Indicator</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <button
                            className="rounded-lg bg-[#4e9fff] px-2 py-1 font-medium text-[#ffffff] ">Very
                            Good(0-33)
                        </button>
                        <button
                            className="rounded-lg bg-[#4d9a25] px-2 py-1 font-medium text-[#ffffff] ">Good(34-66)
                        </button>
                        <button
                            className="rounded-lg bg-[#f1c232] px-2 py-1 font-medium text-[#ffffff] ">Fair(67-99)
                        </button>
                        <button
                            className="rounded-lg bg-[#e69138] px-2 py-1 font-medium text-[#ffffff] ">Poor(100-149)
                        </button>
                        <button
                            className="rounded-lg bg-[#a64d79] px-2 py-1 font-medium text-[#ffffff] ">Very
                            Poor(150-200)
                        </button>
                        <button
                            className="rounded-lg bg-[#ff0000] px-2 py-1 font-medium text-[#ffffff] ">Hazardous(200+)
                        </button>
                    </div>
                    <img className="-z-10  mt-10 h-96 w-full object-cover"
                         src="https://images.unsplash.com/photo-1521111756787-d2f69136cedf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=800"
                         alt=""/>
                </header>

                <div
                    className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-green-50 px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
                    <h2 className="text-2xl font-semibold">How Air Quality Index is Calculated</h2>
                    <blockquote className="max-w-lg border-l-4 px-4">
                        "Clean air is not merely a luxury, but a necessity for a healthy and vibrant life."
                        <span className="whitespace-nowrap text-sm">— Suzy Kassemr</span>
                    </blockquote>
                    <p>The Air Quality Index (AQI) is calculated by measuring the concentration of various air
                        pollutants in the atmosphere. Key pollutants include particulate matter (PM2.5 and PM10),
                        ground-level ozone (O3), carbon monoxide (CO), sulfur dioxide (SO2), and nitrogen dioxide (NO2).
                        Each pollutant is assigned a specific weight based on its potential harm to human health.The
                        concentration of each pollutant is monitored at various monitoring stations across a region or
                        city. These measurements are then converted into a standardized index, typically ranging from 0
                        to 500, with corresponding health categories like "Good," "Moderate," "Unhealthy," and so on.
                        The highest pollutant concentration among the measured pollutants determines the overall AQI
                        value for that location. This index provides a quick and easily understandable way for the
                        public to assess air quality and its potential health impacts.</p>
                    <p className="mt-6 text-lg text-gray-700">Water Quality Index Indicator</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <button
                            className="rounded-lg bg-[#09873d] px-2 py-1 font-medium text-[#ffffff] hover:bg-gray-200">Excellent(91-100)
                        </button>
                        <button
                            className="rounded-lg bg-[#8cc63f] px-2 py-1 font-medium text-[#ffffff] hover:bg-gray-200">Good(71-90)
                        </button>
                        <button
                            className="rounded-lg bg-[#f5ee31] px-2 py-1 font-medium text-[#ffffff] hover:bg-gray-200">Average(51-70)
                        </button>
                        <button
                            className="rounded-lg bg-[#f7941d] px-2 py-1 font-medium text-[#ffffff] hover:bg-gray-200">Fair(26-50)
                        </button>
                        <button
                            className="rounded-lg bg-[#ff0000] px-2 py-1 font-medium text-[#ffffff] hover:bg-gray-200">Poor(0-25)
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold">How Water Quality Index is Calculated</h2>
                    <blockquote className="max-w-lg border-l-4 px-4">
                        "Clean water is not just a source of life; it is a source of hope, dignity, and well-being for
                        all humanity."
                        <span className="whitespace-nowrap text-sm">— Ban Ki-moon</span>
                    </blockquote>
                    <p>The Water Quality Index (WQI) is calculated by assessing several key water quality parameters.
                        These parameters typically include measurements of physical, chemical, and biological
                        characteristics such as pH levels, dissolved oxygen content, turbidity, nutrient levels, and the
                        presence of pollutants. Each parameter is assigned a weight or rating based on its importance to
                        water quality and human health.The ratings for each parameter are then combined into an overall
                        index score, which is often scaled to a standard range. A higher index value indicates better
                        water quality, while a lower score suggests poorer water quality. WQI helps policymakers,
                        scientists, and the public understand and manage the health of water bodies, ensuring safe and
                        sustainable water resources for various uses.</p>
                </div>
            </article>

            <div className="w-fit mx-auto mt-10 flex space-x-2">
                <div className="h-0.5 w-2 bg-gray-600"></div>
                <div className="h-0.5 w-32 bg-gray-600"></div>
                <div className="h-0.5 w-2 bg-gray-600"></div>
            </div>

            <aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most
                            Recent Posts</h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor
                            sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://smartcdn.gprod.postmedia.digital/edmontonjournal/wp-content/uploads/2023/01/fog-0100_275094838.jpg?quality=90&strip=all&w=564&h=423&type=webp&sig=8ZmGQ2OytmTwlYOfPyWQwQ"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://www3.epa.gov/region1/airquality/reducepollution.html#:~:text=Reduce%20the%20number%20of%20trips,powered%20lawn%20and%20garden%20equipment."
                                       className=" transition duration-100 text-[#64ad99]  " target="_blank" rel="noreferrer">Actions
                                        You Can Take To Reduce Air Pollution</a>
                                </h2>

                                <p className="text-gray-500">Follow These Steps Everyday To Reduce Air Pollution.</p>

                                <div>
                                    <a href="https://www3.epa.gov/region1/airquality/reducepollution.html#:~:text=Reduce%20the%20number%20of%20trips,powered%20lawn%20and%20garden%20equipment."
                                       className="active:text-rose-700 font-semibold  transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://img.freepik.com/premium-photo/young-woman-protective-mask-feeling-bad-city-with-air-pollution-from-traffic-manufacturing-smog-concept_506452-2913.jpg?w=1060"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://www.tataaig.com/knowledge-center/health-insurance/most-common-air-pollution-diseases"
                                       className="transition duration-100 text-[#64ad99]">How
                                        Air Pollution Affects Our Health</a>
                                </h2>

                                <p className="text-gray-500">List of Common Diseases Caused By Air Pollution</p>

                                <div>
                                    <a href="https://www.tataaig.com/knowledge-center/health-insurance/most-common-air-pollution-diseases"
                                       className=" font-semibold text-rose-500 transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://img.freepik.com/premium-vector/flat-vector-illustration-protecting-water-environment-from-pollution_497982-231.jpg?w=740"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://solarimpulse.com/water-pollution-solutions#"
                                       className=" transition duration-100 text-[#64ad99]">How
                                        To Improve Water Quality?</a>
                                </h2>

                                <p className="text-gray-500">Water Pollution Prevention.</p>

                                <div>
                                    <a href="https://solarimpulse.com/water-pollution-solutions#"
                                       className=" font-semibold  transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://img.freepik.com/free-photo/close-up-view-ecologist-sampling-water-from-river-with-test-tube_342744-949.jpg?w=1060&t=st=1694914133~exp=1694914733~hmac=7f8e8558b78b9eb3f2d1b18e6cdda20a032f6697a3622bd39d10dfdca59de9be"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://www.environmentalpollutioncenters.org/water/diseases/"
                                       className=" transition duration-100 text-[#64ad99]">Effects
                                        of Water Pollution on Human Health</a>
                                </h2>

                                <p className="text-gray-500">Diseases caused By Water Pollution.</p>

                                <div>
                                    <a href="https://www.environmentalpollutioncenters.org/water/diseases/"
                                       className=" font-semibold  transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://img.freepik.com/free-vector/diagram-showing-air-quality-index-with-world-map_1308-40096.jpg?w=826&t=st=1694914639~exp=1694915239~hmac=5176b8e522da81e641f129510807d93659b365ae3ffeda9dfe1e1ecfa27184dd"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://oizom.com/air-quality-index-importance-of-aqi/"
                                       className="transition duration-100 text-[#64ad99]">Air
                                        Quality Index</a>
                                </h2>

                                <p className="text-gray-500">Importance of AQI.</p>

                                <div>
                                    <a href="https://oizom.com/air-quality-index-importance-of-aqi/"
                                       className="active:text-rose-700 font-semibold transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                            <a href="#"
                               className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                <img
                                    src="https://img.freepik.com/premium-vector/pure-water-busines-logo-blue-drop-symbol-sign-icon-pictogram_224528-351.jpg?w=740"
                                    loading="lazy" alt=""
                                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"/>
                            </a>

                            <div className="flex flex-col gap-2">

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10006569/"
                                       className="transition duration-100 text-[#64ad99]">Water
                                        Quality Index</a>
                                </h2>

                                <p className="text-gray-500">Why a WQI !</p>

                                <div>
                                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10006569/"
                                       className=" font-semibold  transition duration-100 text-green-950">Read
                                        more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </aside>
        </>
    )
}