import FreelancerCard from "./FreelancerCard"

function FreelancerCardList({}) {
    return(
        <div className="mb-20">   
            <FreelancerCard/>
            <FreelancerCard/>
            <FreelancerCard/>
            <FreelancerCard/>
            <div className="flex justify-center mt-10">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded">
          Load More
        </button>
      </div>
        </div>
    )
}

export default FreelancerCardList