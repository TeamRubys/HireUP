import React, {useState, useEffect} from 'react'
import FreelancerSearchBar from './FreelancerSearchBar'
import FreelancerCardList from './FreelancerCardList'
import FreelancerSideBar from './FreelancerSideBar'

function FreelancerBody({setCurrentPage, freelancers, isLoggedIn, setChat, setUserId}){
  const [role, setRole] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [savedFreelancers, setSavedFreelancers] = useState<Array<any>>([])
  const [filteredFreelancers, setFilteredFreelancers] = useState<Array<any>>([])

  console.log(freelancers)

  useEffect(() => {
    let filtered = freelancers;
    if (role) {
      filtered = filtered.filter(freelancer => freelancer.role.includes(role));
    }
    if (location) {
      filtered = filtered.filter(freelancer => freelancer.location.includes(location));
    }
    if (price) {
      const [min, max] = price.split(',');
      filtered = filtered.filter(freelancer => {
        const rate = Number(freelancer.rate);
        return rate >= Number(min) && rate <= Number(max);
      });
    }
    setFilteredFreelancers(filtered);
  }, [freelancers, role, location, price]);

    return(
        <div className="w-full mb-20 mx-auto mb-8 max-w-screen-xl mt-10">
        <FreelancerSearchBar setCurrentPage={setCurrentPage} setRole={setRole} setLocation={setLocation} setPrice={setPrice} isLoggedIn={isLoggedIn}/>
        <div className="flex">
          <div className="w-3/4 mt-3">
            <FreelancerCardList setCurrentPage={setCurrentPage} setSavedFreelancers={setSavedFreelancers} filteredFreelancers={filteredFreelancers} isLoggedIn={isLoggedIn} setUserId={setUserId}/>
          </div>
          <div className="w-1/4 p-3">
            <FreelancerSideBar setChat={setChat} setCurrentPage={setCurrentPage} savedFreelancers={savedFreelancers}/>
          </div>
        </div>
      </div>
    )
}

export default FreelancerBody