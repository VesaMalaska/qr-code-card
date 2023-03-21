

export default function Card() {
    return (
        <div 
            className="
                 w-[90%]
                max-w-xs 
                bg-white 
                p-4 
                rounded-2xl 
                text-center 
                font-primary 
                shadow-custom                
            ">
            <img src="qr-code.png" alt="QR code" className="rounded-lg" />
            <h2 className="px-4 pt-4 pb-2 text-xl text-title font-bold">Improve your front-end skills by building projects</h2>
            <p className="px-4 pt-2 pb-4 text-bodytext">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    );
}