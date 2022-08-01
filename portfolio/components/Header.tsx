import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-[#091c29] mb-10'>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis'>
        <Link href='/'>
          <h2 className='cursor-pointer'>Snorre Søvold</h2>
        </Link>
      </div>
    </header>
  )
}