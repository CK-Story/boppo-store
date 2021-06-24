const demoUsers = [
  {
    username: "admin",
    password: "admin",
  },
];
export function remoteAuthService({ username, password }) {
  const found = demoUsers.find(
    (user) => username.toLocaleLowerCase() === user.username
  );

  if (found?.password === password) {
    return Promise.resolve({
      username: found.username,
      token: username + "_" + Math.random(),
    });
  } else {
    return Promise.reject("Incorrect username or password");
  }
}
