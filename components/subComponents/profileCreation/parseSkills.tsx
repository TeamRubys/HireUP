import { useState } from 'react'

const ParseSkills = ({ value = [], onChange }) => {
  const [text, setText] = useState<string>(value.join("\n"));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange(value.split("\n"));
  };

  return <textarea onChange={handleChange} value={text} placeholder="Add a skill and press enter for each additional skill" id="skills-input"/>;
};

export default ParseSkills