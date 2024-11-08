import Header from './Header'
import Content from './Content'
import Player from './Player'


const Page = () => {
  return (
    <>
    <div className='flex flex-col h-screen bg-black'>
    <Header />
    <Content />
    <Player />
    </div>
    </>
  )
}

export default Page;