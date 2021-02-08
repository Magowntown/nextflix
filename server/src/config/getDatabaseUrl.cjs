const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/nextflix_development",
      test: "postgres://postgres:postgres@localhost:5432/nextflix_test",
      e2e: "postgres://postgres:postgres@localhost:5432/nextflix_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
