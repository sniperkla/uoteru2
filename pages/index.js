export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-[100dvh] grid grid-cols-1 place-items-center">
        <img className="w-[90dvh]" src="./x.png"></img>
        <button className="text-[30px] w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a
            href="https://customer.qrmos.com/uoteru-kohkeaw/order?openExternalBrowser=1"
            target="_blank"
          >
            {' '}
            สั่งเลย
          </a>
        </button>
      </div>
    </div>
  )
}
