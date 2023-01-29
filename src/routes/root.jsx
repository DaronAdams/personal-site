import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Aboutme from "../components/Aboutme";
import IconHolder from "../components/IconHolder";

export default function Root() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Aboutme />
      <IconHolder />
    </>
  );
}