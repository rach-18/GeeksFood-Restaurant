function Navbar() {
    return(
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                    <span className="ml-3 text-xl">GeeksFood</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold text-white">
                    <a className="mr-5 text-[#1D4ED8] cursor-pointer">Home</a>
                    <a className="mr-5 hover:text-[#1D4ED8] cursor-pointer">Quote</a>
                    <a className="mr-5 hover:text-[#1D4ED8] cursor-pointer">Restaurants</a>
                    <a className="mr-5 hover:text-[#1D4ED8] cursor-pointer">Foods</a>
                    <a className="mr-5 hover:text-[#1D4ED8] cursor-pointer">Contact</a>
                </nav>
                <button className="inline-flex items-center bg-[#048EFE] border-0 py-2 px-3 focus:outline-none hover:bg-[#1D4ED8] rounded-lg text-white text-base mt-4 md:mt-0 font-semibold">Get Started</button>
            </div>
        </header>
    );
}

export default Navbar;
