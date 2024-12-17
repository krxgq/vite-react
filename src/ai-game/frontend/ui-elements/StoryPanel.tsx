import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getStoryNode } from "../../backend/api/jsonDB";
import { StoryNode } from "../../backend/types/storyTypes";

interface HUDProps {
  onFight: (nodeId: string) => void; // Callback for handling fights
}

const StoryPanel: React.FC<HUDProps> = ({ onFight }) => {
  const [currentNode, setCurrentNode] = useState<StoryNode | null>(null);

  // Fetch the initial story node
  useEffect(() => {
    const fetchInitialNode = async () => {
      try {
        const initialNode = await getStoryNode("start");
        if (initialNode) {
          setCurrentNode(initialNode);
        } else {
          console.error("Initial story node not found.");
        }
      } catch (error) {
        console.error("Error fetching the initial story node:", error);
      }
    };

    fetchInitialNode();
  }, []);

  // Handle option selection
  const handleOptionSelect = async (nextNodeId: string) => {
    try {
      const nextNode = await getStoryNode(nextNodeId);

      if (!nextNode) {
        console.error(`Story node with ID ${nextNodeId} not found.`);
        return;
      }

      if (nextNode.fight) {
        // If a fight is required, call the onFight method
        onFight(nextNodeId);
      } else {
        // Otherwise, continue the story
        setCurrentNode(nextNode);
      }
    } catch (error) {
      console.error("Error fetching the next story node:", error);
    }
  };

  // Render a loading state if the story node is not yet loaded
  if (!currentNode) {
    return (
      <Box
        sx={{
          padding: "16px",
          border: "2px solid black",
          borderRadius: "8px",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <Typography>Loading story...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: "16px",
        border: "2px solid black",
        borderRadius: "8px",
        backgroundColor: "lightgray",
      }}
    >
      {/* Story text */}
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        {currentNode.text}
      </Typography>

      {/* Options */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {currentNode.options.map((option) => (
          <Button
            key={option.nextNodeId}
            variant="contained"
            onClick={() => handleOptionSelect(option.nextNodeId)}
          >
            {option.choiceText}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default StoryPanel;
