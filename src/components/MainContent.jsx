import Header from './Header'
import Content from './Content'
import Player from './Player'


const MainContent = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <Header />
    <Content />
    <Player />
    </div>
    </>
  )
}

export default MainContent;