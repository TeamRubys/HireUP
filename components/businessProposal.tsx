import React, { useState, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import ParseSkills from './subComponents/profileCreation/parseSkills'
import ParseLocation from './subComponents/profileCreation/parseLocation'
import Footer from './subComponents/explorePage/Footer'
import Header from './subComponents/landingPage/header'
import { UserIdContext } from './UserIdContext'

type Inputs = {
  headline: string;
  overview: string;
  skills: string[];
  estimated_timeline: string;
  budget: string;
  locations: string[];
  roles: string[]
};

function BusinessProposal({ setCurrentPage }) {
  const userId = useContext(UserIdContext);
  const [user, setUser] = useState('John')
  const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      headline: "",
      overview: "",
      skills: [],
      estimated_timeline: "",
      budget: "",
      roles: []
    }
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('data', data);
    axios.post('/api/proposals', {
      ...data,
      user_id: userId
    })
      .then(response => {
        console.log('successfully added business proposal to database');
        setCurrentPage(2);
      })
      .catch(err => {
        console.log('unable to add business proposal to database, error:', err);
      })
  }
  return (
    <>
      <Header user={user} setUser={setUser} handleProfile={() => { setCurrentPage(4)}}/>
      <div className="flex flex-col items-center mt-12">
        <div>
          <h2 className="mb-8 text-3xl font-extrabold">Business Proposal</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=" rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-12" >
          <div className="flex flex-col mb-4 relative" data-te-input-wrapper-init>
            <label htmlFor="headline-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Headline</label>
            <input type="text" {...register("headline", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="headline-input"/>
            {errors.headline?.type === 'required'
              ? <p role="alert" className="font-extralight text-red-600">Required</p>
              : <p role="alert" className="font-extralight">Add the title for your project</p>
            }
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="overview-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Project Overview</label>
            <input type="text" {...register("overview", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="overview-input"/>
            {errors.overview?.type === 'required'
              ? <p role="alert" className="font-extralight text-red-600">Required</p>
              : <p role="alert" className="font-extralight">Write a brief description of your project</p>
            }
          </div>
          <div className="flex mb-4">
            <span className="flex flex-col mr-4">
              <label htmlFor="skills-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Skills Required</label>
              <Controller name="skills" rules={{ required: true }} render={({ field }) => {
                const { ref, ...nonRefField } = field;
                return <ParseSkills {...nonRefField} />;
              }}
              control={control} />
              {errors.skills?.type === 'required'
                ? <p role="alert" className="font-extralight text-red-600">Required</p>
                : <p role="alert" className="font-extralight">Press enter for each skill</p>
              }
            </span>
            <span className="flex flex-col">
              <label htmlFor="locations-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Location Preferences</label>
              <Controller name="locations" rules={{ required: true }} render={({ field }) => {
                const { ref, ...nonRefField } = field;
                return <ParseLocation {...nonRefField} />;
              }}
              control={control} />
              {errors.locations?.type === 'required'
                ? <p role="alert" className="font-extralight text-red-600">Required</p>
                : <p role="alert" className="font-extralight">Press enter for each location</p>
              }
            </span>
          </div>
          <div className="flex mb-4">
            <span className="flex flex-col mr-4">
              <label htmlFor="budget-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Budget</label>
              <input type="text" {...register("budget", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="budget-input"/>
              {errors.budget?.type === 'required'
                ? <p role="alert" className="font-extralight text-red-600">Required</p>
                : <p role="alert" className="font-extralight">Enter total budget</p>
              }
            </span>
            <span className="flex flex-col mr-4">
              <label htmlFor="timeline-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Project Timeline</label>
              <input type="text" {...register("estimated_timeline", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]"/>
              {errors.estimated_timeline?.type === 'required'
                ? <p role="alert" className="font-extralight text-red-600">Required</p>
                : <p role="alert" className="font-extralight">Enter project timeline</p>
              }
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <label htmlFor="roles-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Roles Needed</label>
            <select {...register("roles", { required: true })} multiple id="roles-input" className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]">
              <option value="Software Engineer">Software Engineer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="Backend Engineer">Backend Engineer</option>
            </select>
            {errors.roles?.type === 'required'
                ? <p role="alert" className="font-extralight text-red-600">Required</p>
                : <p role="alert" className="font-extralight">Select role(s) needed</p>
            }
          </div>
          <div className="flex items-center justify-center mt-4">
            <button type="submit" className="border rounded p-2 text-white bg-emerald-600">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BusinessProposal;