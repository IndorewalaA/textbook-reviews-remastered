import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between p-8">
            <h1>RateYourTextbooks</h1>
            <input
                type="text"
                placeholder="Search..."
            />
            <div className="space-x-4">
                <Link href="">Home</Link>
                <Link href="">Courses</Link>
                <Link href="">Login</Link>
                <Link href="">Register</Link>
            </div>
        </div>
    );
}