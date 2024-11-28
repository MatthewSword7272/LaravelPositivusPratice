export default function Portrait(image) {
    return (
        <div className="relative w-64 h-64">
            {/* Create the flower shape using a mask */}
            <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                        <path
                            id="flowerPath"
                            d="M50 0 C70 0, 100 30, 100 50 C100 70, 70 100, 50 100 C30 100, 0 70, 0 50 C0 30, 30 0, 50 0"
                            fill="white"
                        />
                        <mask id="flowerMask">
                            <use href="#flowerPath" />
                        </mask>
                    </defs>
                </svg>
            </div>

            {/* The actual image with mask applied */}
            <div className="w-full h-full relative overflow-hidden">
                <img src={image} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
