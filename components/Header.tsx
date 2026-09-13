import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className="bg-slate-100 text-slate-900 py-4 shadow-md">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div id="header-title" className="text-2xl font-bold">Abel Chiwandire</div>
                <NavLinks />
            </div>
        </header>
    );
}