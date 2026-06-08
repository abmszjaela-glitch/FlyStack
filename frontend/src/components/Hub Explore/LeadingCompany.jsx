import emirates from "../../assets/company/Emirates.png"
import quatar from "../../assets/company/Quatar.jpg"
import SriLankan from "../../assets/company/sri-lankan-airlines.svg"
import turkish from "../../assets/company/turkish.png"
import singapore from "../../assets/company/singapoore.png"
import america from "../../assets/company/america.png"
import luftha from "../../assets/company/luftha.png"


const LeadingCompany = () => {
    const airlines = [emirates, quatar, SriLankan, singapore, turkish,america,luftha];

    return (
        
        <div className="mt-5 w-full">
            <h3 className="text-lg md:text-xl font-bold text-[#0A1E2D] text-center mx-auto max-w-xl drop-shadow-sm">
                Trusted by Thousands of Travelers Worldwide
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-10 md:mt-14 w-full">
                {airlines.map((logo, index) => (
                    <div key={index} className="w-32 h-16 flex items-center justify-center">
                        <img
                            src={logo}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeadingCompany