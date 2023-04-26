import React, {useState} from 'react'
import FreelancerSearchBar from './FreelancerSearchBar'
import FreelancerCardList from './FreelancerCardList'
import FreelancerSideBar from './FreelancerSideBar'

function FreelancerBody({setCurrentPage, freelancers}){
  const [role, setRole] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [savedFreelancers, setSavedFreelancers] = useState<Array<any>>([])
  const [filteredFreelancers, setFilteredFreelancers] = useState<Array<any>>([])

  //useEffect(() =>{
  //function filters freelancers list
  //})

    return(
        <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl">
        <FreelancerSearchBar setCurrentPage={setCurrentPage} setRole={setRole} setLocation={setLocation} setPrice={setPrice} />
        <div className="flex">
          <div className="w-3/4 mt-3">
            <FreelancerCardList setCurrentPage={setCurrentPage} setSavedFreelancers={setSavedFreelancers} filteredFreelancers={filteredFreelancers}/>
          </div>
          <div className="w-1/4 p-3">
            <FreelancerSideBar setCurrentPage={setCurrentPage} savedFreelancers={savedFreelancers}/>
          </div>
        </div>
      </div>
    )
}

export default FreelancerBody