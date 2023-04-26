import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useForm, useFieldArray, SubmitHandler, Controller } from 'react-hook-form'
import ParsePortfolio from './subComponents/profileCreation/parsePortfolio'
import ParseSkills from './subComponents/profileCreation/parseSkills'
import Footer from './subComponents/explorePage/Footer'
import Header from './subComponents/landingPage/header'

type Inputs = {
  role: string;
  rate: string;
  work_history: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  education: string;
  portfolio: string[];
  skills: string[];
  location: string;
};

function ProfileCreation({setCurrentPage}) {
  const [user, setUser] = useState('John')
  const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      role: "",
      rate: "",
      work_history: [{ company: "", position: "", duration: "", description: "" }],
      education: "",
      portfolio: [],
      skills: [],
      location: ""
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "work_history"
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('data', data);
    axios.post('/api/freelancers', {
      ...data,
      user_id: 1
    })
      .then(response => {
        console.log('successfully added freelancer to database');
        setCurrentPage(2);
      })
      .catch(err => {
        console.log('unable to add freelancer to database, error:', err);
      })
  }
  return (
    <>
      <Header user={user} setUser={setUser} handleProfile={() => {setCurrentPage(4)}}/>
      <div className="flex flex-col items-center mt-12">
          <div>
            <h2 className="mb-8 text-3xl font-extrabold">Freelancer Profile</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-12">
            <div className="flex mb-4">
              <span className="flex flex-col mr-4">
                <label htmlFor="role-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Role</label>
                <select {...register("role", { required: true })} id="roles-input" className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.44rem] leading-[1.6]">
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Frontend Engineer">Frontend Engineer</option>
                  <option value="Backend Engineer">Backend Engineer</option>
                </select>
                {errors.role?.type === 'required'
                  ? <p role="alert" className="font-extralight text-red-600">Required</p>
                  : <p role="alert" className="font-extralight">Select your role</p>
                }
              </span>
              <span className="flex flex-col">
                <label htmlFor="rate-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Hourly Rate</label>
                <input type="text" {...register("rate", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="rate-input"/>
                {errors.rate?.type === 'required'
                  ? <p role="alert" className="font-extralight text-red-600">Required</p>
                  : <p role="alert" className="font-extralight">Enter your hourly rate in $</p>
                }
              </span>
            </div>
            <div className="flex flex-col mb-4">
                <h3 className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Work History</h3>
                {fields.map((field, index) => (
                  <div key={field.id} className="border border-slate-100 mb-2 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <h4 className="font-extrabold text-lg">Job {index + 1}</h4>
                    <div className="flex flex-col">
                      <label htmlFor="company-input" className="font-semibold">Company</label>
                      <input className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="company-input" {...register(`work_history.${index}.company` as const, { required: true })} />
                      {errors.work_history?.[index]?.company?.type === 'required'
                        ? <p role="alert" className="font-extralight text-red-600">Required</p>
                        : <p role="alert" className="font-extralight">Add company name</p>
                      }
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="position-input" className="font-semibold">Position</label>
                      <input className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="position-input" {...register(`work_history.${index}.position` as const, { required: true })} />
                      {errors.work_history?.[index]?.position?.type === 'required'
                        ? <p role="alert" className="font-extralight text-red-600">Required</p>
                        : <p role="alert" className="font-extralight">List last held title</p>
                      }
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="duration-input" className="font-semibold">Duration</label>
                      <input className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="duration-input" {...register(`work_history.${index}.duration` as const, { required: true })} />
                      {errors.work_history?.[index]?.duration?.type === 'required'
                        ? <p role="alert" className="font-extralight text-red-600">Required</p>
                        : <p role="alert" className="font-extralight">Enter tenure with company in months</p>
                      }
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="description-input" className="font-semibold">Description</label>
                      <input className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="description-input" {...register(`work_history.${index}.description` as const, { required: true })} />
                      {errors.work_history?.[index]?.description?.type === 'required'
                        ? <p role="alert" className="font-extralight text-red-600">Required</p>
                        : <p role="alert" className="font-extralight">Add a brief description of job responsibilities</p>
                      }
                    </div>
                    <button type="button" className="border rounded mt-2 p-2 text-white bg-red-400" onClick={() => remove(index)}>Remove</button>
                  </div>
                ))}
                <button type="button" className="border rounded p-2 text-white bg-emerald-300" onClick={() => append({ company: "", position: "", duration: "", description: "" })}>Add Job</button>
            </div>
            <div className="flex mb-4">
              <span className="flex flex-col mr-4">
                <label htmlFor="skills-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Skills</label>
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
                <label htmlFor="portfolio-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Work Samples</label>
                <Controller name="portfolio" rules={{ required: true }} render={({ field }) => {
                  const { ref, ...nonRefField } = field;
                  return <ParsePortfolio {...nonRefField} />;
                }}
                control={control} />
                {errors.portfolio?.type === 'required'
                  ? <p role="alert" className="font-extralight text-red-600">Required</p>
                  : <p role="alert" className="font-extralight">Press enter for each sample</p>
                }
              </span>
            </div>
            <div className="flex mb-4">
              <span className="flex flex-col mr-4">
                <label htmlFor="education-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Education</label>
                <select {...register("education", { required: true })} id="education-input" className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.44rem] leading-[1.6]">
                  <option value="High School Diploma">High School Diploma</option>
                  <option value="Associates's Degree">Associates's Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctoral Degree">Doctoral Degree</option>
                </select>
                {errors.education?.type === 'required'
                  ? <p role="alert" className="font-extralight text-red-600">Required</p>
                  : <p role="alert" className="font-extralight">Select highest level of education</p>
                }
              </span>
              <span className="flex flex-col mr-4">
                <label htmlFor="location-input" className="mb-2 font-extrabold text-xl origin-[0_0] truncate pt-[0.37rem] leading-[1.6]">Location</label>
                <input type="text" {...register("location", { required: true })} className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]" id="location-input"/>
                {errors.location?.type === 'required'
                  ? <p role="alert" className="font-extralight text-red-600">Required</p>
                  : <p role="alert" className="font-extralight">Enter current location</p>
                }
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="border rounded p-2 text-white bg-emerald-600">Submit</button>
            </div>
          </form>
      </div>
      <Footer />
    </>
  );
}

export default ProfileCreation;