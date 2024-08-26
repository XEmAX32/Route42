import Image from "next/image";
import Graphic from "../components/Graphic";
import { Cover } from "@/components/ui/cover";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import Form from "@/components/Form";

const projects = [
  {
    title: "Opportunities",
    description: "Find your next step in a pool of more than 200 opportunities. Drops in October.",
    link: "",
  },
  {
    title: "Mentors",
    description: "Find the coolest people around, get to chat with them and one up your career. Drops in November.",
    link: "",
  },
  {
    title: "More",
    description: "more stuff to come, keep in contact to stay updated.",
    link: "",
  },
];

type TalentProp = {
  name: string;
  description: string;
  url: string;
  year: number;
};

const Talent = ({ name, description, url, year }: TalentProp) => {
  return (
    <div className="mb-3">
      <LinkPreview url={url}>
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500">{name}</span> {description} [{year}]
      </LinkPreview>
    </div>
  )
}

const people = [
  {
    name: "JAGO (Jacopo Cardillo)",
    description: "Sculptor, known as \"the modern Michelangelo\"",
    category: "artist",
    link: "https://jago.art/en",
    year: 1987,
  },
  {
    name: "Federico Faggin",
    description: "Inventor of the Microchip and the Touchscreen",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Federico_Faggin",
    year: 1941,
  },
  {
    name: "Salvatore Sanfilippo",
    description: "Inventor of the Redis",
    category: "tech",
    link: "http://invece.org",
    year: 1977,
  },
  {
    name: "Alessandro Volta",
    description: "Inventor of the battery",
    category: "tech",
    link: "http://invece.org",
    year: 1977,
  },
  {
    name: "Pierluigi Zappacosta",
    description: "Founder of Logitech",
    category: "tech",
    link: "https://it.wikipedia.org/wiki/Pierluigi_Zappacosta",
    year: 1950,
  },
  {
    name: "Giacomo Marini",
    description: "Founder of Logitech",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Giacomo_Marini",
    year: 1951,
  },
  {
    name: "Amadeo Giannini",
    description: "Founder of Bank of Italy (now Bank of America)",
    category: "finance",
    link: "https://en.wikipedia.org/wiki/Amadeo_Giannini",
    year: 1870,
  },
  {
    name: "Adriano Olivetti",
    description: "Inventor of the personal computer",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Adriano_Olivetti",
    year: 1901,
  },
  {
    name: "Riccardo Zacconi",
    description: "Founder King.com (Candy Crush)",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Riccardo_Zacconi",
    year: 1967,
  },
  {
    name: "Luca Ferrari",
    description: "Founder and CEO of Bending Spoons",
    category: "tech",
    link: "https://www.crunchbase.com/person/luca-ferrari",
    year: 1985,
  },
  {
    name: "Enrico Fermi",
    description: "Creator of the first nuclear reactor, Nobel laureate",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1901,
  },
  {
    name: "Massimo Banzi",
    description: "Creator of Arduino",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1901,
  },
  {
    name: "Antonio Meucci",
    description: "Inventor of the telephone",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1901,
  },
  {
    name: "Antonio Pacinotti",
    description: "Inventor of the dynamo and the AC motor",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1841,
  },
  {
    name: "Evangelista Torricelli",
    description: "Inventor of the barometer",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1901,
  },
  {
    name: "Giulio Natta",
    description: "Inventor of polypropilene (plastic) production, Nobel laureate",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1903,
  },
  {
    name: "Augusto Marietti",
    description: "Co-Founder of Kong",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Kong_Inc",
    year: 1901,
  },
  {
    name: "Marco Palladino",
    description: "Co-Founder of Kong",
    category: "tech",
    link: "https://en.wikipedia.org/wiki/Kong_Inc",
    year: 1901,
  },
  {
    name: "Eugenio Bersanti, Felice Matteucci",
    description: "Inventor of the internal combustion engine",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Enrico_Fermi",
    year: 1901,
  },
  {
    name: "Mario Draghi",
    description: "Inventor of Quantitative Easing method",
    category: "finance",
    link: "https://en.wikipedia.org/wiki/Mario_Draghi",
    year: 1901,
  },
  {
    name: "Franco Modigliani",
    description: "Considered the invetor of the rational expectations hypothesis, Nobel Memorial Prize",
    category: "finance",
    link: "https://en.wikipedia.org/wiki/Franco_Modigliani",
    year: 1947,
  },
  {
    name: "Guglielmo Marconi",
    description: "Inventor of the radio, Nobel laurate",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Guglielmo_Marconi",
    year: 1901,
  },
  {
    name: "Carlo Rubbia",
    description: "Discoverer of W and Z particles, Nobel laureate",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Carlo_Rubbia",
    year: 1901,
  },
  {
    name: "Carlo Rovelli",
    description: "Theorist of the loop quantum gravity",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Carlo_Rovelli",
    year: 1901,
  },
  {
    name: "Emilio Segrè",
    description: "Discoverer of the antiproton, Nobel laureate",
    category: "science",
    link: "https://en.wikipedia.org/wiki/Emilio_Segrè",
    year: 1905,
  },
  {
    name: "Giorgio Parisi",
    description: "Father of the modern field of chaos theory",
    category: "science",
    link: "https://www.parisigiorgio.it",
    year: 1901,
  },
  {
    name: "Maria Montessori",
    description: "Inventor of the Montessori educational method.",
    category: "educator",
    link: "https://en.wikipedia.org/wiki/Maria_Montessori",
    year: 1901,
  },
  {
    name: "Francesco Rampazetto",
    description: "Inventor of the TypeWriter",
    category: "educator",
    link: "https://en.wikipedia.org/wiki/Typewriter",
    year: 1901,
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col align-start">
      <div className="relative">
        <Graphic />
        <div className="background-gradient"></div>
        <div className="absolute inset-0 top-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Welcome to <br/> Italian Renaissence 2.0
          </h1>
        </div>
      </div>
      <h3 className="mt-20 text-xl md:text-xl lg:text-2xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6">
        Talent isn&apos;t scarce in Italy, opportunity is. <br/>
        We don&apos;t lack brilliance, we lack the spark of collective ambition. <br/>
        Our heritage isn&apos;t a weight, it&apos;s for launching moonshots. <br/>
        We&apos;re not chasing Silicon Valley, we&apos;re unleashing the Italian Renaissance 2.0. <br/>
      </h3>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="flex flex-col justify-start pl-28 z-50">
        <h2 className="text-3xl font-semibold mb-4">Amazing italian people</h2>
        <h3 className="text-2xl font-medium mb-3 mt-4">In tech</h3>
        {people.filter((person) => person.category == "tech").sort((el1, el2) => el2.year - el1.year).map((person, index) => <Talent key={index} name={person.name} description={person.description} url={person.link} year={person.year} />)}
        <h3 className="text-2xl font-medium mb-3 mt-4">In science</h3>
        {people.filter((person) => person.category == "science").sort((el1, el2) => el2.year - el1.year).map((person, index) => <Talent key={index} name={person.name} description={person.description} url={person.link} year={person.year} />)}
        <h3 className="text-2xl font-medium mb-3 mt-4">In economics / finance</h3>
        {people.filter((person) => person.category == "finance").sort((el1, el2) => el2.year - el1.year).map((person, index) => <Talent key={index} name={person.name} description={person.description} url={person.link} year={person.year} />)}
        <h3 className="text-2xl font-medium mb-3 mt-4">In science</h3>
        {people.filter((person) => person.category == "educator").sort((el1, el2) => el2.year - el1.year).map((person, index) => <Talent key={index} name={person.name} description={person.description} url={person.link} year={person.year} />)}
        <h3 className="text-2xl font-medium mb-3 mt-4">In art</h3>
        {people.filter((person) => person.category == "artist").sort((el1, el2) => el2.year - el1.year).map((person, index) => <Talent key={index} name={person.name} description={person.description} url={person.link} year={person.year} />)}
      </div>
      <Form />
    </main>
  );
}
