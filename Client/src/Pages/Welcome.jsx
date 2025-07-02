

const Welcome = () => {
  return (
    <div>
      <strong className="mt-5 flex justify-center text-amber-500 text-3xl">Welcome to Blogging Plartform</strong>
      <h1 className="font-[blackadder] mt-30 text-center text-2xl text-[#041014]">Your publishing engagement arena</h1>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white text-2xl font-bold">Proceed to Sign up</h1>
        <button
          className="p-2 rounded text-white bg-amber-800 cursor-pointer hover:bg-amber-700 font-bold mt-3"
        >Proceed</button>
      </div>
    </div>
  )
}

export default Welcome
