import { BASE_URL } from "../constants";

type URLSuccessProps = {
  short: string;
};
const URLSuccess = ({ short }: URLSuccessProps) => {
  const url = `${BASE_URL}/${short}`;
  return (
    <>
      <p className="text-lg text-success">SUCCESS! Your shortened URL is:</p>
      <p>
        <a href={`/${short}`} target="_blank" className="text-lg text-accent underline">
          {url}
        </a>
      </p>
    </>
  );
};

export default URLSuccess;
