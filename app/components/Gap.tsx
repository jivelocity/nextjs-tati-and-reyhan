const Gap = () => {
  return (
    <div className="relative w-full h-16 bg-grayColor shadow-inner">
        <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-[#4c524e] to-transparent"></div>
        <div className="absolute bottom-0  w-full h-4 bg-gradient-to-t from-[#4c524e] to-transparent"></div>
    </div>
  )
}

export default Gap;
