import { useEffect } from "react";
type HelmetProps = {
    title: string;
    description: string;
}
const Helmet = ({ title, description }: HelmetProps) => {
  useEffect(() => {
    document.title = title;
    document.querySelector("meta-[name='description']")?.setAttribute("content", description);
  }, [title, description]);

  return (
    <>

    </>
  )
}

export default Helmet;