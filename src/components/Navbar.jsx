const Navbar = () => {
  return (
    <nav className='flex h-10 justify-between w-full p-5'>
          <div className="logo">
            {/* <img src="../../public/.png" alt="OpenAI" />
             */}
             <p>SPU LOGO</p>
          </div>
          <p className="text-xl font-bold">AI LAB | SPU</p>
          <div className="logo">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/OpenAI_Logo.svg" alt="OpenAI" /> */}
            <p>SPCE LOGO</p>
          </div>
        </nav>
  )
}

export default Navbar