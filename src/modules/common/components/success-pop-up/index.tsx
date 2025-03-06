import { SquareCheck } from "lucide-react";
import Image from "next/image";

interface SuccessProps {
    label: string
}

const Success: React.FC<SuccessProps> = ({ label }) => {
    return (
        <div className="w-full min-h-[15rem] p-4">
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-[150px] h-[60px] relative">
                    <Image
                        alt="logo"
                        src="/images/logo.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2">
                    {/* <span className="font-semibold">Welcome to</span> */}
                    <span className="font-semibold text-secondary_color">
                        NatSay.com.mm
                    </span>
                </div>
                <div className="mt-6 rounded-xl border border-secondary_color flex flex-row items-center gap-4 p-4">
                <div>
                    <SquareCheck fill="#796f6f" size={20} color="white" strokeWidth={1.25} />
                </div>
                <span className="text-xs text-secondary_color">{label}</span>
            </div>
            </div>
            
        </div>
    );
};
export default Success;
