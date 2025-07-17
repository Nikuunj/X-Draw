import TitleAnswer from "../ui/TitleAnswer"
import TitleQuestion from "../ui/TitleQuestion"

function SecondSection() {
    return (
        <div className="flex flex-col justify-center mt-24 md:mt-0 space-y-10">
            <div className="space-y-5 flex flex-col items-center">
                <TitleQuestion startNormalText="Why choose" midColorText="XDraw" lastNormalText="?"/>
                <TitleAnswer text="Everything you need to bring your ideas to life, with the simplicity and power you deserve."/>
            </div>

            <div className="mx-auto">
                second
            </div>
        </div>
    )
}

export default SecondSection

