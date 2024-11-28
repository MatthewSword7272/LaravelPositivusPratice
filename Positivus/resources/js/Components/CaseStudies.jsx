import LearnMoreSimpleGreen from "@/svgs/LearnMoreSimpleGreen";
import Divider from "./Divider";

export default function CaseStudies() {
    const caseStudies = [
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    ];

    return (
        <div className="bg-black py-18 px-15 flex text-white rounded-5xl mb-36 gap-32">
            {caseStudies.map((caseStudy, index) => (
                <div key={index} className="flex w-1/3">
                    <div className="flex flex-col space-y-5">
                        <div className="text-p">{caseStudy}</div>
                        {/* <div className="bg-white w-[0.1rem]"></div> */}
                        <LearnMoreSimpleGreen />
                    </div>
                    {index !== caseStudies.length - 1 && (
                        <div className="flex flex-col w-1 h-full bg-white relative left-14"></div>
                    )}
                </div>
            ))}
        </div>
    );
}
