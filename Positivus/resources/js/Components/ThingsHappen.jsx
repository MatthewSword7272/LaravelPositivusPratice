import ThingsHappenImage from '@/svgs/ThingsHappenImage'
import StyledButton from './StyledButton'

export default function ThingsHappen() {
    return (
        <div className="flex">
            <div className="mt-6 mb-40 bg-gray flex justify-between py-15 lg:px-15 px-13 rounded-5xl items-center w-full">
                <div className="space-y-7 w-full lg:w-1/2">
                    <h3 className="lg:text-h3 text-h3-mobile font-bold">Let's make things happen</h3>
                    <div className="lg:text-p text-p-mobile">
                        Contact us today to learn more about how our digital marketing services can help your business grow and
                        succeed online.
                    </div>
                    <StyledButton
                        buttonText={'Get your free proposal'}
                        bgColour="bg-black"
                        textColour="text-white"
                    ></StyledButton>
                </div>
            </div>
            <ThingsHappenImage />
        </div>
    )
}
