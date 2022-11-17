import { BASE_URL } from "../constants";

type URLSuccessProps = {
  short: string;
};
const URLSuccess = ({ short }: URLSuccessProps) => {
  const url = `${BASE_URL}/${short}`;
  return (
    <>
      <p className="text-lg text-success text-center">SUCCESS! Your shortened URL is:</p>
      <a href={`/${short}`} target="_blank" className="block text-xl text-center text-accent underline">
        {url}
      </a>
    </>
  );
};

export default URLSuccess;
