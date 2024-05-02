const Tile = ()=>{
    return (
        <div className="bg-[#204031] flex justify-start content-center h-28 w-full rounded-full border-solid mt-3  ">
           <h1 className=" font-semibold m-4 content-start" >Quiz Title</h1>
           <div className=" flex justify-center content-start space-x-12 my-5 mx-4  ">
            <img src="src/utils/icons/start.png" alt="" />
            <img src="src/utils/icons/review.png" alt="" />
            <img src="src/utils/icons/delete.png" alt="" />
           </div>
        </div>

    )
};
export default Tile;