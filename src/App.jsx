import { Box, Text, Newline, useApp, useInput } from "ink";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const { exit } = useApp();

  useInput((input, key) => {
    if (input.toLowerCase() === "q") {
      exit();
    } else if (key.return) {
      setCount((c) => c + 1);
    }
  });

  return (
    <Box flexDirection="column" alignSelf="flex-start" borderStyle="round" paddingX={2} paddingY={1}>
      <Text>
        Count: <Text color="green">{count}</Text>
      </Text>

      <Newline />

      <Text>Press [Enter] to increment.</Text>
      <Text>Press [Q] to quit.</Text>
    </Box>
  );
}
