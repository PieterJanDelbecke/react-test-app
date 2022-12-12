import { useState } from "react";

function SelectDiv() {
  const [open, setOpen] = useState(false);
  const options = [
    { id: "001", label: "one" },
    { id: "002", label: "two" },
    { id: "003", label: "three" },
    { id: "004", label: "four" },
    { id: "005", label: "five" },
  ];

  return (
    <>
      <div>SelectDiv</div>
    </>
  );
}

export default SelectDiv;
