import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Aboutme from "../components/Aboutme";
import IconHolder from "../components/IconHolder";
import UpArrow from "../components/UpArrow";

export default function Root() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Aboutme />
      <UpArrow />
      <IconHolder />
    </>
  );
}