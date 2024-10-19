import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-200 h-48 flex flex-col gap-2 justify-center items-center">
      <h2 className="text-gray-900 font-bold">Brickbloom Property Sourcing</h2>
      <p className="text-gray-600 text-center">Copyright {new Date().getFullYear()} © 2024 Brikbloom Property Sourcing - All Rights Reserved.</p>
      <Link href="/privacypolicy" className="text-gray-600 underline">Privacy Policy</Link>
    </div>
  )
}

export default Footer;