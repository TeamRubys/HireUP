import React from 'react'
import Link from 'next/link'
import { useForm, useFieldArray, SubmitHandler, Controller } from 'react-hook-form'
import ParsePortfolio from './subComponents/profileCreation/parsePortfolio'
import ParseSkills from './subComponents/profileCreation/parseSkills'

type Inputs = {
  role: string;
  rate: string;
  work_history: {
    company: string;
    position: string;
    duration: string;
  }[];
  education: string;
  portfolio: string[];
  skills: string[];
  location: string;
};

// const ParsePortfolio = ({ value = [], onChange }) => {
//   const [text, setText] = React.useState<string>(value.join("\n"));

//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const value = e.target.value;

//     setText(value);
//     onChange(value.split("\n"));
//   };

//   return <textarea onChange={handleChange} value={text} placeholder="Add a link to an example of your work and press enter for each additional link"/>;
// };
// const ParsePortfolio = ({ value = [], onChange }) => {
//   const [text, setText] = React.useState<string>(value.join("\n"));

//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const value = e.target.value;

//     setText(value);
//     onChange(value.split("\n"));
//   };

//   return <textarea onChange={handleChange} value={text} placeholder="Add a link to an example of your work and press enter for each additional link"/>;
// };

function ProfileCreation() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      role: "",
      rate: "",
      work_history: [{ company: "", position: "", duration: "" }],
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
  }
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2>PROFILE CREATION</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
        <div className="flex">
          <span className="flex flex-col mr-4">
            <label htmlFor="role-input" className="font-bold text-xl">Role</label>
            <input type="text" {...register("role")} className="border border-neutral-500" id="role-input"/>
          </span>
          <span className="flex flex-col">
            <label htmlFor="rate-input" className="font-bold text-xl">Hourly Rate</label>
            <input type="text" {...register("rate")} className="border border-neutral-500" id="rate-input"/>
          </span>
        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-xl">Work History</h3>
            {fields.map((field, index) => (
              <div key={field.id} className="border border-slate-400">
                <h4 className="font-semibold">Job {index + 1}</h4>
                <div className="flex flex-col">
                  <label htmlFor="company-input">Company</label>
                  <input className="border border-neutral-500" id="company-input" {...register(`work_history.${index}.company` as const)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="position-input">Position</label>
                  <input className="border border-neutral-500" id="position-input" {...register(`work_history.${index}.position` as const)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="duration-input">Duration (months)</label>
                  <input className="border border-neutral-500" id="duration-input" {...register(`work_history.${index}.duration` as const)} />
                </div>
                <button type="button" className="border rounded p-2 text-white bg-red-400" onClick={() => remove(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => append({ company: "", position: "", duration: "" })}>Add</button>
        </div>
        <div className="flex">
          <span className="flex flex-col mr-4">
            <label htmlFor="education-input" className="font-bold text-xl">Education</label>
            <input type="text" {...register("education")} className="border border-neutral-500" id="education-input"/>
          </span>
          <span className="flex flex-col">
            <label htmlFor="portfolio-input" className="font-bold text-xl">Work Samples</label>
            <Controller name="portfolio" render={({ field }) => {
              const { ref, ...nonRefField } = field;
              return <ParsePortfolio {...nonRefField} />;
            }}
            control={control} />
          </span>
        </div>
        <div className="flex">
          <span className="flex flex-col mr-4">
            <label htmlFor="skills-input" className="font-bold text-xl">Skills</label>
            <Controller name="skills" render={({ field }) => {
              const { ref, ...nonRefField } = field;
              return <ParseSkills {...nonRefField} />;
            }}
            control={control} />
          </span>
          <span className="flex flex-col mr-4">
            <label htmlFor="location-input" className="font-bold text-xl">Location</label>
            <input type="text" {...register("location")} className="border border-neutral-500" id="location-input"/>
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="border rounded p-2 text-white bg-emerald-600">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default ProfileCreation;