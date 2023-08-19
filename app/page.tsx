import DetailsSection from "./components/DetailsSection"
import Gap from "./components/Gap"
import GreetingSection from "./components/GreetingSection"
import OpeningSection from "./components/OpeningSection"
import TimeSection from "./components/TimeSection"

export default function Home() {
  return (
    <>
        <OpeningSection/>
        <GreetingSection/>
        <Gap/>
        <TimeSection/>
        <DetailsSection/>
    </>
  )
}
