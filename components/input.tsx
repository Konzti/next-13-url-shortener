"use client";

import { useState, useRef, MutableRefObject } from "react";
import { getShortUrl, isValidUrl } from "../helpers/helpers";
import { URLPayload } from "../types";
import URLSuccess from "./urlSuccess";

const Input = () => {
  const [value, setValue] = useState<string>("");
  const [short, setShort] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const clickHandler = async () => {
    if (value.trim().length < 1) {
      alert("Please enter a value");
      inputRef.current.focus();
      return;
    }
    if (!isValidUrl(value)) {
      alert("Please enter a valid URL");
      inputRef.current.focus();
      return;
    }
    let payload: URLPayload = {
      longUrl: value,
    };
    const res = await getShortUrl(payload);
    setError(res.error);
    setShort(res.short);
    setValue("");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-xl text-center py-3">Enter a Url to shorten:</h2>
      <div className="flex flex-col gap-3 w-full md:w-4/5 max-w-lg px-3">
        <input
          ref={inputRef}
          type="url"
          className="input input-bordered input-primary rounded-md w-full"
          placeholder="https://example.com"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn btn-accent rounded-md" onClick={clickHandler}>
          shorten
        </button>
        {short !== null ? <URLSuccess short={short} /> : null}
        {error !== null ? <p className="text-lg text-error">{error}</p> : null}
      </div>
    </div>
  );
};

export default Input;
