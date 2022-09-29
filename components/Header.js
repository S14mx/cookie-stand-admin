export default function Header({ user, onLogout }) {
  return (

    <header className="flex items-center justify-between h-12 bg-lab-green">
      <div className="flex items-center justify-between w-3/4 mx-auto">
        <p1 className="ml-4 text-2xl font-bold" >Cookie Stand Admin</p1>
        {user
          ? <div>
            <button onClick={onLogout}>Sign Out</button>
          </div>
          : <div></div>}
      </div>

    </header >


  );

}