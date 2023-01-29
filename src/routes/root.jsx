import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Aboutme from "../components/Aboutme";

export default function Root() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Aboutme />
    </>
  );
}