import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  // Not using useReducer here. Practice with states.
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [curOp, setCurOp] = useState("");

  function handleSetInput(event: any) {
    console.log(event.target.value);
    setInput((prev) => prev + event.target.value);
  }

  // Handle initial ops and further chaining of ops. Proper chaining still doesn't work.
  function handleSetTotals(event: any) {
    const _val = event.target.value;
    if (_val === "clear") {
      setInput("");
      setTotal(0);
      setCurOp("");
    }
    if (_val === "add") {
      setCurOp("+");
      const _tot = total + Number(input);
      setTotal(_tot);
      setInput("");
    }
    if (_val === "minus") {
      setCurOp("-");
      const _tot = total - Number(input);
      setTotal(_tot);
      setInput("");
    }
    if (_val === "mult") {
      setCurOp("x");
      const _tot = total * Number(input);
      setTotal(_tot);
      setInput("");
    }
  }

  // Function to handle final "="
  function handleQualTo() {
    if (curOp === "+") {
      const _tot = total + Number(input);
      setTotal(_tot);
      setInput("");
      setCurOp("");
    }
    if (curOp === "-") {
      const _tot = total - Number(input);
      setTotal(_tot);
      setInput("");
      setCurOp("");
    }
    if (curOp === "x") {
      const _tot = total || 1 * Number(input || 1);
      setTotal(_tot);
      setInput("");
      setCurOp("");
    }
  }

  return (
    <main className="container mx-auto p-8 max-w-md">
      <div id="total" className="text-sm">
        Total: {total.toString()}
      </div>
      <div id="input" className="text-lg">
        : {curOp + " " + input}
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <Button value={1} onClick={(e) => handleSetInput(e)}>
          1
        </Button>
        <Button value={2} onClick={(e) => handleSetInput(e)}>
          2
        </Button>
        <Button value={3} onClick={(e) => handleSetInput(e)}>
          3
        </Button>
        <Button value={4} onClick={(e) => handleSetInput(e)}>
          4
        </Button>
        <Button value={5} onClick={(e) => handleSetInput(e)}>
          5
        </Button>
        <Button value={6} onClick={(e) => handleSetInput(e)}>
          6
        </Button>
        <Button value={7} onClick={(e) => handleSetInput(e)}>
          7
        </Button>
        <Button value={8} onClick={(e) => handleSetInput(e)}>
          8
        </Button>
        <Button value={9} onClick={(e) => handleSetInput(e)}>
          9
        </Button>
        <Button value={0} onClick={(e) => handleSetInput(e)}>
          0
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-5 py-2">
        {/* Addition: add */}
        <Button
          variant="outline"
          value="add"
          onClick={(e) => handleSetTotals(e)}
        >
          +
        </Button>

        {/* Subtraction: minus */}
        <Button
          variant="outline"
          value="minus"
          onClick={(e) => handleSetTotals(e)}
        >
          -
        </Button>

        {/* Multiply: mult */}
        <Button
          variant="outline"
          value="mult"
          onClick={(e) => handleSetTotals(e)}
        >
          *
        </Button>

        {/* Equal to. This works fine. */}
        <Button variant="outline" onClick={handleQualTo}>
          =
        </Button>

        {/* Clear all and reset */}
        <Button
          variant="outline"
          value="clear"
          onClick={(e) => handleSetTotals(e)}
        >
          AC
        </Button>
      </div>
    </main>
  );
}

export default App;
