import Image from "next/image";

const KnoxLogo = ({reversed}) => {
    if(!reversed) {
        return (
            <img src="/images/knox-logo.svg" className="w-32" />
         );
    } else {
        return (
            <img src="/images/knox-logo-black.svg" className="w-32" />
         );
    }
   
}

export default KnoxLogo;