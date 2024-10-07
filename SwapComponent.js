import { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";

function SwapComponent() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  const [error, setError] = useState("");

  const handleSwap = async () => {
    if (!fromCurrency || !toCurrency || !amount || amount <= 0) {
      setError("All fields are required and amount must be positive.");
      return;
    }

    setError("");
    setIsSwapping(true);

    try {
      const response = await fetch("https://api.exolix.com/v1/swap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer YOUR_EXOLIX_API_KEY`,
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          amount: amount,
        }),
      });

      if (!response.ok) {
        throw new Error(`Swap failed with status: ${response.status}`);
      }

      const data = await response.json();
      alert(`Swap completed successfully: ${data.message}`);
    } catch (err) {
      setError("Swap failed. Please try again.");
    } finally {
      setIsSwapping(false);
    }
  };

  return (
    <Box>
      <Input
        placeholder="From Currency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        mb={3}
        color="brand.white"
        bg="brand.darkGray"
      />
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        mb={3}
        color="brand.white"
        bg="brand.darkGray"
      />
      <Input
        placeholder="To Currency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        mb={3}
        color="brand.white"
        bg="brand.darkGray"
      />
      <Button
        onClick={handleSwap}
        isLoading={isSwapping}
        colorScheme="green"
        w="full"
      >
        Swap
      </Button>
      {error && <Text color="red.400">{error}</Text>}
    </Box>
  );
}

export default SwapComponent;