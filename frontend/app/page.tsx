import Tabs from './components/tabs'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="bg-black flex flex-col items-center justify-betwee w-screen h-screen overflow-y-hidden">
      <Navbar />
      <Tabs/>
    </main>
  )
}
