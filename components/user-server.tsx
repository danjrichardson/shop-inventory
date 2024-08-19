import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const session = await getSession();
  if (!session) return <div>Not logged in</div>;

  const { user } = session;

  return (
      user && (
          <div>
            Server<br />
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}