import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>

      {/* position absolute elements */}
      <img src="/src/assets/love-unscreen.gif" alt="love gif1" />
      <img src="/src/assets/love-unscreen.gif" alt="love gif2" />
      <img src="/src/assets/love-unscreen.gif" alt="love gif3" />
      <img src="/src/assets/love-unscreen.gif" alt="love gif4" />
    </>
  );
}
