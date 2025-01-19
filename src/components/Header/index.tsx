import Link from "next/link";

export function Header() {
  return (
    <div
      className={`p-6`}
    >
       <Link
          href="https://drive.google.com/drive/folders/1LlIYE-RSdiewmPfpWViG3Cd2I6DWeAZW?usp=sharing"
          className="md:hidden rounded-full bg-customYellow p-2 text-2xl text-customShade"
        >
          CV
        </Link>
      <nav className="hidden md:flex justify-between items-center gap-5 p-4 rounded-lg max-w-2xl mx-auto text-2xl backdrop-blur-lg bg-white/10 text-customBlue">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#work">Work</Link>
        <Link href="#projects">Projects</Link>
        <Link
          href="https://drive.google.com/drive/folders/1LlIYE-RSdiewmPfpWViG3Cd2I6DWeAZW?usp=sharing"
          className="rounded-full bg-customYellow p-2 text-2xl text-customShade"
        >
          CV
        </Link>
      </nav>
    </div>
  );
}
