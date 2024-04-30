import { Outlet } from 'react-router-dom';
import loveGif from "./assets/love-unscreen.gif"
export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>

      {/* position absolute elements */}
      <img src={loveGif} alt="love gif1" />
      <img src={loveGif} alt="love gif2" />
      <img src={loveGif} alt="love gif3" />
      <img src={loveGif} alt="love gif4" />
    </>
  );
}
