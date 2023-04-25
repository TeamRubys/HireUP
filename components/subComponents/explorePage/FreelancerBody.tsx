import FreelancerSearchBar from './FreelancerSearchBar'
import FreelancerCardList from './FreelancerCardList'
import FreelancerSideBar from './FreelancerSideBar'

function FreelancerBody(){
    return(
        <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl">
        <FreelancerSearchBar/>
        <div className="flex">
          <div className="w-3/4 mt-3">
            <FreelancerCardList />
          </div>
          <div className="w-1/4 p-3">
            <FreelancerSideBar />
          </div>
        </div>
      </div>
    )
}

export default FreelancerBody