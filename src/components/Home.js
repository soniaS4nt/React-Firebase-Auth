import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">Welcome {user.displayNAme || user.email}</h1>
      </div>

      <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 rounded py-2 px-4 text-white font-bold">Logout</button>

    </div>
  );
}
