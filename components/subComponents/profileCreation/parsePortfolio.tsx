import { useState } from 'react'

const ParsePortfolio = ({ value = [], onChange }) => {
  const [text, setText] = useState<string>(value.join("\n"));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange(value.split("\n"));
  };

  return <textarea onChange={handleChange} value={text} placeholder="Add a link to an example of your work and press enter for each additional link" id="portfolio-input"/>;
};

export default ParsePortfolio