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
        
        <div className="mt-5">
            
            <h3 className="text-lg font-semibold text-gray-700 text-center">
    Trusted by Thousands of Travelers Worldwide
</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 mt-14 max-md:px-2">
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