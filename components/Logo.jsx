import Link from "next/link";

const Logo = ({ light = false }) => {
  const colorClass = light ? "text-whtie" : "text-primary";
  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Abu Hosain</span>
    </Link>
  );
};

export default Logo;
