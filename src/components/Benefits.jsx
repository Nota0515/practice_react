import Section from "./Section";
import Heading from "./Heading";
import Card from "./Card";

const Benefits = () => {
  return <Section id="features">
    <div className="container  relative z-1">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Look at the world with the stunning AI sound"/>
        <Card className="md:max-w-md lg:max-w-2xl" title="Goal"/>
    </div>
  </Section>
}

export default Benefits;