
export default function Header() {
  return (
    <header className="bg-linear-to-br from from-blue-800 to-blue-600 px-4 py-4 flex fixed top-0 right-0 left-0">
      <div className="flex items-center gap-2">
        <img src="/img/ubg-2.png" className="h-16" />
        <div className="text-white leading-5">
          <h2 className="text-xs lg:text-base">Sistem Informasi Fusion</h2>
          <h1 className="font-semibold lg:text-2xl">Universitas Bumigora</h1>
        </div>
      </div>
    </header>
  )
}
