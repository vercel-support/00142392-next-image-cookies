import Image from 'next/image'

export default function Home() {
  const setCookie = () => {
    document.cookie = 'test=1'
  }

  return (
    <main>
      <button onClick={setCookie}>Set cookie</button>
      <Image
        src="/api/image"
        alt="Image"
        unoptimized
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
