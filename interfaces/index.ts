// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type FreelancerData = {
  education: string,
  freelancer_name: string,
  location: string,
  portfolio: Array<string>,
  rate: string,
  skills: Array<string>,
  work_history: Array<WorkHistory>
}

export type WorkHistory = {
  company: string,
  position: string,
  duration: string,
  description: string
}


export type ConnectionsType = [{
  friend_id:number
}]
