import Card from "./Card";

export default function Overlay() {
    return (
        <div className="flex justify-center items-center min-h-[100svh] bg-overlay-bg">
            <Card />
        </div>
    );
}