import '@styles/globals.css';

export const metadata = {
  title: "Vortex Gaming Lounge",
  description: "Best gaming lounge in Pune"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
