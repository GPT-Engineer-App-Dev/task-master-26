import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;