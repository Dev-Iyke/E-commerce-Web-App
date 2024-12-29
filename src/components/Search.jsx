import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { RocketIcon } from "@radix-ui/react-icons";

const Search = ({onSearch}) => {
  const [typed, setTyped] = useState('')
  return (
    <div className="flex w-full sm:w-full sm:max-w-sm items-center space-x-1">
      <Input
        onChange={(e) => {
          setTyped(e.target.value);
          onSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for products"
      />
      <Button 
        onClick={(e) => onSearch(typed)}
      type="submit" size='sm'>
        {" "}
        Search <RocketIcon />
      </Button>
    </div>
  );
};

export default Search;
