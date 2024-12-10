import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getGenerativeAIResponse } from './api/generativeAI';

interface Story {
  id: number;
  text: string;
  options: string[];
}

const App: React.FC = () => {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialStory = async () => {
      try {
        const response = await axios.get('http://localhost:3001/story/1');
        setStory(response.data);
      } catch (err) {
        setError('Failed to fetch the initial story.');
      } finally {
        setLoading(false);
      }
    };
    fetchInitialStory();
  }, []);

  const handleOptionSelect = async (option: string) => {
    if (!story) return;

    setLoading(true);
    setError(null);

    const prompt = `
${story.text}
Player chooses: ${option}
Continue the story in the same style. Provide 4 options for the player's next action, numbered 1 to 4. Format your response as follows:

Story:
<Continue the story here>

Options:
1. <Option 1>
2. <Option 2>
3. <Option 3>
4. <Option 4>
`;

    try {
      const response = await getGenerativeAIResponse(prompt);

      const newStory = {
        id: story.id + 1,
        text: response.text,
        options: response.options,
      };

      setStory(newStory);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch the next part of the story.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Abandoned City Adventure</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Abandoned City Adventure</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Abandoned City Adventure</h1>
      {story && (
        <>
          <p>{story.text}</p>
          <h3>What will you do?</h3>
          <ul>
            {story.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
