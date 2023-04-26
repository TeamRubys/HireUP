import { useState } from 'react'

const ParseSkills = ({ value = [], onChange }) => {
  const [text, setText] = useState<string>(value.join("\n"));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange(value.split("\n"));
  };

  return <textarea onChange={handleChange} value={text} placeholder="Add skill(s)" id="skills-input" className="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6]"/>;
};

export default ParseSkills