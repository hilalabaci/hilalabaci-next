const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Oops! The page you are looking for does not exist.
      </p>
      {/* <link
        href="/"
        style={{
          fontSize: '16px',
          color: '#0070f3',
          textDecoration: 'underline',
        }}
      >
        Go back to Home
      </link> */}
    </div>
  );
};
export default NotFound;
