import FreelancerSearchBar from './FreelancerSearchBar'
import FreelancerCardList from './FreelancerCardList'
import FreelancerSideBar from './FreelancerSideBar'

function FreelancerBody({setCurrentPage}){
    return(
        <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl">
        <FreelancerSearchBar setCurrentPage={setCurrentPage}/>
        <div className="flex">
          <div className="w-3/4 mt-3">
            <FreelancerCardList setCurrentPage={setCurrentPage}/>
          </div>
          <div className="w-1/4 p-3">
            <FreelancerSideBar setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
    )
}

export default FreelancerBody